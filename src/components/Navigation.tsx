
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
    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-red-600/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-red-500 tracking-wider" 
               style={{ 
                 fontFamily: 'Impact, Arial Black, sans-serif',
                 textShadow: '0 0 10px rgba(220, 38, 38, 0.5)'
               }}>
            DEAD ZONE
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-red-400 transition-colors duration-300 font-semibold"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-white hover:text-red-400 transition-colors duration-300 font-semibold"
            >
              Survival Guide
            </button>
            <button 
              onClick={() => scrollToSection('storyline')}
              className="text-white hover:text-red-400 transition-colors duration-300 font-semibold"
            >
              The Outbreak
            </button>
            <button 
              onClick={() => scrollToSection('download')}
              className="text-white hover:text-red-400 transition-colors duration-300 font-semibold"
            >
              Arsenal
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-red-400 transition-colors duration-300"
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
                className="text-white hover:text-red-400 transition-colors duration-300 text-left font-semibold"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="text-white hover:text-red-400 transition-colors duration-300 text-left font-semibold"
              >
                Survival Guide
              </button>
              <button 
                onClick={() => scrollToSection('storyline')}
                className="text-white hover:text-red-400 transition-colors duration-300 text-left font-semibold"
              >
                The Outbreak
              </button>
              <button 
                onClick={() => scrollToSection('download')}
                className="text-white hover:text-red-400 transition-colors duration-300 text-left font-semibold"
              >
                Arsenal
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
