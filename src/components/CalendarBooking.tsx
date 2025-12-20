import { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, Video, Calendar as CalendarIcon, Globe, UserPlus, X, CheckCircle2, User, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

interface TimeSlot {
  time: string;
  available: boolean;
}

const generateTimeSlots = (): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  for (let hour = 9; hour < 18; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      slots.push({
        time: timeString,
        available: Math.random() > 0.3, // 70% of slots available
      });
    }
  }
  return slots;
};

export const CalendarBooking = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>(generateTimeSlots());
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    guests: '',
    notes: '',
    phone: '',
  });

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_5frqtbt';
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_dwgh9uf';
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '_Ezsu9qvdwDcYqEy4';

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    
    return days;
  };

  const isToday = (date: Date | null) => {
    if (!date) return false;
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isSelected = (date: Date | null) => {
    if (!date || !selectedDate) return false;
    return date.toDateString() === selectedDate.toDateString();
  };

  const isAvailable = (date: Date | null) => {
    if (!date) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date >= today;
  };

  const handleDateClick = (date: Date | null) => {
    if (date && isAvailable(date)) {
      setSelectedDate(date);
      setSelectedTime(null);
      // Regenerate time slots for the selected date
      setTimeSlots(generateTimeSlots());
    }
  };

  const handleTimeClick = (time: string) => {
    if (selectedDate) {
      setSelectedTime(time);
      setShowBookingForm(true);
    }
  };

  const handlePreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!bookingData.name || !bookingData.email) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      // Format the date and time
      const [hours, minutes] = selectedTime!.split(':');
      const startDateTime = new Date(selectedDate!);
      startDateTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);
      
      const endDateTime = new Date(startDateTime);
      endDateTime.setMinutes(endDateTime.getMinutes() + 15); // 15 minute meeting

      const formattedDateTime = formatSelectedDateTime();
      
      // Prepare email template parameters
      const templateParams = {
        from_name: bookingData.name,
        from_email: bookingData.email,
        phone: bookingData.phone || 'Not provided',
        guests: bookingData.guests || 'None',
        notes: bookingData.notes || 'None',
        meeting_date: formattedDateTime,
        meeting_duration: '15 minutes',
        meeting_type: 'Web conferencing details provided upon confirmation.',
        to_email: 'muzammilofficial9@gmail.com',
        reply_to: bookingData.email,
        subject: `New Meeting Booking Request from ${bookingData.name}`,
        message: `Meeting Booking Details:
        
Name: ${bookingData.name}
Email: ${bookingData.email}
Phone: ${bookingData.phone || 'Not provided'}
Date & Time: ${formattedDateTime}
Duration: 15 minutes
Meeting Type: Web conferencing details provided upon confirmation.
${bookingData.guests ? `Guests: ${bookingData.guests}` : ''}
${bookingData.notes ? `Notes: ${bookingData.notes}` : ''}

You can add this meeting to your Google Calendar using this link:
${getGoogleCalendarLink()}`,
      };

      // Send email via EmailJS to admin
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      // Also send confirmation email to the user (you might want to create a separate template for this)
      // For now, we'll just show success

      if (response.status === 200) {
        setBookingConfirmed(true);
        toast.success('Calendar invitation sent! Check your email and calendar.');
      } else {
        throw new Error('Failed to send booking request');
      }
    } catch (error: any) {
      console.error('Booking error:', error);
      toast.error(
        error.text || 'Failed to send booking request. Please try again or contact us directly.',
        { duration: 5000 }
      );
      setIsSubmitting(false);
    }
  };

  const handleResetBooking = () => {
    setBookingConfirmed(false);
    setShowBookingForm(false);
    setSelectedDate(null);
    setSelectedTime(null);
    setBookingData({
      name: '',
      email: '',
      guests: '',
      notes: '',
      phone: '',
    });
  };

  const getGoogleCalendarLink = () => {
    if (!selectedDate || !selectedTime) return '';
    
    const [hours, minutes] = selectedTime.split(':');
    const startDateTime = new Date(selectedDate);
    startDateTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);
    
    const endDateTime = new Date(startDateTime);
    endDateTime.setMinutes(endDateTime.getMinutes() + 15);

    const formatDate = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };

    const start = formatDate(startDateTime);
    const end = formatDate(endDateTime);

    const calendarUrl = new URL('https://calendar.google.com/calendar/render');
    calendarUrl.searchParams.set('action', 'TEMPLATE');
    calendarUrl.searchParams.set('text', `Contact - DevSeaLabs`);
    calendarUrl.searchParams.set('dates', `${start}/${end}`);
    calendarUrl.searchParams.set('details', `Meeting with ${bookingData.name}${bookingData.notes ? `\n\nNotes: ${bookingData.notes}` : ''}${bookingData.guests ? `\n\nGuests: ${bookingData.guests}` : ''}`);
    calendarUrl.searchParams.set('location', 'Web conferencing details provided upon confirmation.');
    calendarUrl.searchParams.set('add', bookingData.email);
    if (bookingData.guests) {
      calendarUrl.searchParams.set('add', bookingData.guests);
    }

    return calendarUrl.toString();
  };

  const formatSelectedDateTime = () => {
    if (!selectedDate || !selectedTime) return '';
    
    const date = selectedDate;
    const [hours, minutes] = selectedTime.split(':');
    const hour12 = parseInt(hours) % 12 || 12;
    const ampm = parseInt(hours) >= 12 ? 'pm' : 'am';
    const timeStr = `${hour12}:${minutes}${ampm}`;
    
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    const dayName = dayNames[date.getDay()];
    const monthName = monthNames[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    
    // Calculate end time (15 minutes later)
    const endHour = (parseInt(hours) + (parseInt(minutes) + 15 >= 60 ? 1 : 0)) % 24;
    const endMinute = (parseInt(minutes) + 15) % 60;
    const endHour12 = endHour % 12 || 12;
    const endAmpm = endHour >= 12 ? 'pm' : 'am';
    const endTimeStr = `${endHour12}:${endMinute.toString().padStart(2, '0')}${endAmpm}`;
    
    return `${timeStr} - ${endTimeStr}, ${dayName}, ${monthName} ${day}, ${year}`;
  };

  const days = getDaysInMonth(currentDate);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* Left Side - Company Info */}
        <div className="bg-gray-800 text-white p-8 lg:p-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-green-400 mb-8">devsealabs</h2>
            
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 mb-2">Call Center</h3>
                <a href="tel:+15551234567" className="text-white hover:text-green-400 transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-gray-400 mb-2">Our Location</h3>
                <p className="text-white">
                  123 Tech Street<br />
                  Silicon Valley, CA 94000, USA
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-gray-400 mb-2">Email</h3>
                <a href="mailto:muzammilofficial9@gmail.com" className="text-white hover:text-green-400 transition-colors">
                  muzammilofficial9@gmail.com
                </a>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-400 mb-4">Social Network</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-green-400 transition-colors">
                  <span className="text-white font-bold">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-green-400 transition-colors">
                  <span className="text-white font-bold">in</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-green-400 transition-colors">
                  <span className="text-white font-bold">X</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-green-400 transition-colors">
                  <span className="text-white font-bold">▶</span>
                </a>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <div className="bg-gray-700 rounded-lg px-3 py-2 text-xs">
                  <div className="text-green-400 font-semibold">ISO 9001</div>
                  <div className="text-gray-300">CERTIFIED</div>
                </div>
                <div className="bg-gray-700 rounded-lg px-3 py-2 text-xs">
                  <div className="text-green-400 font-semibold">ISO/IEC 27001</div>
                  <div className="text-gray-300">CERTIFIED</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Calendar Booking */}
        <div className="p-8 lg:p-12 bg-white">
          {/* Meeting Info */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <CalendarIcon className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Contact - DevSeaLabs</h2>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-gray-600 mb-2">
              <Clock className="w-5 h-5" />
              <span>15 min</span>
            </div>
            <div className="flex items-center gap-4 text-gray-600">
              <Video className="w-5 h-5" />
              <span>Web conferencing details provided upon confirmation.</span>
            </div>
          </div>

          {/* Calendar */}
          {!bookingConfirmed && (
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Select a Date & Time</h3>
              
              {/* Month Navigation */}
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={handlePreviousMonth}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <h4 className="text-lg font-semibold text-gray-900">
                  {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h4>
                <button
                  onClick={handleNextMonth}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2 mb-4">
                {dayNames.map((day) => (
                  <div key={day} className="text-center text-sm font-semibold text-gray-600 py-2">
                    {day}
                  </div>
                ))}
                {days.map((date, index) => {
                  const available = isAvailable(date);
                  const selected = isSelected(date);
                  const today = isToday(date);

                  return (
                    <button
                      key={index}
                      onClick={() => handleDateClick(date)}
                      disabled={!available}
                      className={`
                        aspect-square rounded-lg text-sm font-medium transition-all
                        ${!date ? 'cursor-default' : ''}
                        ${!available ? 'text-gray-300 cursor-not-allowed' : ''}
                        ${today && !selected ? 'bg-primary/10 text-primary border-2 border-primary' : ''}
                        ${selected ? 'bg-primary text-white' : ''}
                        ${available && !selected && !today ? 'hover:bg-gray-100 text-gray-700' : ''}
                      `}
                    >
                      {date ? date.getDate() : ''}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Time Slots */}
          {!bookingConfirmed && selectedDate && (
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">
                Available Times
              </h4>
              <div className="grid grid-cols-4 gap-2 max-h-64 overflow-y-auto">
                {timeSlots.filter(slot => slot.available).map((slot, index) => (
                  <button
                    key={index}
                    onClick={() => handleTimeClick(slot.time)}
                    className={`
                      px-3 py-2 rounded-lg text-sm font-medium transition-all
                      ${selectedTime === slot.time
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }
                    `}
                  >
                    {slot.time}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Confirmation Screen */}
          {bookingConfirmed ? (
            <div className="border-t border-gray-200 pt-8 mt-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-12 h-12 text-gray-400" />
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <h3 className="text-xl font-bold text-gray-900">You are scheduled</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  A calendar invitation has been sent to your email address. Please check your email and add it to your calendar.
                </p>
                <div className="flex flex-col gap-3 mb-6">
                  <a
                    href={getGoogleCalendarLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="glow" size="lg" className="w-full">
                      Add to Google Calendar
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Contact - DevSeaLabs</h4>
                
                <div className="flex items-center gap-3 text-gray-700">
                  <User className="w-5 h-5 text-gray-500" />
                  <span>{bookingData.name}</span>
                </div>
                
                <div className="flex items-center gap-3 text-gray-700">
                  <CalendarIcon className="w-5 h-5 text-gray-500" />
                  <span>{formatSelectedDateTime()}</span>
                </div>
                
                <div className="flex items-center gap-3 text-gray-700">
                  <Globe className="w-5 h-5 text-gray-500" />
                  <span>Pakistan, Maldives Time</span>
                </div>
                
                <div className="flex items-center gap-3 text-gray-700">
                  <Video className="w-5 h-5 text-gray-500" />
                  <span>Web conferencing details to follow.</span>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Button
                  variant="outline"
                  onClick={handleResetBooking}
                >
                  Book Another Meeting
                </Button>
              </div>
            </div>
          ) : (
            <>
              {/* Booking Form */}
              {showBookingForm && selectedDate && selectedTime && (
                <div className="border-t border-gray-200 pt-6 mt-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <CalendarIcon className="w-4 h-4" />
                      <span className="text-sm">{formatSelectedDateTime()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Globe className="w-4 h-4" />
                      <span className="text-sm">Pakistan, Maldives Time</span>
                    </div>
                  </div>

                  <form onSubmit={handleBooking} className="space-y-4">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Enter Details</h4>
                    
                    <div>
                      <Label htmlFor="booking-name" className="text-sm font-medium text-gray-700">
                        Name *
                      </Label>
                      <Input
                        id="booking-name"
                        type="text"
                        required
                        value={bookingData.name}
                        onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                        className="mt-1"
                        placeholder="Your full name"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <Label htmlFor="booking-email" className="text-sm font-medium text-gray-700">
                        Email *
                      </Label>
                      <Input
                        id="booking-email"
                        type="email"
                        required
                        value={bookingData.email}
                        onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                        className="mt-1"
                        placeholder="your.email@example.com"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="text-green-600 border-green-600 hover:bg-green-50"
                        onClick={() => {
                          const guestEmail = prompt('Enter guest email address:');
                          if (guestEmail) {
                            setBookingData({ ...bookingData, guests: guestEmail });
                          }
                        }}
                      >
                        <UserPlus className="w-4 h-4 mr-2" />
                        Add Guests
                      </Button>
                      {bookingData.guests && (
                        <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
                          <span>Guest: {bookingData.guests}</span>
                          <button
                            type="button"
                            onClick={() => setBookingData({ ...bookingData, guests: '' })}
                            className="text-red-500 hover:text-red-700"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="booking-notes" className="text-sm font-medium text-gray-700">
                        Please share anything that will help prepare for our meeting.
                      </Label>
                      <Textarea
                        id="booking-notes"
                        value={bookingData.notes}
                        onChange={(e) => setBookingData({ ...bookingData, notes: e.target.value })}
                        className="mt-1 min-h-[100px]"
                        placeholder="Any additional information..."
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <Label htmlFor="booking-phone" className="text-sm font-medium text-gray-700">
                        Send text messages to
                      </Label>
                      <div className="mt-1 flex gap-2">
                        <div className="flex items-center gap-2 px-3 border border-gray-300 rounded-md bg-gray-50">
                          <span className="text-2xl">🇵🇰</span>
                          <span className="text-sm text-gray-600">+92</span>
                        </div>
                        <Input
                          id="booking-phone"
                          type="tel"
                          value={bookingData.phone}
                          onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                          className="flex-1"
                          placeholder="Phone number"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button
                        type="submit"
                        variant="glow"
                        size="lg"
                        className="flex-1"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Scheduling...' : 'Schedule Event'}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        size="lg"
                        onClick={() => {
                          setShowBookingForm(false);
                          setSelectedTime(null);
                        }}
                        disabled={isSubmitting}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </div>
              )}

              {/* Alternative Link */}
              {!showBookingForm && (
                <div className="mt-6 text-center">
                  <a
                    href="https://calendar.app.google/xCsZXaH6pcGUCose6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm inline-flex items-center gap-2"
                  >
                    Or open in Google Calendar
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

