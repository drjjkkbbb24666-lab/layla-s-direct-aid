import { Shield, Globe, Zap, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "No Bank Required",
    description: "As a refugee, I often cannot open bank accounts. Crypto provides access where traditional finance fails.",
  },
  {
    icon: Globe,
    title: "Borderless Support",
    description: "Send money across borders instantly without restrictions, fees, or delays from traditional systems.",
  },
  {
    icon: Zap,
    title: "No Middlemen",
    description: "100% of every donation goes directly to me. No NGOs, no intermediaries, no hidden fees.",
  },
  {
    icon: Heart,
    title: "Direct Impact",
    description: "I can buy food, medicine, internet access, or save for education. Your support creates real change.",
  },
];

export const WhyCrypto = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Why Cryptocurrency?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              For me, crypto isn't just technology — it's survival
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-soft hover:-translate-y-1 bg-card/50 backdrop-blur"
              >
                <CardContent className="pt-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-primary flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
