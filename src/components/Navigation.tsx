
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-cyan-400 tracking-wider">
            NEXUS
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-cyan-400 transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-white hover:text-cyan-400 transition-colors duration-300"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('storyline')}
              className="text-white hover:text-cyan-400 transition-colors duration-300"
            >
              Storyline
            </button>
            <button 
              onClick={() => scrollToSection('download')}
              className="text-white hover:text-cyan-400 transition-colors duration-300"
            >
              Download
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-cyan-400 transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-white hover:text-cyan-400 transition-colors duration-300 text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="text-white hover:text-cyan-400 transition-colors duration-300 text-left"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('storyline')}
                className="text-white hover:text-cyan-400 transition-colors duration-300 text-left"
              >
                Storyline
              </button>
              <button 
                onClick={() => scrollToSection('download')}
                className="text-white hover:text-cyan-400 transition-colors duration-300 text-left"
              >
                Download
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
