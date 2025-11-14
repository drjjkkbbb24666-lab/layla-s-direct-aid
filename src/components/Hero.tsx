import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const scrollToDonate = () => {
    document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gold/20 via-background to-rose/10">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Name */}
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-foreground mb-4">
            Amina Layla
          </h1>
          
          {/* Tagline */}
          <p className="text-2xl md:text-3xl font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            "I survived a war. Now I'm rebuilding my life — with your help, directly."
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              onClick={scrollToDonate}
              size="lg"
              className="bg-gradient-to-r from-gold to-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 group"
            >
              Support Layla via Crypto
              <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="pt-12 animate-bounce">
            <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full mx-auto flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-primary rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
