const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "FABC LLC",
      period: "Aug 2023 to Present",
      description: "Led frontend development initiatives across Web3 and Machine Learning projects, delivering 90% client satisfaction through Agile workflows and modern UI practices.",
      achievements: [
        "Delivered 100% responsive design across 20+ device viewports. Reduced deployment time by 60% by automating CI/CD pipeline with Vercel/GitHub Actions.",
        "Increased user engagement by 45% with responsive, mobile-first UI design.", 
        "Improved page load speed by 55% by implementing code splitting, image compression, and lazy loading.",
        "Mentored 5 junior developers, improving overall team productivity by 30%. Collaborated with backend team to reduce API errors by 40% through better contract testing."
      ]
    },
    
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-gradient">Work Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My professional journey in Frontend Development.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="card-gradient p-8 rounded-2xl shadow-card glow-on-hover">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="mb-4 lg:mb-0">
                  <h3 className="text-2xl font-bold text-primary mb-2">{exp.title}</h3>
                  <h4 className="text-xl font-semibold text-foreground mb-1">{exp.company}</h4>
                  <p className="text-muted-foreground">{exp.period}</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {exp.description}
              </p>

              <div>
                <h5 className="text-lg font-semibold mb-4 text-primary">Key Achievements</h5>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;