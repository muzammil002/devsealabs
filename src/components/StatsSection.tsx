import { Users, Trophy, Globe, Clock } from 'lucide-react';

const stats = [
  { icon: Users, value: '500+', label: 'Expert Developers' },
  { icon: Trophy, value: '1000+', label: 'Projects Delivered' },
  { icon: Globe, value: '50+', label: 'Countries Served' },
  { icon: Clock, value: '10+', label: 'Years Experience' },
];

export const StatsSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
