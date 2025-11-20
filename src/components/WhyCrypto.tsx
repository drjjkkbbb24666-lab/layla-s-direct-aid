import { Skull, Users, Home, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const statistics = [
  {
    icon: Skull,
    number: "150,000+",
    title: "Lives Lost",
    description: "Estimated deaths since April 2023 from violence, starvation, and disease caused by the RSF-SAF conflict.",
  },
  {
    icon: Users,
    title: "11+ Million",
    number: "11+ Million",
    description: "Displaced Sudanese — the largest displacement crisis in the world. Families torn apart, cities emptied.",
  },
  {
    icon: Home,
    number: "2.3+ Million",
    title: "Refugees Abroad",
    description: "Sudanese who fled to neighboring countries like Chad, Egypt, Ethiopia, and Kenya — seeking safety that never feels safe.",
  },
  {
    icon: AlertTriangle,
    number: "25+ Million",
    title: "Need Humanitarian Aid",
    description: "Half of Sudan's population faces famine, disease, and survival conditions. The world has forgotten us.",
  },
];

export const WhyCrypto = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Pray for Sudan
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The world's largest displacement crisis — and the world stays silent
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statistics.map((stat, index) => (
              <Card 
                key={index}
                className="border-border/50 hover:border-destructive/30 transition-all duration-300 hover:shadow-soft hover:-translate-y-1 bg-card/50 backdrop-blur"
              >
                <CardContent className="pt-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-destructive/80 to-destructive flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-serif font-bold text-destructive">
                    {stat.number}
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    {stat.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground italic max-w-3xl mx-auto">
              These numbers represent real people — mothers, students, children, engineers, teachers. Each statistic is a life interrupted, a dream deferred, a family shattered. Please remember us in your prayers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
