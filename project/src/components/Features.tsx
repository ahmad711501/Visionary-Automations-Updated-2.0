import React from 'react';
import { 
  Bot, 
  Phone, 
  MessageSquare, 
  Database, 
  Clock, 
  Globe, 
  FileText, 
  BellRing,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-background to-[#030303] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-accent/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-blue/20 to-transparent" />
      
      <div className="container-custom relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6">
            <span className="w-2 h-2 rounded-full bg-electric-blue" />
            <span className="text-sm text-white/80 tracking-wide">24/7 Business Automation</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-purple-accent">
              AI Agents That Work While You Sleep
            </span>
          </h2>
          
          <p className="text-white/60 text-xl mb-6 max-w-3xl mx-auto font-semibold">
            Smart, Scalable, and Always-On.
          </p>
          
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Our AI-powered agents aren't just tools — they're tireless team members that handle leads, 
            calls, follow-ups, and CRM updates in real time.
          </p>
        </div>
        
        {/* Main features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <FeatureCard 
            icon={<Bot size={36} />}
            title="AI-Powered Lead Qualification"
            description="Automatically capture, score, and qualify inbound leads across platforms. Our AI agents identify high-intent leads and route them instantly — no delays, no missed opportunities."
            index={0}
          />
          
          <FeatureCard 
            icon={<Phone size={36} />}
            title="Autonomous AI Phone Callers"
            description="Imagine an AI that calls your leads, speaks naturally, answers questions, and books appointments — all without human intervention."
            listItems={[
              "Cold calling at scale",
              "Follow-ups and reminders",
              "Appointment scheduling"
            ]}
            index={1}
          />
          
          <FeatureCard 
            icon={<MessageSquare size={36} />}
            title="Natural Conversation Intelligence"
            description="Our voice agents are trained to understand intent, handle objections, and carry human-like conversations that don't sound robotic. They learn and improve with every interaction."
            index={2}
          />
          
          <FeatureCard 
            icon={<Database size={36} />}
            title="Seamless CRM Integration"
            description="Every call, note, and lead interaction is automatically synced with your CRM — whether it's HubSpot, Salesforce, Zoho, or any other platform. No manual entry. No dropped data."
            index={3}
          />
          
          <FeatureCard 
            icon={<Clock size={36} />}
            title="Instant Response, 24/7 Availability"
            description="Leads don't wait, and neither should your pipeline. Our AI agents engage instantly — anytime, anywhere — even while your human team is off the clock."
            index={4}
          />
          
          <FeatureCard 
            icon={<Globe size={36} />}
            title="Multi-Language Voice Support"
            description="Expand your reach without expanding your team. Our AI callers can handle conversations in multiple languages, adapting tone and dialect for your audience."
            index={5}
          />
          
          <FeatureCard 
            icon={<FileText size={36} />}
            title="Detailed Call Summaries & Transcripts"
            description="Every conversation is transcribed, summarized, and logged automatically. Get insights into lead behavior, engagement, and sentiment — without lifting a finger."
            index={6}
          />
          
          <FeatureCard 
            icon={<BellRing size={36} />}
            title="Smart Follow-Ups & Reminders"
            description="AI agents remember where every conversation left off. They follow up at the right time with the right message — ensuring leads never go cold or forgotten."
            index={7}
          />
        </div>
        
        {/* Call to action */}
        <div className="bg-gradient-to-r from-electric-blue/10 to-purple-accent/10 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto border border-white/10">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-purple-accent">
              Let AI Handle the Hustle
            </h3>
            <p className="text-white/70 text-lg">
              Let your human team focus on closing.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/contact" className="btn-primary flex items-center gap-2">
              <span>Schedule a Demo</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// Feature card component with optional list items
const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  listItems, 
  index 
}: { 
  icon: React.ReactNode, 
  title: string, 
  description: string, 
  listItems?: string[], 
  index: number 
}) => {
  return (
    <div className="group">
      <div className="relative rounded-2xl overflow-hidden h-full">
        {/* Background with gradient border */}
        <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-purple-accent/5 rounded-2xl" />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm translate-x-[0.5px] translate-y-[0.5px] rounded-2xl" />
        <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-electric-blue/30 transition-colors duration-300" />
        
        {/* Content */}
        <div className="relative p-8 h-full">
          <div className="flex flex-col h-full">
            <div className="mb-6">
              {/* Glowing icon wrapper */}
              <div className="p-3 rounded-xl bg-gradient-to-br from-electric-blue/10 to-purple-accent/10 inline-flex shadow-lg shadow-electric-blue/5 group-hover:shadow-electric-blue/10 transition-all duration-300">
                <div className="text-electric-blue group-hover:text-white transition-colors duration-300">
                  {icon}
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-electric-blue transition-colors duration-300">
              {title}
            </h3>
            
            <p className="text-white/70 mb-6">
              {description}
            </p>
            
            {listItems && listItems.length > 0 && (
              <ul className="space-y-2 mb-6">
                {listItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle size={18} className="text-electric-blue mt-1 flex-shrink-0" />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            )}
            
            {/* Hover indicator */}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-electric-blue to-purple-accent group-hover:w-full transition-all duration-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;