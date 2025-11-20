import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import nairobiPhoto from "@/assets/nairobi-living.jpg";

export const Story = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Hero text moved here */}
            <div className="text-xl md:text-2xl lg:text-3xl font-light text-foreground leading-relaxed space-y-4 text-center">
              <p className="font-semibold">My name is Layla —</p>
              <p>I fled Sudan hidden inside a lorry meant for cargo, not humans.</p>
              <p>I watched relatives die in front of me.</p>
              <p>I escaped RSF checkpoints by inches.</p>
              <p>But I carried one thing through the war, the borders, the bloodshed — my laptop.</p>
              <p className="italic">Pray for Sudan but also help us, whatever way you can.</p>
              <p className="pt-4">I am a 21-year-old Sudanese refugee, a computer science student whose education was shattered by war.</p>
              <p className="font-semibold">But I'm still coding. I'm still learning. I'm still fighting for a future they tried to destroy.</p>
            </div>

            {/* Story text */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 text-center">
                My Story
              </h2>
              
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I am 21 years old, and before the war, my life was simple: finish my computer science degree, build technology that could help my country, and make my parents proud. I was born and raised in Khartoum — a city that once beat with the rhythm of markets, students, and endless dreams. I was a second-year computer science student at the University of Khartoum, one of Africa's oldest institutions.
                </p>
                
                <p className="font-semibold text-foreground">
                  But on April 15, 2023, everything I knew became a memory.
                </p>
                
                <p>
                  That day, the RSF and SAF plunged my city into hell. My university was shelled. My street became a battlefield. My neighborhood, my city, where I learned to ride a bicycle, where I studied, where I laughed, turned into a graveyard.
                </p>
                
                <p>
                  I watched relatives bleed to death in front of me. Others vanished in the chaos — missing, presumed gone. Something people don't tell you is that during war people lose their minds. My mother, having seen the death of my younger brother, her only son, lost her mind. She was never the same again and she refused to flee. I hope I can see her again.
                </p>
                
                <p className="font-semibold text-foreground">
                  I don't want a handout — I want a chance to finish what I started. Your support helps me access stable housing, equipment, and school fees, giving me the foundation I need to become the engineer I trained to be.
                </p>
              </div>

              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" variant="outline" className="mt-4">
                    Read Full Story
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-serif">Layla's Full Story</DialogTitle>
                    <DialogDescription className="sr-only">
                      The complete story of Layla's journey from Sudan to Kenya
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 text-base leading-relaxed pt-4">
                    <p>
                      I am 21 years old, and before the war, my life was simple: finish my computer science degree, build technology that could help my country, and make my parents proud. I was born and raised in Khartoum — a city that once beat with the rhythm of markets, students, and endless dreams. I was a second-year computer science student at the University of Khartoum, one of Africa's oldest institutions.
                    </p>
                    
                    <p className="font-semibold">
                      But on April 15, 2023, everything I knew became a memory.
                    </p>
                    
                    <p>
                      That day, the RSF and SAF plunged my city into hell. My university was shelled. My street became a battlefield. My neighborhood, my city, where I learned to ride a bicycle, where I studied, where I laughed, turned into a graveyard.
                    </p>
                    
                    <p>
                      I watched relatives bleed to death in front of me. Others vanished in the chaos — missing, presumed gone. Something people don't tell you is that during war people lose their minds. My mother, having seen the death of my younger brother, her only son, lost her mind. She was never the same again and she refused to flee. I hope I can see her again.
                    </p>
                    
                    <p>
                      The air smelled of smoke, blood, and things I will never be able to describe.
                    </p>
                    
                    <p className="font-semibold">
                      Then came the choice every Sudanese family now knows too well: Stay and die, or run and risk dying on the road.
                    </p>
                    
                    <p>
                      Not on a bus. Not on a plane. But hidden inside the back of a lorry meant for transporting goods — not human beings.
                    </p>
                    
                    <p>
                      There were nearly twenty of us packed into the darkness between sacks of flour and jerrycans of fuel. For hours that felt like years, we stayed silent as the lorry crawled through RSF checkpoints. One wrong sound, one misplaced breath, and the soldiers would have dragged us out, one by one.
                    </p>
                    
                    <p>
                      Twice they stopped us. On entry to Ethiopia. We could have ran to Chad but our smugglers chose this longer way, illegal or not, I thank them. Twice guns were pointed into the darkness where we hid. Twice I thought my life would end before it ever began.
                    </p>
                    
                    <p>
                      I survived only because Allah said not yet.
                    </p>
                    
                    <p>
                      The journey from Sudan to Kenya bled me dry. Smugglers demanded money I didn't have. Borders demanded papers I had lost while running. Every mile carried a story of someone who didn't make it.
                    </p>
                    
                    <p>
                      By the time I reached Nairobi in late 2024, I was alive, but shattered.
                    </p>
                    
                    <p className="font-semibold">
                      As an asylum seeker, I discovered another kind of suffering — the silent kind.
                    </p>
                    
                    <p>
                      Without the right documents, I could not open a bank account, access mobile money, or work legally. Every attempt to live normally ended with: "You don't have the required documents."
                    </p>
                    
                    <p>
                      I had escaped bullets, only to be trapped by bureaucracy.
                    </p>
                    
                    <p>
                      But in this room in Nairobi, something survived the war with me: my laptop and the knowledge I got from university before everything fell apart. Basic coding. Web development. The logic of how computers communicate. Skills that seemed small before the war now felt like salvation.
                    </p>
                    
                    <p className="font-semibold">
                      Technology became the one thing the violence could not take from me.
                    </p>
                    
                    <p>
                      I taught myself more — JavaScript, blockchain basics, smart contract development. I am building simple tools. I am trying to create Voices Unbound to help people without documents and without voices like myself.
                    </p>
                    
                    <p>
                      This website is my attempt to speak directly to the world — without NGOs twisting my story or collecting money in my name. I want people to understand what it means to flee, to hide, to lose everything, and still try to build something new from the ashes.
                    </p>
                    
                    <p>
                      I have cousins I send aid in AlFasher. I wish they had run with me. But I cannot stop praying and I hope you too are praying with me as you see this.
                    </p>
                    
                    <p className="font-semibold">
                      I am not a victim of war. I am a survivor of it — and a student who refuses to let her education end in rubble.
                    </p>
                    
                    <p>
                      If my story moved you, and you believe in helping someone rebuild a life through education and technology, any support you offer will help me continue this journey — to finish my degree, to improve my living conditions, and to create a future my fallen relatives never got to see.
                    </p>
                    
                    <p className="italic">
                      If you are Muslim, take this as a form of Zakat.
                    </p>
                    
                    <p className="font-semibold">
                      But first, I want you to know who I am. I want you to know the truth. I want you to know Layla.
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Image - Nairobi */}
            <div className="max-w-2xl mx-auto animate-fade-in">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-gold/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative">
                  <img 
                    src={nairobiPhoto} 
                    alt="Current living conditions in Nairobi" 
                    className="rounded-2xl shadow-xl w-full h-auto"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-2xl">
                    <p className="text-white text-sm font-medium">Nairobi — where I'm rebuilding</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
