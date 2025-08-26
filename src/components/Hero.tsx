import { Button } from "@/components/ui/button";
import { Phone, Linkedin, Mail, ChevronDown } from "lucide-react";
import dhilipProfile from "@/assets/Dhilip.png";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                <span className="text-white">Dhilip Kumar p</span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-white">
                Frontend Developer
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Crafting seamless digital experiences through clean code,
              responsive design, and modern frontend frameworks. Skilled in
              React.js, JavaScript, and Tailwind CSS to build scalable,
              user-focused applications. Experienced in collaborating with
              cross-functional teams, optimizing performance, and delivering
              products in fast-paced environments. Currently enhancing expertise
              advanced frontend architecture to drive
              business growth through technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToProjects}
                className="primary-gradient glow-on-hover text-white font-semibold px-8 py-3 rounded-full transition-glow"
              >
                View My Work
              </Button>
            </div>

            {/* Contact Links */}
            <div className="flex space-x-6">
              <a
                href="tel:+919360551235"
                className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
                aria-label="Phone"
              >
                <Phone className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/dhilip-kumar-50b251194"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:dhilipdhiraj007@gmail.com"
                className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-2xl overflow-hidden shadow-elegant glow-on-hover">
                <img
                  src={dhilipProfile}
                  alt="Rajmohan P - AI Product Manager"
                  className="w-full h-full object-cover transition-smooth"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="text-muted-foreground hover:text-primary transition-smooth"
            aria-label="Scroll to about section"
          >
            <ChevronDown className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
