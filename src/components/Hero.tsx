import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import laylaPhoto from "@/assets/sudan-people.jpg";
import sudanFlag from "@/assets/sudan-flag-clean.png";

export const Hero = () => {
  const scrollToDonate = () => {
    document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Sudan flag background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${sudanFlag})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/70 to-background" />
      </div>
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="order-2 md:order-1 animate-fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gold to-rose rounded-3xl blur-2xl opacity-30" />
                <img 
                  src={laylaPhoto} 
                  alt="Amina Layla" 
                  className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Text content */}
            <div className="order-1 md:order-2 text-center md:text-left space-y-8 animate-fade-in">
              {/* Name */}
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground mb-4">
                Amina Layla
              </h1>
              
              {/* Tagline */}
              <p className="text-xl md:text-2xl lg:text-3xl font-light text-muted-foreground leading-relaxed">
                "From Khartoum's classrooms to Nairobi's code cafes — rebuilding a future through tech."
              </p>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center pt-8">
                <Button 
                  onClick={scrollToDonate}
                  size="lg"
                  className="bg-gradient-to-r from-gold to-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 group"
                >
                  Support Me via Crypto
                  <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="pt-16 animate-bounce text-center">
            <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full mx-auto flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-primary rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
