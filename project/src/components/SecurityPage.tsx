import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Shield, Lock, CheckCircle, Server, Database, Key,
  Award, FileCheck, ShieldCheck, BadgeCheck, AlertTriangle, Clock,
  HardDrive, Network, UserCheck, RefreshCw
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SecurityPage: React.FC = () => {
  const securityFeatures = [
    {
      icon: <Shield className="text-electric-blue" size={32} />,
      title: "Enterprise-Grade Security",
      description: "SOC 2 Type II & ISO 27001 certified with regular third-party audits and penetration testing."
    },
    {
      icon: <Lock className="text-electric-blue" size={32} />,
      title: "Advanced Encryption",
      description: "AES-256 military-grade encryption for data in transit and at rest, with perfect forward secrecy."
    },
    {
      icon: <Database className="text-electric-blue" size={32} />,
      title: "Secure Data Management",
      description: "Multi-region data centers with real-time replication and automated backup systems."
    },
    {
      icon: <Award className="text-electric-blue" size={32} />,
      title: "Compliance Standards",
      description: "GDPR, CCPA, HIPAA, and PCI DSS compliant with regular compliance audits."
    },
    {
      icon: <Network className="text-electric-blue" size={32} />,
      title: "Network Protection",
      description: "Multi-layer DDoS protection, WAF, and intrusion detection systems."
    },
    {
      icon: <UserCheck className="text-electric-blue" size={32} />,
      title: "Access Management",
      description: "Role-based access control, MFA, and detailed audit logging of all system access."
    },
    {
      icon: <AlertTriangle className="text-electric-blue" size={32} />,
      title: "Incident Response",
      description: "24/7 security monitoring with automated threat detection and response."
    },
    {
      icon: <Clock className="text-electric-blue" size={32} />,
      title: "Business Continuity",
      description: "99.99% uptime SLA with automated failover and disaster recovery."
    },
    {
      icon: <RefreshCw className="text-electric-blue" size={32} />,
      title: "Regular Updates",
      description: "Continuous security patches and system updates with zero-downtime deployment."
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-purple-accent">
            Enterprise Security & Compliance
          </h1>
          <p className="text-white/70 max-w-3xl mx-auto text-lg">
            Your data security is our top priority. Our comprehensive security framework and compliance 
            certifications ensure your business operations are protected by industry-leading standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="card"
        >
          <h2 className="text-2xl font-bold mb-4">Our Security Commitment</h2>
          <div className="space-y-4 text-white/70">
            <p>
              We understand that security is crucial for your business. Our comprehensive security 
              framework is built on industry best practices and regularly audited by third-party experts:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>SOC 2 Type II and ISO 27001 certified infrastructure</li>
              <li>Regular penetration testing and vulnerability assessments</li>
              <li>24/7 security monitoring and incident response team</li>
              <li>Employee security awareness training and background checks</li>
              <li>Secure development lifecycle with automated security testing</li>
              <li>Regular security patches and system updates</li>
              <li>Comprehensive disaster recovery and business continuity planning</li>
              <li>Multi-factor authentication and role-based access control</li>
              <li>Regular compliance audits and certifications</li>
            </ul>
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Contact Our Security Team</h3>
              <p className="text-white/70">
                For security-related inquiries or to report vulnerabilities, please contact us at:
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
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SecurityPage;