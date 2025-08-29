import React, { useState } from 'react';
import { Check, Calendar, ArrowRight, AlertCircle, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

const ContactForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    requirements: '',
    date: '',
    time: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(prev => prev + 1);
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Insert data into Supabase
      const { error } = await supabase
        .from('consultations')
        .insert([
          {
            name: formData.name,
            company: formData.company,
            email: formData.email,
            phone: formData.phone || null,
            requirements: formData.requirements,
            date: formData.date,
            time: formData.time,
          }
        ]);
      
      if (error) {
        throw error;
      }
      
      // If successful, show success message
      setSubmitted(true);
      console.log('Form submitted to Supabase:', formData);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    { id: 1, name: 'Info' },
    { id: 2, name: 'Details' },
    { id: 3, name: 'Schedule' }
  ];

  return (
    <section id="contact" className="py-20 relative">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-purple-accent/10 to-transparent"></div>
      
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Book Your Free Strategy Call</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Schedule a free consultation with our AI experts to discuss how we can help
            automate your business processes and drive growth.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {!submitted ? (
            <>
              {/* Progress steps */}
              <div className="flex justify-center mb-8">
                {steps.map((s) => (
                  <div 
                    key={s.id} 
                    className={`step-item ${step === s.id ? 'active' : ''} ${step > s.id ? 'complete' : ''}`}
                  >
                    <div className={`step ${step === s.id ? 'active' : ''} ${step > s.id ? 'complete' : ''}`}>
                      {step > s.id ? <Check size={16} /> : s.id}
                    </div>
                    <p className="text-sm mt-2">{s.name}</p>
                  </div>
                ))}
              </div>
              
              <div className="card">
                {error && (
                  <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 mb-6 flex items-start gap-3">
                    <AlertCircle size={20} className="text-red-500 mt-0.5 flex-shrink-0" />
                    <p>{error}</p>
                  </div>
                )}
                
                {step === 1 && (
                  <form onSubmit={nextStep}>
                    <h3 className="text-xl font-semibold mb-6">Your Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="form-input"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-2">Company *</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required
                          className="form-input"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="form-input"
                          placeholder="you@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="+91 95153 41920"
                        />
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <Link to="/contact" className="btn-primary bg-gradient-to-r from-purple-accent to-electric-blue">
                        Full Contact Form
                      </Link>
                      <button type="submit" className="btn-primary">
                        Next Step <ArrowRight size={16} className="ml-2" />
                      </button>
                    </div>
                  </form>
                )}
                
                {step === 2 && (
                  <form onSubmit={nextStep}>
                    <h3 className="text-xl font-semibold mb-6">Project Details</h3>
                    <div className="mb-6">
                      <label htmlFor="requirements" className="block text-sm font-medium mb-2">
                        Tell us about your automation needs *
                      </label>
                      <textarea
                        id="requirements"
                        name="requirements"
                        value={formData.requirements}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="form-input resize-none"
                        placeholder="Describe your current challenges and what you're looking to achieve..."
                      ></textarea>
                    </div>
                    <div className="flex justify-between">
                      <button 
                        type="button" 
                        onClick={prevStep}
                        className="px-6 py-2 border border-white/20 rounded-lg hover:border-electric-blue transition-colors"
                      >
                        Back
                      </button>
                      <button type="submit" className="btn-primary">
                        Next Step <ArrowRight size={16} className="ml-2" />
                      </button>
                    </div>
                  </form>
                )}
                
                {step === 3 && (
                  <form onSubmit={handleSubmit}>
                    <h3 className="text-xl font-semibold mb-6">Schedule Your Free Call</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="date" className="block text-sm font-medium mb-2">
                          Preferred Date *
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                            className="form-input"
                            min={new Date().toISOString().split('T')[0]}
                          />
                          <Calendar size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="time" className="block text-sm font-medium mb-2">
                          Preferred Time *
                        </label>
                        <select
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                          className="form-input"
                        >
                          <option value="">Select a time</option>
                          <option value="9:00 AM">9:00 AM</option>
                          <option value="10:00 AM">10:00 AM</option>
                          <option value="11:00 AM">11:00 AM</option>
                          <option value="1:00 PM">1:00 PM</option>
                          <option value="2:00 PM">2:00 PM</option>
                          <option value="3:00 PM">3:00 PM</option>
                          <option value="4:00 PM">4:00 PM</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <button 
                        type="button" 
                        onClick={prevStep}
                        className="px-6 py-2 border border-white/20 rounded-lg hover:border-electric-blue transition-colors"
                      >
                        Back
                      </button>
                      <button 
                        type="submit" 
                        className="btn-primary"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 size={16} className="animate-spin mr-2" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            Book Your Free Call <Calendar size={16} className="ml-2" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </>
          ) : (
            <div className="card text-center py-12">
              <div className="w-16 h-16 bg-gradient-to-r from-electric-blue to-purple-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Check size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
              <p className="text-white/70 mb-6 max-w-md mx-auto">
                Your free strategy call has been scheduled. We've sent a confirmation email to <span className="text-electric-blue">{formData.email}</span> with all the details.
              </p>
              <p className="text-white/70">
                Our team will contact you shortly to confirm your appointment.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;