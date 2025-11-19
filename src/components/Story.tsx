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
                Layla's Story
              </h2>
              
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  I am a <span className="font-semibold text-foreground">21-year-old Sudanese refugee</span> from Khartoum, once a computer science student at the University of Khartoum.
                </p>
                
                <p className="border-l-4 border-gold pl-4 italic text-foreground">
                  "On April 15, 2023, war shattered my life as RSF and SAF forces turned the capital into a battlefield."
                </p>
                
                <p>
                  My university was bombed, her neighborhood destroyed, and my family's savings wiped out when banks and ATMs collapsed. I fled to Nairobi with only a laptop and a few clothes.
                </p>
                
                <p>
                  Now living as an asylum seeker with <span className="font-semibold text-foreground">no work permit, no financial access, and no safety net</span>, I use the internet as my  lifeline.
                </p>
                
                <p className="text-foreground font-medium">
                  Crypto has become  my only functional financial system — allowing me to receive support and survive without a bank.
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
                    <DialogTitle className="text-3xl font-serif">Amina Layla's Full Story</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 text-base leading-relaxed">
                    <p>
                      I am a 21-year-old Sudanese refugee from Khartoum, once a computer science student at the University of Khartoum. On April 15, 2023, war shattered my life as RSF and SAF forces turned the capital into a battlefield.
                    </p>
                    <p>
                      My university was bombed, my neighborhood destroyed, and my family's savings wiped out when banks and ATMs collapsed. I fled to Nairobi with only a laptop and her clothes.
                    </p>
                    <p>
                      Now living as an asylum seeker with no work permit, no financial access, and no safety net, I uses the internet as her lifeline.
                    </p>
                    <p className="font-semibold">
                      Crypto has become her only functional financial system — allowing her to receive support and survive without a bank.
                    </p>
                    <p>
                      This website gives me  back what war tried to take away: my voice, her identity, and her dignity. Every donation goes directly to my account, helping me afford food, medicine, internet access, and saving for  my education.
                    </p>
                    <p>
                      I dream of completing her computer science degree and using technology to help other refugees find their voices and rebuild their lives.
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
