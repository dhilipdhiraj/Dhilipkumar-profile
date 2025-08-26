const About = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      subtitle: "Delivering a Responsive and clean code for 20+ projects",
      skills: ["React JS", "JAVASCRIPT", "HTML", "CSS", "Tailwind CSS", "Bootstrap", "Node JS" ,"MYSQL"]
    },
   
  
    
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Dynamic Frontend Developer with 2+ years’ product Web development. skilled at leading cross-functional teams and
delivering innovative solutions. Strong in UI development.Proficient in React.js, HTML,
CSS, JavaScript.Skilled in designing responsive, cross-browser-compatible web applications and delivering high-quality
user experiences.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-8 text-center">Skills & Expertise</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center ">
            {skillCategories.map((category, index) => (
              <div key={index} className="card-gradient p-8 rounded-2xl shadow-card glow-on-hover">
                <h4 className="text-xl font-bold text-primary mb-2">{category.title}</h4>
                <p className="text-muted-foreground mb-4 text-sm">{category.subtitle}</p>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;