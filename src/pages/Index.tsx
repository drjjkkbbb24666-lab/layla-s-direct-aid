import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { WhyCrypto } from "@/components/WhyCrypto";
import { DonationModule } from "@/components/DonationModule";
import { Transparency } from "@/components/Transparency";
import { Gallery } from "@/components/Gallery";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import sudanFlag from "@/assets/sudan-flag.jpg";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Sudanese flag background overlay for entire site */}
      <div 
        className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url(${sudanFlag})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <Story />
        <WhyCrypto />
        <DonationModule />
        <Transparency />
        <Gallery />
        <CallToAction />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
