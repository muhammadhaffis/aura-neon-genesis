
import { useState } from "react";

export const Screenshots = () => {
  const screenshots = [
    {
      id: 1,
      title: "Zombie Horde Battle",
      description: "Face endless waves of the undead",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=450&fit=crop&crop=center"
    },
    {
      id: 2,
      title: "Abandoned City",
      description: "Explore the desolate urban wasteland",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=450&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "Survivor Base",
      description: "Build and fortify your safe zone",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=450&fit=crop&crop=center"
    },
    {
      id: 4,
      title: "Weapon Arsenal",
      description: "Master deadly survival tools",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=450&fit=crop&crop=center"
    },
    {
      id: 5,
      title: "Night Hunt",
      description: "Survive the darkness",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=800&h=450&fit=crop&crop=center"
    },
    {
      id: 6,
      title: "Infected Territory",
      description: "Navigate through contaminated zones",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=450&fit=crop&crop=center"
    }
  ];

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="screenshots" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300 mb-4"
              style={{ 
                fontFamily: 'Impact, Arial Black, sans-serif',
                textShadow: '0 0 20px rgba(220, 38, 38, 0.5)'
              }}>
            BATTLE FOOTAGE
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Witness the horror and chaos of the undead apocalypse
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {screenshots.map((screenshot, index) => (
            <div 
              key={screenshot.id}
              className="group relative overflow-hidden rounded-lg border-2 border-red-600/30 hover:border-red-500/60 transition-all duration-300 cursor-pointer transform hover:scale-105"
              onClick={() => setSelectedImage(selectedImage === index ? null : index)}
            >
              <div className="relative">
                <img 
                  src={screenshot.image} 
                  alt={screenshot.title}
                  className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110 filter brightness-75 group-hover:brightness-100"
                />
                
                {/* Blood splatter overlay effect */}
                <div className="absolute top-2 right-2 w-4 h-4 bg-red-600/60 rounded-full blur-sm"></div>
                <div className="absolute bottom-4 left-3 w-2 h-2 bg-red-500/40 rounded-full blur-sm"></div>
                
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-red-300 transition-colors duration-300">
                    {screenshot.title}
                  </h3>
                  <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    {screenshot.description}
                  </p>
                </div>

                {/* Hover effect - pulsing red border */}
                <div className="absolute inset-0 border-2 border-red-500/0 group-hover:border-red-500/50 transition-all duration-300 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Expanded view for selected image */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <img 
                src={screenshots[selectedImage].image}
                alt={screenshots[selectedImage].title}
                className="w-full h-auto rounded-lg border-2 border-red-500/60"
              />
              <button 
                className="absolute top-4 right-4 text-white text-3xl hover:text-red-400 transition-colors duration-300"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
