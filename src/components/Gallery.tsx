import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { TrendingUp } from "lucide-react";
import sudanFlag from "@/assets/sudan-flag.jpg";

const donationHistory = [
  { amount: 12, date: "Recent" },
  { amount: 24, date: "Recent" },
];

const totalDonated = 36;
const goalAmount = 200; // Example goal
const progressPercentage = (totalDonated / goalAmount) * 100;

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-foreground">
            A Journey of Resilience
          </h2>

          {/* Sudan Flag Image */}
          <div className="mb-12">
            <div
              onClick={() => setSelectedImage(sudanFlag)}
              className="group relative overflow-hidden rounded-xl cursor-pointer shadow-soft hover:shadow-glow transition-all duration-300 max-w-2xl mx-auto"
            >
              <img
                src={sudanFlag}
                alt="Sudanese flag against blue sky"
                className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-6 font-medium">The hope of Sudan</p>
              </div>
            </div>
          </div>

          {/* Donation Meter */}
          <div className="bg-gradient-to-br from-secondary/30 to-background border border-border rounded-2xl p-8 space-y-6 shadow-lg">
            {/* Animated Help Text */}
            <div className="text-center animate-pulse">
              <p className="text-lg md:text-xl font-medium text-primary flex items-center justify-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Help me fill the meter
              </p>
            </div>

            {/* Progress Bar */}
            <div className="space-y-3">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{totalDonated} USDT Currently Donated</span>
                <span className="font-medium">{goalAmount} USDT Goal</span>
              </div>
              <Progress value={progressPercentage} className="h-3" />
              <p className="text-center text-xs text-muted-foreground">
                {progressPercentage.toFixed(1)}% of goal reached
              </p>
            </div>

            {/* Donation History */}
            <div className="space-y-3 pt-4 border-t border-border">
              <h3 className="text-lg font-semibold text-foreground text-center">
                Recent Donations
              </h3>
              <div className="space-y-2">
                {donationHistory.map((donation, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center bg-background/50 rounded-lg p-3 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="text-muted-foreground text-sm">{donation.date}</span>
                    <span className="font-semibold text-primary">{donation.amount} USDT</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-muted-foreground pt-2">
                Total: {donationHistory.length} generous {donationHistory.length === 1 ? 'donation' : 'donations'}
              </p>
            </div>
          </div>

          <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="max-w-4xl">
              {selectedImage && (
                <div className="space-y-4">
                  <img
                    src={selectedImage}
                    alt="Sudanese flag"
                    className="w-full h-auto rounded-lg"
                  />
                  <p className="text-center text-lg font-medium">The hope of Sudan</p>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};
