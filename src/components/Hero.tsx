
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-cyan-500/5 to-transparent"></div>
      </div>

      {/* Atmospheric lines/grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 animate-pulse">
          NEXUS
        </h1>
        
        <div className="mb-8">
          <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed">
            Enter a world where reality bends to your will
          </p>
          <p className="text-lg text-gray-400 mb-8">
            Experience the ultimate adventure in a cyberpunk universe where every choice shapes your destiny
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
          >
            <Play className="mr-2" size={20} />
            Play Now
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
          >
            Watch Trailer
          </Button>
        </div>

        {/* Game stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="border border-cyan-500/20 rounded-lg p-4 bg-black/20 backdrop-blur-sm">
            <div className="text-2xl font-bold text-cyan-400">50K+</div>
            <div className="text-gray-400">Active Players</div>
          </div>
          <div className="border border-purple-500/20 rounded-lg p-4 bg-black/20 backdrop-blur-sm">
            <div className="text-2xl font-bold text-purple-400">100+</div>
            <div className="text-gray-400">Missions</div>
          </div>
          <div className="border border-cyan-500/20 rounded-lg p-4 bg-black/20 backdrop-blur-sm">
            <div className="text-2xl font-bold text-cyan-400">12</div>
            <div className="text-gray-400">Worlds</div>
          </div>
          <div className="border border-purple-500/20 rounded-lg p-4 bg-black/20 backdrop-blur-sm">
            <div className="text-2xl font-bold text-purple-400">∞</div>
            <div className="text-gray-400">Possibilities</div>
          </div>
        </div>
      </div>
    </section>
  );
};
