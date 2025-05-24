
export const Features = () => {
  const features = [
    {
      title: "Immersive Combat",
      description: "Master advanced combat mechanics with real-time strategy elements",
      icon: "⚔️"
    },
    {
      title: "Dynamic World",
      description: "Explore procedurally generated environments that adapt to your choices",
      icon: "🌍"
    },
    {
      title: "Epic Storyline",
      description: "Uncover mysteries in a branching narrative with multiple endings",
      icon: "📖"
    },
    {
      title: "Character Progression",
      description: "Customize your avatar with unique skills and augmentations",
      icon: "⚡"
    },
    {
      title: "Multiplayer Arena",
      description: "Compete against players worldwide in intense PvP battles",
      icon: "🏆"
    },
    {
      title: "Advanced AI",
      description: "Face intelligent enemies that learn and adapt to your playstyle",
      icon: "🤖"
    }
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4">
            Game Features
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover what makes NEXUS the ultimate gaming experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-black/20 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-500/40 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
