import React, { useState, useEffect } from 'react';
import { ArrowLeft, Send, Loader2, CheckCircle, AlertCircle, Info, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

interface FormData {
  fullName: string;
  email: string;
  companyName: string;
  service: string;
  problems: string;
  additionalInfo: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  companyName?: string;
  service?: string;
  problems?: string;
}

const ContactPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    companyName: '',
    service: '',
    problems: '',
    additionalInfo: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submissionTime, setSubmissionTime] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validateEmail = (email: string): boolean => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }
    
    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }
    
    if (!formData.problems.trim()) {
      newErrors.problems = 'Please describe the problems you want to solve';
    } else if (formData.problems.trim().length < 50) {
      newErrors.problems = `Please provide at least 50 characters (currently ${formData.problems.trim().length})`;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    
    // Validate field on blur
    validateField(name);
  };

  const validateField = (name: string) => {
    const newErrors = { ...errors };
    
    switch (name) {
      case 'fullName':
        if (!formData.fullName.trim()) {
          newErrors.fullName = 'Full name is required';
        } else {
          delete newErrors.fullName;
        }
        break;
      
      case 'email':
        if (!formData.email.trim()) {
          newErrors.email = 'Email address is required';
        } else if (!validateEmail(formData.email)) {
          newErrors.email = 'Please enter a valid email address';
        } else {
          delete newErrors.email;
        }
        break;
      
      case 'companyName':
        if (!formData.companyName.trim()) {
          newErrors.companyName = 'Company name is required';
        } else {
          delete newErrors.companyName;
        }
        break;
      
      case 'service':
        if (!formData.service) {
          newErrors.service = 'Please select a service';
        } else {
          delete newErrors.service;
        }
        break;
      
      case 'problems':
        if (!formData.problems.trim()) {
          newErrors.problems = 'Please describe the problems you want to solve';
        } else if (formData.problems.trim().length < 50) {
          newErrors.problems = `Please provide at least 50 characters (currently ${formData.problems.trim().length})`;
        } else {
          delete newErrors.problems;
        }
        break;
      
      default:
        break;
    }
    
    setErrors(newErrors);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      companyName: '',
      service: '',
      problems: '',
      additionalInfo: ''
    });
    setTouched({});
    setErrors({});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched
    const allTouched: Record<string, boolean> = {};
    Object.keys(formData).forEach(key => {
      allTouched[key] = true;
    });
    setTouched(allTouched);
    
    if (validateForm()) {
      setIsSubmitting(true);
      setErrorMessage(null);
      
      try {
        // Insert data into Supabase
        const { error } = await supabase
          .from('contact_requests')
          .insert([
            {
              full_name: formData.fullName,
              email: formData.email,
              company_name: formData.companyName,
              service: formData.service,
              problems: formData.problems,
              additional_info: formData.additionalInfo || null
            }
          ]);
        
        if (error) {
          throw error;
        }
        
        // Record submission timestamp
        const now = new Date();
        setSubmissionTime(now.toLocaleString());
        
        // Show success message
        setSubmitStatus('success');
        
        // Reset form after successful submission
        resetForm();
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitStatus('error');
        setErrorMessage('There was an error submitting your request. Please try again later.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const goBack = () => {
    navigate('/');
  };

  // Reset submit status when form data changes
  useEffect(() => {
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
    }
  }, [formData]);

  return (
    <div className="min-h-screen bg-background text-white font-outfit pt-20 pb-16">
      <div className="container-custom">
        <button 
          onClick={goBack}
          className="flex items-center gap-2 text-white/70 hover:text-electric-blue transition-colors mb-8"
          aria-label="Back to home page"
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </button>
        
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-purple-accent">
            Contact Us
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Fill out the form below to get started with our AI automation services.
            Our team will review your information and get back to you within 24 hours.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {submitStatus === 'success' ? (
            <div className="card text-center py-12">
              <div className="w-16 h-16 bg-gradient-to-r from-electric-blue to-purple-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
              <p className="text-white/70 mb-4 max-w-md mx-auto">
                Your request has been submitted successfully at <span className="text-electric-blue">{submissionTime}</span>.
              </p>
              <p className="text-white/70 mb-4 max-w-md mx-auto">
                We've sent a confirmation email to <span className="text-electric-blue">{formData.email}</span> with all the details.
              </p>
              <p className="text-white/70 mb-8">
                Our team will contact you shortly to discuss your automation needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button
                  onClick={resetForm}
                  className="btn-primary bg-gradient-to-r from-purple-accent to-electric-blue"
                  aria-label="Submit another request"
                >
                  Submit Another Request
                </button>
                <button
                  onClick={goBack}
                  className="btn-primary"
                  aria-label="Return to home page"
                >
                  Return to Home
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="card"
              noValidate
            >
              {submitStatus === 'error' && (
                <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 mb-6 flex items-start gap-3">
                  <AlertCircle size={20} className="text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Something went wrong</p>
                    <p className="text-white/70 text-sm">{errorMessage || 'Please try again or contact us directly at hello@visionaryautomations.ai'}</p>
                  </div>
                  <button 
                    className="ml-auto text-white/50 hover:text-white transition-colors"
                    onClick={() => setSubmitStatus('idle')}
                    aria-label="Dismiss error message"
                  >
                    <X size={16} />
                  </button>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`form-input ${touched.fullName && errors.fullName ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                    placeholder="John Doe"
                    required
                    aria-required="true"
                    aria-invalid={touched.fullName && !!errors.fullName}
                    aria-describedby={errors.fullName ? "fullName-error" : undefined}
                  />
                  {touched.fullName && errors.fullName && (
                    <p className="mt-1 text-sm text-red-500" id="fullName-error">{errors.fullName}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`form-input ${touched.email && errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                    placeholder="you@example.com"
                    required
                    aria-required="true"
                    aria-invalid={touched.email && !!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {touched.email && errors.email && (
                    <p className="mt-1 text-sm text-red-500" id="email-error">{errors.email}</p>
                  )}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium mb-2">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`form-input ${touched.companyName && errors.companyName ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                    placeholder="Your Company"
                    required
                    aria-required="true"
                    aria-invalid={touched.companyName && !!errors.companyName}
                    aria-describedby={errors.companyName ? "companyName-error" : undefined}
                  />
                  {touched.companyName && errors.companyName && (
                    <p className="mt-1 text-sm text-red-500" id="companyName-error">{errors.companyName}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Service <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`form-input ${touched.service && errors.service ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                    required
                    aria-required="true"
                    aria-invalid={touched.service && !!errors.service}
                    aria-describedby={errors.service ? "service-error" : undefined}
                  >
                    <option value="">Select a service</option>
                    <option value="AI Agent">AI Agent</option>
                    <option value="AI Phone Agent">AI Phone Agent</option>
                    <option value="Email Automation">Email Automation</option>
                    <option value="Lead CRM">Lead CRM</option>
                    <option value="Lead Generation">Lead Generation</option>
                  </select>
                  {touched.service && errors.service && (
                    <p className="mt-1 text-sm text-red-500" id="service-error">{errors.service}</p>
                  )}
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="problems" className="block text-sm font-medium mb-2">
                  What problems are you looking to solve? <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="problems"
                  name="problems"
                  value={formData.problems}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={4}
                  className={`form-input resize-none ${touched.problems && errors.problems ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                  placeholder="Please describe the challenges you're facing and what you hope to achieve with our services... (minimum 50 characters)"
                  required
                  aria-required="true"
                  aria-invalid={touched.problems && !!errors.problems}
                  aria-describedby={errors.problems ? "problems-error" : "problems-helper"}
                ></textarea>
                {touched.problems && errors.problems ? (
                  <p className="mt-1 text-sm text-red-500" id="problems-error">{errors.problems}</p>
                ) : (
                  <p className="mt-1 text-sm text-white/50" id="problems-helper">
                    {formData.problems.length}/50 characters minimum
                  </p>
                )}
              </div>
              
              <div className="mb-8">
                <label htmlFor="additionalInfo" className="block text-sm font-medium mb-2">
                  Additional Information <span className="text-white/50">(optional)</span>
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows={3}
                  className="form-input resize-none"
                  placeholder="Any other details you'd like to share with us..."
                  aria-required="false"
                ></textarea>
                <p className="mt-1 text-sm text-white/50 flex items-center gap-1">
                  <Info size={14} />
                  <span>This field is optional but helps us better understand your needs</span>
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-2 border border-white/20 rounded-lg hover:border-electric-blue transition-colors"
                  disabled={isSubmitting}
                  aria-label="Clear form fields"
                >
                  Clear Form
                </button>
                
                <button
                  type="submit"
                  className="btn-primary flex items-center gap-2"
                  disabled={isSubmitting}
                  aria-label={isSubmitting ? "Submitting form" : "Submit request"}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Request</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;