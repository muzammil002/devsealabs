const technologies = [
  { name: 'React', category: 'Frontend' },
  { name: 'Angular', category: 'Frontend' },
  { name: 'Vue.js', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: 'Java', category: 'Backend' },
  { name: '.NET', category: 'Backend' },
  { name: 'Golang', category: 'Backend' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Azure', category: 'Cloud' },
  { name: 'GCP', category: 'Cloud' },
  { name: 'Flutter', category: 'Mobile' },
  { name: 'React Native', category: 'Mobile' },
  { name: 'Swift', category: 'Mobile' },
  { name: 'Kotlin', category: 'Mobile' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Kubernetes', category: 'DevOps' },
  { name: 'Terraform', category: 'DevOps' },
];

export const TechnologiesSection = () => {
  return (
    <section id="technologies" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">Technologies</span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mt-2 mb-4">
            Our Tech Stack
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build scalable, secure, and high-performance solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group glass px-6 py-3 rounded-full hover:border-primary/50 cursor-pointer transition-all duration-300"
            >
              <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                {tech.name}
              </span>
              <span className="ml-2 text-xs text-muted-foreground">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
