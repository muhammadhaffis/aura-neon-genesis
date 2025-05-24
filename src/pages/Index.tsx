
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { Features } from "@/components/Features";
import { Storyline } from "@/components/Storyline";
import { Download } from "@/components/Download";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <Hero />
      <Features />
      <Storyline />
      <Download />
      <Footer />
    </div>
  );
};

export default Index;
