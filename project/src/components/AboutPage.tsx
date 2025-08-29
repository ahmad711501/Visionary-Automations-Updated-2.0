import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="container-custom">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-white/70 hover:text-electric-blue transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-purple-accent">
            About Visionary<span className="text-purple-accent">Automations</span>
          </h1>
          <p className="text-white/70 max-w-3xl mx-auto text-xl font-semibold">
            Smart. Scalable. Unstoppable.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-white/80 text-lg mb-8">
            At Visionary<span className="text-purple-accent">Automations</span>, we don't just build systems — we engineer evolution. We combine the precision of cutting-edge AI with the adaptability of no-code innovation to deliver solutions that don't just work — they win.
          </p>
          <p className="text-white/80 text-lg mb-8">
            Whether you're a startup scaling fast or an enterprise untangling legacy systems, we bring elite-level automation and intelligence to your fingertips — fast, affordable, and customized to your battlefield.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-purple-accent">
            What Makes Us Different?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-2xl font-bold mb-4 text-electric-blue">Custom-Built AI & Automation</h3>
              <p className="text-white/70">
                Like DevsData, we believe no two companies are the same. We build tailored AI solutions that align with your workflow, culture, and goals.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-2xl font-bold mb-4 text-electric-blue">Lightning-Fast No-Code Deployment</h3>
              <p className="text-white/70">
                Inspired by Automation House, our systems launch at warp speed using no-code and low-code platforms — giving you automation without the tech headaches.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-2xl font-bold mb-4 text-electric-blue">Smarter Than Just Smart</h3>
              <p className="text-white/70">
                With Machine Learning, predictive analytics, and real-time optimization, we help you make decisions backed by data, not gut feels.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-2xl font-bold mb-4 text-electric-blue">Robotic Process Automation (RPA) on Steroids</h3>
              <p className="text-white/70">
                Like Automation Anywhere, we eliminate repetitive tasks and unlock your team's true capacity — so they focus on strategy, not spreadsheets.
              </p>
            </div>
            
            <div className="card md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-electric-blue">The Best Prices in the Game</h3>
              <p className="text-white/70">
                We keep our solutions powerful, lean, and unbeatable in value. High performance doesn't have to mean high price.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-purple-accent">
            Our Promise
          </h2>
          
          <div className="card">
            <p className="text-white/80 text-lg mb-8">
              We're more than just consultants — we're your partners in transformation. From concept to execution, our experts walk with you every step of the way, ensuring results that are measurable, meaningful, and fast.
            </p>
            <p className="text-white/80 text-lg mb-8">
              If you're ready to automate smarter, move faster, and scale like never before—<br />
              <span className="text-purple-accent font-bold">Visionary<span className="text-purple-accent">Automations</span> is your unfair advantage.</span>
            </p>
            <p className="text-white/80 text-xl font-semibold text-center">
              Let's build the future. Together.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <Link 
            to="/contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            Get Started Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;