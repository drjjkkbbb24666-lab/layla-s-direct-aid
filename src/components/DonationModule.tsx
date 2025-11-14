import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, Check, Bitcoin, Wallet } from "lucide-react";
import { toast } from "sonner";

const wallets = [
  {
    name: "Ethereum (ETH)",
    address: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
    icon: Wallet,
    color: "from-blue-500 to-purple-500",
  },
  {
    name: "USDT (TRC20)",
    address: "TYourUSDTAddressHere123456789",
    icon: Wallet,
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Bitcoin (BTC)",
    address: "bc1qYourBitcoinAddressHere",
    icon: Bitcoin,
    color: "from-orange-500 to-yellow-500",
  },
];

export const DonationModule = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = async (address: string, index: number) => {
    try {
      await navigator.clipboard.writeText(address);
      setCopiedIndex(index);
      toast.success("Address copied to clipboard!");
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      toast.error("Failed to copy address");
    }
  };

  return (
    <section id="donate" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Support Layla Directly
            </h2>
            <p className="text-xl text-muted-foreground">
              Send cryptocurrency directly to Layla's wallet. No intermediaries, no fees to us.
            </p>
          </div>

          <div className="grid gap-6">
            {wallets.map((wallet, index) => (
              <Card key={index} className="overflow-hidden border-2 hover:border-primary/50 transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${wallet.color} flex items-center justify-center`}>
                      <wallet.icon className="w-5 h-5 text-white" />
                    </div>
                    <CardTitle className="font-serif">{wallet.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 p-4 bg-muted rounded-lg">
                    <code className="flex-1 text-sm font-mono break-all">
                      {wallet.address}
                    </code>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(wallet.address, index)}
                      className="shrink-0"
                    >
                      {copiedIndex === index ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-900">
            <p className="text-center text-sm text-blue-900 dark:text-blue-100">
              <strong>All donations go directly to Layla's wallet.</strong> No intermediaries. No fees to us. 
              If you'd like to donate in a different cryptocurrency, please reach out.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
