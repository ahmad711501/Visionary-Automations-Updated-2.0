import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/50 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="./assets/va-logo.png" 
                alt="Visionary Automations Logo" 
                className="h-8 w-8 object-contain"
              />
              <span className="text-xl font-bold">Visionary<span className="text-purple-accent">Automations</span></span>
            </div>
            <p className="text-white/70 mb-6">
              Empowering businesses with cutting-edge AI solutions to automate processes and drive growth.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/visionary-automations" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-electric-blue transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://x.com/dollarsign711" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-electric-blue transition-colors" aria-label="X (Twitter)">
                <Twitter size={20} />
              </a>
              <a href="https://facebook.com/visionaryautomations" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-electric-blue transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com/dollarsign711" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-electric-blue transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/#features" className="text-white/70 hover:text-electric-blue transition-colors">Features</a>
              </li>
              <li>
                <a href="/#solutions" className="text-white/70 hover:text-electric-blue transition-colors">Solutions</a>
              </li>
              <li>
                <Link to="/testimonials" className="text-white/70 hover:text-electric-blue transition-colors">Testimonials</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-electric-blue transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-electric-blue mt-1 flex-shrink-0" />
                <div>
                  <a href="mailto:ahmed@visionaryautomations.com" className="text-white/70 hover:text-electric-blue transition-colors block">
                    ahmed@visionaryautomations.com
                  </a>
                  <a href="mailto:ahmadvasishaik@gmail.com" className="text-white/70 hover:text-electric-blue transition-colors block">
                    ahmadvasishaik@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-electric-blue mt-1 flex-shrink-0" />
                <a href="tel:+919515341920" className="text-white/70 hover:text-electric-blue transition-colors">
                  +91 95153 41920
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-electric-blue mt-1 flex-shrink-0" />
                <address className="text-white/70 not-italic">
                  Cabin No: G9A, 2nd Floor<br />
                  E253 Phase 8B, Hitec City<br />
                  Hyderabad, Telangana<br />
                  India
                </address>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">&copy; {new Date().getFullYear()} Visionary Automations. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/privacy" className="text-sm text-white/50 hover:text-electric-blue transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-sm text-white/50 hover:text-electric-blue transition-colors">Terms of Service</Link>
              <Link to="/security" className="text-sm text-white/50 hover:text-electric-blue transition-colors">Security</Link>
              <a href="/cookies" className="text-sm text-white/50 hover:text-electric-blue transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;