import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    
    
    {
      title: "Goaldex AI",
      description: "Optimized development cycle by 20% by leveraging pre-built AI components and reusable React modules instead of building features from scratch. Improved overall team efficiency and reduced time-to-market by streamlining UI workflows, ensuring faster iteration cycles and quicker validation with early users.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      tags: [""],
      link: "#"
    },
    {
      title: "BHCL – Beyond Horizon",
      description: "Built responsive trading dashboards using React and Tailwind, ensuring seamless performance across devices and browsers. Improved page load speed by 35% through code-splitting, caching strategies, and lazy loading of heavy components.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      tags: [""],
      link: "#"
    },
    {
      title: "D5art",
      description: "Delivered interactive NFT gallery with dynamic filtering and search, increasing user session time by 45%. Implemented wallet integration with smooth UX, boosting transaction completion rate by 30%.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      tags: [""],
      link: "#"
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-gradient">Featured Projects</span>
          </h2>
         
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div key={index} className="card-gradient rounded-2xl overflow-hidden shadow-card glow-on-hover group ">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="skill-tag text-xs">
                      
                    </span>
                  ))}
                </div>
                
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          
        </div>
      </div>
    </section>
  );
};

export default Projects;