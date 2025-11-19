import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import sudanPeople from "@/assets/sudan-people.jpg";
import nairobiLiving from "@/assets/nairobi-living.jpg";
import khartoumUniversity from "@/assets/khartoum-university.jpg";

export const Story = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                Leila Amina's Story
              </h2>
              
              <p className="text-xl font-semibold text-gold italic">
                "From Khartoum's classrooms to Nairobi's code cafes — rebuilding a future through tech."
              </p>
              
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p className="text-foreground font-medium text-xl">
                  My name is Leila Amina — a Sudanese refugee, a daughter of Khartoum, and a computer science student who refuses to let war decide the limits of my future.
                </p>
                
                <p>
                  When the conflict erupted back home, I was in my third year of university — debugging code one week, searching for safety the next. Everything familiar disappeared in days: my home, my campus, my city's rhythm. But one thing survived the journey — <span className="font-semibold text-foreground">my belief that education and technology can rebuild lives</span>.
                </p>
                
                <p>
                  Today I am an asylum seeker in Nairobi, rebuilding from scratch. I spend my days learning, coding, and designing Web3 tools that I hope will one day power real solutions for displaced communities like mine. I work from borrowed devices, unstable internet, and shared rooms — but I keep going because <span className="font-semibold text-foreground">knowledge is the one thing no war can erase</span>.
                </p>
                
                <p className="border-l-4 border-gold pl-4 text-foreground font-medium">
                  I am asking for support not because I have given up, but because I am fighting not to stop. Every donation helps me stay housed, stay online, buy the resources needed for my projects, and eventually return to university to finish my computer science degree.
                </p>
                
                <p className="text-foreground font-medium">
                  Your contribution is an investment — in my education, in my work, and in a future where refugees can build, not just survive.
                </p>
                
                <p className="text-lg text-foreground font-semibold italic">
                  If you believe in resilience, in rebuilding, and in the power of technology to restore dignity, I invite you to walk with me.
                </p>
              </div>

              <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="mt-4">
                    Read Full Story
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-3xl font-serif">Leila Amina's Full Story</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 text-base leading-relaxed">
                    <p className="font-semibold text-lg">
                      Leila grew up in Khartoum, surrounded by the hum of university life, where she dreamed of becoming a software engineer.
                    </p>
                    
                    <p>
                      She loved building simple apps, tutoring younger students, and brainstorming tech solutions for Sudanese communities. Her third year of university was supposed to be her turning point.
                    </p>
                    
                    <p className="font-semibold">
                      Then war shattered everything.
                    </p>
                    
                    <p>
                      Leila fled with only what she could carry, leaving her degree unfinished, her home destroyed, and her family scattered across borders. She arrived in Kenya with no savings, no documents, and no certainty — only determination.
                    </p>
                    
                    <p>
                      Instead of giving up, she reinvented herself. She taught herself advanced JavaScript, blockchain fundamentals, and smart contract development from online tutorials and borrowed devices. She now works on open-source Web3 projects while navigating asylum procedures and unstable living conditions.
                    </p>
                    
                    <p className="font-semibold text-foreground">
                      Leila doesn't want a handout — she wants a chance to finish what she started.
                    </p>
                    
                    <p>
                      Donations help her access stable housing, equipment, and school fees, giving her the foundation she needs to become the engineer she trained to be. Every contribution is an investment in her education, her work, and a future where technology restores dignity to displaced communities.
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Images Grid */}
            <div className="space-y-6 animate-fade-in">
              {/* Khartoum University - Destroyed */}
              <div className="relative rounded-2xl overflow-hidden shadow-soft">
                <img 
                  src={khartoumUniversity} 
                  alt="Destroyed University of Khartoum building" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium bg-black/50 backdrop-blur-sm px-3 py-2 rounded">
                    University of Khartoum - Destroyed by war
                  </p>
                </div>
              </div>

              {/* Current Living Conditions in Nairobi */}
              <div className="relative rounded-2xl overflow-hidden shadow-soft">
                <img 
                  src={nairobiLiving} 
                  alt="Layla's living conditions in Nairobi" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium bg-black/50 backdrop-blur-sm px-3 py-2 rounded">
                    Current living conditions in Nairobi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
