import { CheckCircle2 } from "lucide-react";

const points = [
  "This is my direct page, managed by me",
  "Donations are peer-to-peer cryptocurrency transfers",
  "No organization holds or distributes funds",
  "Crypto ensures direct transfer with proof on-chain",
  "100% transparency through blockchain verification",
];

export const Transparency = () => {
  return (
    <section className="py-16 bg-blue-50/50 dark:bg-blue-950/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-foreground">
            Transparency & Safety
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {points.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-lg text-muted-foreground">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
