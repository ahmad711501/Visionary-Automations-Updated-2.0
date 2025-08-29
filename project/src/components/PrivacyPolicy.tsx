import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
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
            Privacy Policy
          </h1>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-white/70">
                This Privacy Policy explains how Visionary Automations ("we," "us," or "our") collects, uses, 
                and protects your personal information when you use our website and services. We are committed 
                to ensuring the privacy and security of your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
              <p className="text-white/70 mb-4">We collect the following types of information:</p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>Contact information (name, email, phone number)</li>
                <li>Company information</li>
                <li>Usage data and analytics</li>
                <li>Technical information about your device and browser</li>
                <li>Communication preferences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
              <p className="text-white/70 mb-4">We use your information to:</p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>Provide and improve our services</li>
                <li>Communicate with you about our services</li>
                <li>Process your requests and transactions</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
              <p className="text-white/70">
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. These 
                measures include encryption, access controls, and regular security assessments.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
              <p className="text-white/70 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
              <p className="text-white/70">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
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

export default PrivacyPolicy;