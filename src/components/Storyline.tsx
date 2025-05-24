
export const Storyline = () => {
  return (
    <section id="storyline" className="py-20 px-4 bg-black/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
              The Story Begins
            </h2>
            <div className="space-y-6 text-gray-300">
              <p className="text-lg leading-relaxed">
                In the year 2087, humanity stands at the precipice of a new era. Neural implants have become commonplace, 
                blurring the lines between human consciousness and artificial intelligence.
              </p>
              <p className="text-lg leading-relaxed">
                You are a Nexus Agent, one of the few individuals capable of navigating both the physical and digital realms. 
                When a mysterious virus begins corrupting the global neural network, the fate of humanity rests in your hands.
              </p>
              <p className="text-lg leading-relaxed">
                Will you preserve the old world order, or embrace the chaos and forge a new path for humanity? 
                Every decision echoes through the interconnected web of consciousness.
              </p>
            </div>
            
            <div className="mt-8 p-6 border border-purple-500/20 rounded-lg bg-black/20 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-purple-400 mb-3">Chapter 1: Awakening</h3>
              <p className="text-gray-400">
                Begin your journey in Neo-Tokyo, where neon lights hide dark secrets and every shadow could conceal an enemy—or an ally.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-cyan-900/50 rounded-lg border border-cyan-500/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-cyan-400 text-sm mb-2">► STORYLINE PREVIEW</div>
                <div className="text-white font-bold text-lg">Neural Network Corrupted</div>
                <div className="text-gray-300 text-sm">Reality.exe has stopped working...</div>
              </div>
              
              {/* Simulated game UI elements */}
              <div className="absolute top-4 right-4 flex space-x-2">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-300"></div>
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse delay-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
