import { Users, Trophy, Globe, Clock } from 'lucide-react';

const stats = [
  { icon: Users, value: '85+', label: 'Expert Developers' },
  { icon: Trophy, value: '280+', label: 'Projects Delivered' },
  { icon: Globe, value: '22+', label: 'Countries Served' },
  { icon: Clock, value: '6+', label: 'Years Experience' },
];

export const StatsSection = () => {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-r from-primary/5 via-background to-primary/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] opacity-50" />
      
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group p-6 md:p-8 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-500 shadow-sm">
                <stat.icon className="w-8 h-8 md:w-10 md:h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300 relative">
                <span className="relative z-10">{stat.value}</span>
                <span className="absolute inset-0 bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
              <div className="text-muted-foreground text-sm md:text-base font-medium group-hover:text-foreground transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
