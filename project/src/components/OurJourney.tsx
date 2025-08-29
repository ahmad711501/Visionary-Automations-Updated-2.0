import React from "react";
import { Timeline } from "./ui/timeline";

const OurJourney: React.FC = () => {
  const data = [
    {
      title: "AI Agents",
      content: (
        <div>
          <p className="text-white/70 text-xs md:text-sm font-normal mb-8">
            Our custom-built AI agents redefine business automation by providing intelligent, 
            conversational interfaces that handle complex tasks, respond to inquiries, and execute 
            workflows autonomously. These cognitive assistants continuously learn from interactions, 
            becoming increasingly attuned to your business processes and customer needs over time.
          </p>
        </div>
      ),
    },
    {
      title: "Lead CRM",
      content: (
        <div>
          <p className="text-white/70 text-xs md:text-sm font-normal mb-8">
            Revolutionize your customer relationship management with our AI-powered Lead CRM system that 
            transcends traditional databases. This intelligent ecosystem analyzes communication patterns, 
            predicts customer needs, and automatically nurtures relationships through personalized interactions. 
            Experience unprecedented conversion rates with predictive lead scoring and opportunity forecasting.
          </p>
          <p className="text-white/70 text-xs md:text-sm font-normal mb-8">
            Our proprietary machine learning algorithms continuously optimize your sales pipeline, 
            identifying high-value prospects and suggesting optimal engagement strategies that evolve 
            as your business grows. Seamlessly integrate with your existing tools for a unified workflow 
            that eliminates data silos and enhances team collaboration.
          </p>
        </div>
      ),
    },
    {
      title: "AI Phone Callers",
      content: (
        <div>
          <p className="text-white/70 text-xs md:text-sm font-normal mb-4">
            Transform your telecommunications with voice agents that mirror human conversation with remarkable accuracy. 
            Our AI Phone Callers leverage advanced natural language processing and emotional intelligence to conduct 
            nuanced phone interactions that are indistinguishable from your top human representatives, scaling your 
            outreach capabilities without sacrificing the personal touch that builds customer trust.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-electric-blue text-xs md:text-sm">
              ✓ Handle 1000+ simultaneous calls with consistent quality
            </div>
            <div className="flex gap-2 items-center text-electric-blue text-xs md:text-sm">
              ✓ Reduce call center costs by up to 70%
            </div>
            <div className="flex gap-2 items-center text-electric-blue text-xs md:text-sm">
              ✓ Multilingual support across 40+ languages and dialects
            </div>
            <div className="flex gap-2 items-center text-electric-blue text-xs md:text-sm">
              ✓ Real-time sentiment analysis and adaptive conversation steering
            </div>
            <div className="flex gap-2 items-center text-electric-blue text-xs md:text-sm">
              ✓ Seamless integration with your CRM and business intelligence tools
            </div>
          </div>
        </div>
      ),
    },
  ];
  
  return <Timeline data={data} />;
};

export default OurJourney;