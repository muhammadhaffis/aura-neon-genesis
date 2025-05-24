
export const Storyline = () => {
  return (
    <section id="storyline" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300 mb-6"
                style={{ 
                  fontFamily: 'Impact, Arial Black, sans-serif',
                  textShadow: '0 0 20px rgba(220, 38, 38, 0.5)'
                }}>
              THE OUTBREAK
            </h2>
            <div className="space-y-6 text-gray-300">
              <p className="text-lg leading-relaxed">
                It started with reports of violent incidents in major cities. Within 72 hours, 
                the infection had spread globally, turning the living into mindless, flesh-hungry predators.
              </p>
              <p className="text-lg leading-relaxed">
                You are one of the few immune survivors, trapped in a quarantine zone overrun by the undead. 
                Military forces have abandoned the area. Communication networks are down. You're on your own.
              </p>
              <p className="text-lg leading-relaxed">
                Scavenge for supplies, fortify safe houses, and fight your way through hordes of infected. 
                But beware—the longer you survive, the more dangerous they become.
              </p>
            </div>
            
            <div className="mt-8 p-6 border border-red-600/30 rounded-lg bg-black/40 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-red-400 mb-3">Day 1: Ground Zero</h3>
              <p className="text-gray-400">
                Your journey begins in the abandoned streets of Metro City, where screams echo through empty buildings 
                and shadows move in ways they shouldn't.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-red-900/50 to-black rounded-lg border border-red-600/30 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-red-400 text-sm mb-2">► OUTBREAK FOOTAGE</div>
                <div className="text-white font-bold text-lg">Infection Rate: 97.3%</div>
                <div className="text-gray-300 text-sm">No safe zones detected...</div>
              </div>
              
              {/* Simulated danger indicators */}
              <div className="absolute top-4 right-4 flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                <div className="w-3 h-3 bg-red-600 rounded-full animate-ping delay-300"></div>
                <div className="w-3 h-3 bg-red-500 rounded-full animate-ping delay-700"></div>
              </div>
              
              {/* Zombie silhouettes */}
              <div className="absolute bottom-0 left-0 right-0 opacity-30">
                <div className="flex justify-center items-end space-x-2 h-16">
                  <div className="w-6 h-12 bg-gray-700 rounded-t-lg transform rotate-2"></div>
                  <div className="w-5 h-10 bg-gray-600 rounded-t-lg transform -rotate-1"></div>
                  <div className="w-7 h-14 bg-gray-700 rounded-t-lg"></div>
                  <div className="w-6 h-11 bg-gray-600 rounded-t-lg transform rotate-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
