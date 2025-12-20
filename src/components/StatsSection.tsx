import { Users, Trophy, Globe, Clock } from 'lucide-react';

const stats = [
  { icon: Users, value: '500+', label: 'Expert Developers' },
  { icon: Trophy, value: '1000+', label: 'Projects Delivered' },
  { icon: Globe, value: '50+', label: 'Countries Served' },
  { icon: Clock, value: '10+', label: 'Years Experience' },
];

export const StatsSection = () => {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-r from-primary/5 via-background to-primary/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300 shadow-sm">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-2 group-hover:text-primary transition-colors">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
