import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center">
        <Link to="/" className="flex items-center gap-2 min-w-[250px] mr-16">
          <img 
            src="./assets/va-logo.png" 
            alt="Visionary Automations Logo" 
            className="h-8 w-8 object-contain"
          />
          <span className="text-lg font-bold whitespace-nowrap">Visionary<span className="text-purple-accent">Automations</span></span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-16 flex-1 justify-end">
          <Link to="/about" className="text-white/80 hover:text-electric-blue transition-colors">About</Link>
          <a href="/#features" className="text-white/80 hover:text-electric-blue transition-colors">Features</a>
          <a href="#timeline" className="text-white/80 hover:text-electric-blue transition-colors">Services</a>
          <Link to="/testimonials" className="text-white/80 hover:text-electric-blue transition-colors">Testimonials</Link>
          <Link to="/contact" className="btn-primary">Contact Us</Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden ml-auto text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md p-4 flex flex-col gap-4 border-t border-white/10 animate-fade-in">
          <Link 
            to="/about" 
            className="text-white/80 hover:text-electric-blue transition-colors py-2 px-4"
          >
            About
          </Link>
          <a 
            href="/#features" 
            className="text-white/80 hover:text-electric-blue transition-colors py-2 px-4"
          >
            Features
          </a>
          <a 
            href="#timeline" 
            className="text-white/80 hover:text-electric-blue transition-colors py-2 px-4"
          >
            Services
          </a>
          <Link 
            to="/testimonials" 
            className="text-white/80 hover:text-electric-blue transition-colors py-2 px-4"
          >
            Testimonials
          </Link>
          <Link 
            to="/contact" 
            className="btn-primary mx-4 text-center"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;