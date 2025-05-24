
import { Button } from "@/components/ui/button";

export const Download = () => {
  const platforms = [
    { name: "Steam", icon: "🎮", available: true },
    { name: "Epic Games", icon: "🎯", available: true },
    { name: "PlayStation", icon: "🎮", available: true },
    { name: "Xbox", icon: "🎮", available: true },
    { name: "Nintendo Switch", icon: "🎮", available: false },
    { name: "Mobile", icon: "📱", available: false }
  ];

  return (
    <section id="download" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300 mb-6"
            style={{ 
              fontFamily: 'Impact, Arial Black, sans-serif',
              textShadow: '0 0 20px rgba(220, 38, 38, 0.5)'
            }}>
          JOIN THE RESISTANCE
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          Download now and fight for humanity's survival
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {platforms.map((platform, index) => (
            <div 
              key={index}
              className={`p-6 rounded-lg border transition-all duration-300 ${
                platform.available 
                  ? 'border-red-600/40 bg-black/40 hover:border-red-500 hover:shadow-lg hover:shadow-red-600/25 cursor-pointer transform hover:scale-105' 
                  : 'border-gray-600/40 bg-black/20 opacity-50'
              }`}
            >
              <div className="text-3xl mb-3">{platform.icon}</div>
              <div className={`font-bold ${platform.available ? 'text-red-400' : 'text-gray-500'}`}>
                {platform.name}
              </div>
              <div className={`text-sm mt-2 ${platform.available ? 'text-green-400' : 'text-gray-500'}`}>
                {platform.available ? 'Available Now' : 'Coming Soon'}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white font-bold py-4 px-12 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-600/50 border border-red-500"
          >
            DOWNLOAD SURVIVAL PACK
          </Button>
          
          <div className="text-gray-400 text-sm">
            System Requirements: Windows 10+, 8GB RAM, DirectX 12 compatible graphics card
          </div>
        </div>

        <div className="mt-12 p-6 border border-red-600/30 rounded-lg bg-black/40 backdrop-blur-sm">
          <h3 className="text-xl font-bold text-red-400 mb-3">Pre-Order Weapons Cache</h3>
          <p className="text-gray-300">
            Pre-order now and receive exclusive survival gear: Military-grade assault rifle, 
            Reinforced body armor, Emergency medical supplies, and early access to Safe Zone Beta.
          </p>
        </div>
      </div>
    </section>
  );
};
