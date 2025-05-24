
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { Features } from "@/components/Features";
import { DemoVideo } from "@/components/DemoVideo";
import { Screenshots } from "@/components/Screenshots";
import { Storyline } from "@/components/Storyline";
import { Download } from "@/components/Download";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Grunge texture overlay */}
      <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-red-950/30 via-gray-900 to-black"></div>
      
      {/* Subtle blood splatter effects */}
      <div className="absolute top-10 left-1/4 w-8 h-8 bg-red-900/40 rounded-full blur-sm"></div>
      <div className="absolute top-32 right-1/3 w-6 h-6 bg-red-800/30 rounded-full blur-sm"></div>
      <div className="absolute bottom-1/4 left-1/6 w-10 h-10 bg-red-900/20 rounded-full blur-md"></div>
      
      {/* Animated smoke/fog effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-gray-800/20 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-full h-96 bg-gradient-to-t from-gray-900/30 to-transparent animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Features />
        <DemoVideo />
        <Screenshots />
        <Storyline />
        <Download />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
