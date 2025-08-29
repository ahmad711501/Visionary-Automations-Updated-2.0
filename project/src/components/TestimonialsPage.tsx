import React from 'react';
import { ArrowLeft, Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
  industry?: string;
}

const TestimonialsPage: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "We were buried in spreadsheets, losing 10+ hours a week to reporting. Visionary set up an automated pipeline that now runs flawlessly every night. That one solution paid for itself in the first month.",
      author: "Data Analyst",
      position: "",
      company: "National Retail Chain",
      industry: "Retail"
    },
    {
      quote: "I was skeptical about AI until I saw what they built for our client onboarding. What used to take 3 days now takes 15 minutes. We didn't add a single person to the team.",
      author: "Operations Director",
      position: "",
      company: "B2B SaaS Platform",
      industry: "Technology"
    },
    {
      quote: "We're a small team, but we're moving fast — and Visionary helped us move even faster. Their no-code setup for our CRM tasks was insanely fast to implement and just works.",
      author: "Founder",
      position: "",
      company: "Direct-to-Consumer Brand",
      industry: "E-commerce"
    },
    {
      quote: "The automation they designed helped us clean up years of clunky systems. We're now running leaner, faster, and with more confidence in our data than ever.",
      author: "IT Manager",
      position: "",
      company: "Manufacturing Firm",
      industry: "Manufacturing"
    },
    {
      quote: "The RPA process Visionary delivered removed a bottleneck that had been frustrating us for years. It's not just a time-saver — it's a mindset shift.",
      author: "VP of Strategy",
      position: "",
      company: "Logistics Company",
      industry: "Logistics"
    },
    {
      quote: "What stood out to me was how deeply they listened. It wasn't a cookie-cutter tool—they built something that fit perfectly into our chaos and made it manageable.",
      author: "Senior Operations Lead",
      position: "",
      company: "Creative Agency",
      industry: "Creative"
    },
    {
      quote: "Our payroll and invoicing tasks used to take two full days. Now it's down to under an hour. That kind of ROI isn't just impressive — it's addictive.",
      author: "Finance Team Member",
      position: "",
      company: "Global Consulting Firm",
      industry: "Consulting"
    },
    {
      quote: "The best part? We didn't need a technical team to manage anything. The automation runs quietly in the background—and hasn't broken once.",
      author: "Growth Manager",
      position: "",
      company: "Subscription-Based Startup",
      industry: "SaaS"
    }
  ];

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
            Client Testimonials
          </h1>
          <p className="text-white/70 max-w-3xl mx-auto text-lg">
            Don't just take our word for it. Hear from businesses across industries who have 
            transformed their operations and accelerated growth with our AI automation solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative">
              <div className="card h-full flex flex-col">
                <div className="flex-grow">
                  <div className="absolute -top-3 -left-3">
                    <div className="rounded-full bg-gradient-to-r from-electric-blue to-purple-accent p-2">
                      <Quote size={24} className="text-white" />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className="text-yellow-400 fill-yellow-400" 
                        />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-white/90 italic mb-6">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                <div className="mt-auto pt-4 border-t border-white/10">
                  <p className="font-semibold text-electric-blue">
                    {testimonial.author}
                  </p>
                  <p className="text-white/60 text-sm">
                    {testimonial.position && `${testimonial.position}, `}{testimonial.company}
                  </p>
                  {testimonial.industry && (
                    <span className="inline-block mt-2 text-xs bg-purple-accent/20 text-purple-accent px-2 py-1 rounded-full">
                      {testimonial.industry}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="card text-center py-10 px-8 md:px-12 lg:px-16 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
            Ready to see similar results for your business?
          </h2>
          <p className="text-white/70 mb-8">
            Join the growing list of companies transforming their operations with our industry-leading 
            AI automation solutions. Let's build your success story together.
          </p>
          <Link 
            to="/contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;