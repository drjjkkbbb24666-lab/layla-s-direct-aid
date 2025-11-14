import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { WhyCrypto } from "@/components/WhyCrypto";
import { DonationModule } from "@/components/DonationModule";
import { Transparency } from "@/components/Transparency";
import { Gallery } from "@/components/Gallery";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Story />
      <WhyCrypto />
      <DonationModule />
      <Transparency />
      <Gallery />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
