# DevSeaLabs

Modern website for DevSeaLabs - A leading software development company specializing in staff augmentation, dedicated teams, and custom software solutions.

## 🚀 Features

- **Modern UI/UX**: Clean, professional design with smooth animations
- **Service Pages**: Dedicated pages for all services (AI/ML, Web Development, Staff Augmentation, etc.)
- **Technology Pages**: Detailed pages for each technology stack
- **Industry Pages**: Industry-specific solutions and case studies
- **Contact Form**: Integrated EmailJS for contact form submissions
- **Calendar Booking**: Meeting scheduling with Google Calendar integration
- **Responsive Design**: Fully responsive across all devices
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Routing**: React Router v6
- **Form Handling**: React Hook Form + Zod validation
- **Email**: EmailJS integration
- **Icons**: Lucide React

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/muzammil002/devsealabs.git

# Navigate to project directory
cd devsealabs

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🔧 Configuration

### EmailJS Setup

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Add your credentials to `.env` file:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

See [EMAILJS_SETUP.md](./EMAILJS_SETUP.md) for detailed instructions.

### Calendar Booking

For calendar invite email functionality, see [CALENDAR_INVITE_SETUP.md](./CALENDAR_INVITE_SETUP.md).

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

The project is configured for deployment on Vercel. Simply connect your GitHub repository to Vercel and it will automatically deploy.

### Build Configuration

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: 18.x or higher

## 📁 Project Structure

```
src/
├── components/     # React components
├── pages/         # Page components
├── data/          # Static data (services, technologies, industries)
├── lib/           # Utility functions
└── index.css      # Global styles
```

## 🎨 Design System

- **Primary Color**: Blue (#3B82F6)
- **Fonts**: Outfit (headings), Inter (body)
- **Theme**: Light theme with modern gradients

## 📝 License

Private - All rights reserved

## 👥 Contact

- **Email**: muzammilofficial9@gmail.com
- **Website**: [DevSeaLabs](https://devsealabs.com)

---

Built with ❤️ by DevSeaLabs

