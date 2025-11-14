import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 bg-deep-brown text-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-2">
              <Heart className="w-5 h-5 text-rose fill-rose" />
              <p className="text-lg">
                Built with hope — empowering refugees through technology
              </p>
            </div>

            <div className="pt-6 border-t border-cream/20">
              <p className="text-sm text-cream/70">
                Voices Unbound © {new Date().getFullYear()} • Where refugees tell their own stories
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
