
export const DemoVideo = () => {
  return (
    <section id="demo-video" className="py-20 px-4 bg-black relative">
      {/* Atmospheric background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-red-600/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-200 mb-4"
              style={{ 
                fontFamily: 'Impact, Arial Black, sans-serif',
                textShadow: '0 0 20px rgba(34, 197, 94, 0.5)'
              }}>
            SURVIVAL FOOTAGE
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the terror firsthand - gameplay trailer from the infected zones
          </p>
        </div>

        {/* CRT Monitor Frame */}
        <div className="relative mx-auto max-w-4xl">
          {/* Monitor bezel */}
          <div className="bg-gradient-to-b from-gray-800 via-gray-700 to-gray-900 p-8 rounded-2xl shadow-2xl border-4 border-gray-600 relative">
            {/* Monitor brand/model text */}
            <div className="absolute top-2 left-4 text-xs text-gray-400 font-mono">APOCALYPSE-VISION™ Model Z-2024</div>
            
            {/* CRT screen effect */}
            <div className="relative bg-black rounded-lg overflow-hidden border-2 border-gray-800">
              {/* Scanlines overlay */}
              <div className="absolute inset-0 z-10 opacity-20 pointer-events-none" 
                   style={{
                     backgroundImage: `repeating-linear-gradient(
                       0deg,
                       transparent,
                       transparent 2px,
                       rgba(0, 255, 0, 0.1) 2px,
                       rgba(0, 255, 0, 0.1) 4px
                     )`
                   }}>
              </div>
              
              {/* Static/noise effect on corners */}
              <div className="absolute top-0 left-0 w-8 h-8 bg-gradient-to-br from-white/10 to-transparent animate-pulse"></div>
              <div className="absolute top-0 right-0 w-6 h-6 bg-gradient-to-bl from-white/10 to-transparent animate-pulse delay-500"></div>
              
              {/* Video placeholder with atmospheric styling */}
              <div className="aspect-video bg-gradient-to-b from-gray-900 to-black flex items-center justify-center relative overflow-hidden">
                {/* Placeholder content */}
                <div className="text-center z-20 relative">
                  <div className="w-20 h-20 border-4 border-green-500 border-t-transparent rounded-full animate-spin mb-4 mx-auto"></div>
                  <p className="text-green-400 text-lg font-bold mb-2 font-mono">TRANSMISSION LOADING...</p>
                  <p className="text-gray-400 text-sm">LIVE FEED FROM SECTOR 7</p>
                </div>
                
                {/* Background atmospheric effects */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-red-600/20 rounded-full blur-xl animate-pulse"></div>
                  <div className="absolute bottom-1/4 right-1/3 w-12 h-12 bg-green-500/30 rounded-full blur-lg animate-pulse delay-700"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-1 bg-green-500/20 blur-sm animate-pulse"></div>
                </div>

                {/* Video frame border effect */}
                <div className="absolute inset-2 border border-green-500/30 rounded animate-pulse"></div>
              </div>
            </div>

            {/* Monitor controls */}
            <div className="flex justify-between items-center mt-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full shadow-lg shadow-red-500/50"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50 animate-pulse"></div>
                <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
              </div>
              <div className="text-xs text-gray-400 font-mono">SIGNAL: WEAK | STATUS: RECORDING</div>
            </div>
          </div>

          {/* Monitor stand */}
          <div className="relative">
            <div className="w-32 h-8 bg-gradient-to-b from-gray-700 to-gray-800 mx-auto rounded-b-lg border-x-2 border-b-2 border-gray-600"></div>
            <div className="w-48 h-4 bg-gradient-to-b from-gray-800 to-gray-900 mx-auto rounded-lg border-2 border-gray-600"></div>
          </div>
        </div>

        {/* Call to action below video */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            This is just a glimpse of the nightmare that awaits. Are you ready to face the undead apocalypse?
          </p>
          <button className="bg-gradient-to-r from-green-600 to-green-800 hover:from-green-500 hover:to-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-600/50 border border-green-500">
            WATCH FULL TRAILER
          </button>
        </div>
      </div>
    </section>
  );
};
