import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService: React.FC = () => {
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

        <div>
          <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-purple-accent">
            Terms of Service
          </h1>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
              <p className="text-white/70">
                By accessing or using Visionary Automations' services, you agree to be bound by these Terms 
                of Service. If you disagree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Services Description</h2>
              <p className="text-white/70">
                Visionary Automations provides AI-powered business automation solutions, including but not 
                limited to custom AI agents, lead generation, and CRM integration services. We reserve the 
                right to modify, suspend, or discontinue any part of our services at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
              <p className="text-white/70 mb-4">You agree to:</p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account</li>
                <li>Use our services in compliance with applicable laws</li>
                <li>Not engage in any unauthorized use of our services</li>
                <li>Not interfere with or disrupt our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
              <p className="text-white/70">
                All content, features, and functionality of our services are owned by Visionary Automations 
                and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Limitation of Liability</h2>
              <p className="text-white/70">
                Visionary Automations shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages resulting from your use or inability to use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Changes to Terms</h2>
              <p className="text-white/70">
                We reserve the right to modify these terms at any time. We will notify users of any material 
                changes via email or through our website. Continued use of our services after such modifications 
                constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Contact Information</h2>
              <p className="text-white/70">
                For questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4">
                <p className="text-white/70">Email: ahmed@visionaryautomations.com, ahmadvasishaik@gmail.com</p>
                <p className="text-white/70">Phone: +91 95153 41920</p>
                <p className="text-white/70">
                  Address: Cabin No: G9A, 2nd Floor<br />
                  E253 Phase 8B, Hitec City<br />
                  Hyderabad, Telangana<br />
                  India
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;