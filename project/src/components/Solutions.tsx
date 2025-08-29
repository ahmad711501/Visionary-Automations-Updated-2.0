import React from 'react';
import { Building, ShoppingBag, Briefcase, Database, CheckCircle } from 'lucide-react';

interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  index: number;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ icon, title, description, features, index }) => {
  return (
    <div className="card h-full flex flex-col">
      <div className="mb-6">
        <div className="p-4 rounded-xl bg-gradient-to-br from-electric-blue/10 to-purple-accent/10 inline-flex shadow-lg shadow-electric-blue/5">
          <div className="text-electric-blue">
            {icon}
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-bold mb-3 text-white">
        {title}
      </h3>
      
      <p className="text-white/70 mb-6">
        {description}
      </p>
      
      <div className="mt-auto">
        <ul className="space-y-3">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle size={18} className="text-electric-blue mt-1 flex-shrink-0" />
              <span className="text-white/80">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Solutions: React.FC = () => {
  const solutions = [
    {
      icon: <Building size={32} />,
      title: "Enterprise Automation",
      description: "AI systems that cut through complexity and unlock growth.",
      features: [
        "Custom AI agents tailored for enterprise operations",
        "End-to-end integration with your current software stack",
        "Live dashboards for real-time data visibility and control",
        "Hands-on implementation with dedicated technical support"
      ]
    },
    {
      icon: <ShoppingBag size={32} />,
      title: "E-Commerce Automation",
      description: "More sales. Less friction. Fully automated.",
      features: [
        "Smart product recommendations that convert",
        "Predictive inventory and demand forecasting",
        "Behavior-based personalization across the funnel",
        "AI chatbots for 24/7 customer service and upselling"
      ]
    },
    {
      icon: <Briefcase size={32} />,
      title: "Professional Services",
      description: "Automation that frees up your time — and your team.",
      features: [
        "Instant client onboarding and contract automation",
        "Intelligent scheduling and resource management",
        "AI-powered forecasting for timelines and budgets",
        "Streamlined CRM workflows and client engagement"
      ]
    },
    {
      icon: <Database size={32} />,
      title: "Lead & CRM Automation",
      description: "Let AI chase leads. Your team closes.",
      features: [
        "AI agents that call, qualify, and follow up in real time",
        "Automated lead scoring, nurturing, and segmentation",
        "Real-time analytics into pipeline and conversion performance",
        "Deep integration with your marketing and CRM tools"
      ]
    }
  ];

  return (
    <section id="solutions" className="py-20 relative bg-black/30">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-purple-accent">
            Industry Solutions
          </h2>
          <p className="text-xl font-semibold text-white/80 mb-4">
            Built for speed. Designed to scale. Powered by AI.
          </p>
          <p className="text-white/70 max-w-2xl mx-auto">
            We don't offer one-size-fits-all. Every industry has its own bottlenecks — we automate them with precision.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
              features={solution.features}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;