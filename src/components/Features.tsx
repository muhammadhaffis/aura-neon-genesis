
export const Features = () => {
  const features = [
    {
      title: "Survival Combat",
      description: "Master brutal melee and ranged weapons to fight off endless zombie hordes",
      icon: "🔪"
    },
    {
      title: "Apocalyptic World",
      description: "Explore a devastated landscape where danger lurks around every corner",
      icon: "🏚️"
    },
    {
      title: "Horror Storyline",
      description: "Uncover the dark truth behind the outbreak in a spine-chilling narrative",
      icon: "💀"
    },
    {
      title: "Survivor Skills",
      description: "Develop abilities to scavenge, craft, and survive against impossible odds",
      icon: "🛠️"
    },
    {
      title: "Co-op Survival",
      description: "Team up with other survivors or face the nightmare alone",
      icon: "👥"
    },
    {
      title: "Infected AI",
      description: "Face intelligent zombie variants that adapt and hunt in packs",
      icon: "🧟"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300 mb-4"
              style={{ 
                fontFamily: 'Impact, Arial Black, sans-serif',
                textShadow: '0 0 20px rgba(220, 38, 38, 0.5)'
              }}>
            SURVIVAL GUIDE
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Master these skills or become another victim of the apocalypse
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-black/60 backdrop-blur-sm border border-red-600/30 rounded-lg p-6 hover:border-red-500/60 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-600/25"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-red-400 mb-3 group-hover:text-red-300 transition-colors duration-300">
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
