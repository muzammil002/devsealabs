const awards = [
  { name: 'ISO 27001', icon: '🏆' },
  { name: 'Clutch Top Company', icon: '⭐' },
  { name: 'AWS Partner', icon: '☁️' },
  { name: 'Google Cloud', icon: '🌐' },
  { name: 'Microsoft Partner', icon: '💼' },
  { name: 'Kubernetes Certified', icon: '🔧' },
  { name: 'DevOps Excellence', icon: '🚀' },
  { name: 'Oracle Partner', icon: '📊' },
];

export const AwardsSection = () => {
  return (
    <section className="py-16 bg-card border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h3 className="text-center font-heading font-semibold text-2xl text-foreground">
          Awards and Certifications
        </h3>
      </div>
      
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-card to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-card to-transparent z-10" />
        
        {/* Marquee Container */}
        <div className="flex animate-marquee">
          {[...awards, ...awards].map((award, index) => (
            <div 
              key={index}
              className="flex-shrink-0 mx-6 flex items-center gap-3 glass px-6 py-4 rounded-xl"
            >
              <span className="text-3xl">{award.icon}</span>
              <span className="text-foreground font-medium whitespace-nowrap">{award.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
