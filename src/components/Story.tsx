import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import sudanPeople from "@/assets/sudan-people.jpg";

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
                  Layla is a <span className="font-semibold text-foreground">21-year-old Sudanese refugee</span> from Khartoum, once a computer science student at the University of Khartoum.
                </p>
                
                <p className="border-l-4 border-gold pl-4 italic text-foreground">
                  "On April 15, 2023, war shattered my life as RSF and SAF forces turned the capital into a battlefield."
                </p>
                
                <p>
                  Her university was bombed, her neighborhood destroyed, and her family's savings wiped out when banks and ATMs collapsed. She fled to Nairobi with only a laptop and her clothes.
                </p>
                
                <p>
                  Now living as an asylum seeker with <span className="font-semibold text-foreground">no work permit, no financial access, and no safety net</span>, she uses the internet as her lifeline.
                </p>
                
                <p className="text-foreground font-medium">
                  Crypto has become her only functional financial system — allowing her to receive support and survive without a bank.
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
                      Layla is a 21-year-old Sudanese refugee from Khartoum, once a computer science student at the University of Khartoum. On April 15, 2023, war shattered her life as RSF and SAF forces turned the capital into a battlefield.
                    </p>
                    <p>
                      Her university was bombed, her neighborhood destroyed, and her family's savings wiped out when banks and ATMs collapsed. She fled to Nairobi with only a laptop and her clothes.
                    </p>
                    <p>
                      Now living as an asylum seeker with no work permit, no financial access, and no safety net, she uses the internet as her lifeline.
                    </p>
                    <p className="font-semibold">
                      Crypto has become her only functional financial system — allowing her to receive support and survive without a bank.
                    </p>
                    <p>
                      This website gives her back what war tried to take away: her voice, her identity, and her dignity. Every donation goes directly to her, helping her afford food, medicine, internet access, and saving for her education.
                    </p>
                    <p>
                      She dreams of completing her computer science degree and using technology to help other refugees find their voices and rebuild their lives.
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Image */}
            <div className="relative animate-fade-in">
              <div className="relative rounded-2xl overflow-hidden shadow-soft">
                <img 
                  src={sudanPeople} 
                  alt="Sudanese people with flag" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/40 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
