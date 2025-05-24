
import { Play, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dark apocalyptic background with red moon effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/20 to-gray-900">
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-red-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-red-800/10 rounded-full blur-3xl"></div>
      </div>

      {/* Broken city skyline silhouette */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black via-gray-900/80 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full opacity-30">
        <div className="flex items-end justify-center space-x-4 h-48">
          <div className="w-8 h-32 bg-gray-800 transform rotate-2"></div>
          <div className="w-6 h-40 bg-gray-700 transform -rotate-1"></div>
          <div className="w-10 h-24 bg-gray-800"></div>
          <div className="w-12 h-44 bg-gray-700 transform rotate-1"></div>
          <div className="w-8 h-36 bg-gray-800 transform -rotate-2"></div>
          <div className="w-6 h-28 bg-gray-700"></div>
        </div>
      </div>

      {/* Flickering light effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-red-500 animate-ping"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-green-400 animate-ping delay-500"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-red-400 animate-ping delay-1000"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-300 to-red-600 filter drop-shadow-lg" 
            style={{ 
              fontFamily: 'Impact, Arial Black, sans-serif',
              textShadow: '0 0 20px rgba(220, 38, 38, 0.5), 0 0 40px rgba(220, 38, 38, 0.3)',
              letterSpacing: '0.1em'
            }}>
          DEAD ZONE
        </h1>
        
        <div className="mb-8">
          <p className="text-xl md:text-2xl text-red-200 mb-4 leading-relaxed font-bold">
            When civilization falls, only the strongest survive
          </p>
          <p className="text-lg text-gray-300 mb-8">
            Fight through hordes of the undead in a world where every breath could be your last
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-600/50 border border-red-500"
          >
            <Play className="mr-2" size={20} />
            JOIN THE FIGHT
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-green-500 text-green-400 hover:bg-green-500 hover:text-black py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/30"
          >
            <Download className="mr-2" size={20} />
            DOWNLOAD DEMO
          </Button>
        </div>

        {/* Survivor stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="border border-red-600/40 rounded-lg p-4 bg-black/40 backdrop-blur-sm">
            <div className="text-2xl font-bold text-red-400">89%</div>
            <div className="text-gray-400">Mortality Rate</div>
          </div>
          <div className="border border-green-500/40 rounded-lg p-4 bg-black/40 backdrop-blur-sm">
            <div className="text-2xl font-bold text-green-400">47K</div>
            <div className="text-gray-400">Survivors</div>
          </div>
          <div className="border border-red-600/40 rounded-lg p-4 bg-black/40 backdrop-blur-sm">
            <div className="text-2xl font-bold text-red-400">12</div>
            <div className="text-gray-400">Safe Zones</div>
          </div>
          <div className="border border-green-500/40 rounded-lg p-4 bg-black/40 backdrop-blur-sm">
            <div className="text-2xl font-bold text-green-400">∞</div>
            <div className="text-gray-400">Undead Hordes</div>
          </div>
        </div>
      </div>
    </section>
  );
};
