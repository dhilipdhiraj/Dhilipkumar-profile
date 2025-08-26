import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-gradient">Let's Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? I'd love to hear about your project and 
            discuss how we can work together to create something amazing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always open to discussing new opportunities, creative projects, 
              or just having a friendly chat about technology.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a 
                    href="mailto:dhilipdhiraj007@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    dhilipdhiraj007@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <a 
                    href="tel:+919360551235"
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    +91 9360551235
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <span className="text-muted-foreground">Chennai, India</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card-gradient p-8 rounded-2xl shadow-card">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">Let's Start a Conversation</h3>
              <p className="text-muted-foreground mb-8">
                Whether you have a project in mind or just want to connect, 
                I'm here to help bring your ideas to life.
              </p>
              <div className="space-y-4">
                <Button 
                  asChild
                  className="w-full primary-gradient text-white glow-on-hover"
                >
                  <a href="mailto:dhilipdhiraj007@gmail.com">
                    Send Email
                  </a>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                >
                  <a href="https://www.linkedin.com/in/dhilip-kumar-50b251194" target="_blank" rel="noopener noreferrer">
                    Connect in LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;