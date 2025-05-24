
import { Play, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Creepy apocalyptic background with haunting imagery */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1527576539890-dfa815648363?w=1920&h=1080&fit=crop&crop=center')`,
        }}
      >
        {/* Additional dark overlay with red tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/40 to-gray-900/90"></div>
        
        {/* Blood moon effect */}
        <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-red-600/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-red-500/60 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      {/* Broken city skyline silhouette - more jagged and destroyed */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black via-gray-900/90 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full opacity-40">
        <div className="flex items-end justify-center space-x-2 h-64">
          <div className="w-6 h-32 bg-gray-800 transform rotate-12 relative">
            <div className="absolute top-2 right-0 w-2 h-2 bg-red-500/60 animate-ping"></div>
          </div>
          <div className="w-8 h-48 bg-gray-700 transform -rotate-3"></div>
          <div className="w-4 h-24 bg-gray-800 transform rotate-6"></div>
          <div className="w-12 h-56 bg-gray-700 transform rotate-2 relative">
            <div className="absolute top-8 left-2 w-1 h-1 bg-green-400 animate-ping delay-700"></div>
          </div>
          <div className="w-3 h-18 bg-gray-900"></div>
          <div className="w-10 h-40 bg-gray-800 transform -rotate-4"></div>
          <div className="w-7 h-52 bg-gray-700 transform rotate-8"></div>
          <div className="w-5 h-28 bg-gray-800 transform -rotate-6"></div>
          <div className="w-9 h-44 bg-gray-700 transform rotate-3"></div>
        </div>
      </div>

      {/* Creeping fog/smoke effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-gray-800/40 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-0 w-full h-96 bg-gradient-to-b from-gray-900/30 to-transparent animate-pulse delay-2000"></div>
      </div>

      {/* Flickering emergency lights and fires */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-red-500 animate-ping"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-green-400 animate-ping delay-300"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-red-400 animate-ping delay-1500"></div>
        <div className="absolute top-2/3 left-1/2 w-1 h-1 bg-orange-500 animate-ping delay-800"></div>
        <div className="absolute bottom-1/2 right-1/4 w-2 h-2 bg-red-600 animate-ping delay-1200"></div>
      </div>

      {/* Floating debris/dust particles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/6 w-1 h-1 bg-gray-400 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-1/3 right-1/5 w-0.5 h-0.5 bg-gray-500 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-1/3 left-2/3 w-1 h-1 bg-gray-400 rounded-full animate-bounce delay-1500"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-400 to-red-700 filter drop-shadow-lg animate-pulse" 
            style={{ 
              fontFamily: 'Impact, Arial Black, sans-serif',
              textShadow: '0 0 30px rgba(220, 38, 38, 0.8), 0 0 60px rgba(220, 38, 38, 0.5), 0 0 90px rgba(220, 38, 38, 0.3)',
              letterSpacing: '0.1em'
            }}>
          DEAD ZONE
        </h1>
        
        <div className="mb-8">
          <p className="text-xl md:text-2xl text-red-200 mb-4 leading-relaxed font-bold animate-fade-in">
            The infected walk among us... survival is not guaranteed
          </p>
          <p className="text-lg text-gray-300 mb-8 animate-fade-in delay-500">
            In a world overrun by the undead, every heartbeat could be your last
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-red-600/60 border border-red-500 animate-pulse hover:animate-none"
          >
            <Play className="mr-2" size={20} />
            ENTER THE NIGHTMARE
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-green-500 text-green-400 hover:bg-green-500 hover:text-black py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-green-500/40 bg-black/60 backdrop-blur-sm"
          >
            <Download className="mr-2" size={20} />
            DOWNLOAD DEMO
          </Button>
        </div>

        {/* Enhanced survivor stats with more ominous data */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="border border-red-600/60 rounded-lg p-4 bg-black/60 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 shadow-lg shadow-red-600/30">
            <div className="text-2xl font-bold text-red-400 animate-pulse">97%</div>
            <div className="text-gray-400 text-sm">Mortality Rate</div>
          </div>
          <div className="border border-green-500/60 rounded-lg p-4 bg-black/60 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 shadow-lg shadow-green-500/30">
            <div className="text-2xl font-bold text-green-400 animate-pulse delay-300">2.4K</div>
            <div className="text-gray-400 text-sm">Last Survivors</div>
          </div>
          <div className="border border-red-600/60 rounded-lg p-4 bg-black/60 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 shadow-lg shadow-red-600/30">
            <div className="text-2xl font-bold text-red-400 animate-pulse delay-600">3</div>
            <div className="text-gray-400 text-sm">Safe Zones Left</div>
          </div>
          <div className="border border-orange-500/60 rounded-lg p-4 bg-black/60 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 shadow-lg shadow-orange-500/30">
            <div className="text-2xl font-bold text-orange-400 animate-pulse delay-900">∞</div>
            <div className="text-gray-400 text-sm">Infected Hordes</div>
          </div>
        </div>
      </div>
    </section>
  );
};
