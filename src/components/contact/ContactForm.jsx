import { useState } from 'react';
import { NeuButton } from '../ui/NeuButton';
import { GlassCard } from '../ui/GlassCard';
import { Send, Check, AlertTriangle } from 'lucide-react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

// Form Input Component
const FormInput = ({ label, type = 'text', placeholder, value, onChange, name, required = false }) => (
  <div className="mb-6">
    <label className="block text-sm font-medium mb-2 text-slate-300" htmlFor={name}>
      {label} {required && <span className="text-indigo-400">*</span>}
    </label>
    {type === 'textarea' ? (
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={4}
        required={required}
        className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white placeholder-slate-500 transition-colors"
      />
    ) : (
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white placeholder-slate-500 transition-colors"
      />
    )}
  </div>
);

// Form Success Message
const SuccessMessage = () => (
  <div className="flex items-center space-x-2 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 mb-6">
    <Check size={20} />
    <span>Your message has been sent successfully! We'll be in touch soon.</span>
  </div>
);

// Form Error Message
const ErrorMessage = () => (
  <div className="flex items-center space-x-2 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 mb-6">
    <AlertTriangle size={20} />
    <span>There was an error sending your message. Please try again.</span>
  </div>
);

const ContactForm = ({ onSubmit, formStatus }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const formRef = useRef();

  const handleSubmit = (e) => {
  e.preventDefault();

  // 1. Send message to admin (you)
  emailjs.send(
    'service_1wmtazq',
    'template_cm67ghz',       // Template you created to notify yourself
    formData,
    '58o-uWzSQZr_uPyPI'
  ).then(() => {
    console.log('Admin email sent to aibinnovations@gmail.com');
  }).catch((error) => {
    console.error('Admin email failed:', error.text);
  });

  // 2. Send auto-reply to the user
  emailjs.send(
    'service_1wmtazq',
    'template_7asvnd8',           // Auto-reply template
    {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      subject: formData.subject,
      message: formData.message
    },
    '58o-uWzSQZr_uPyPI'
  ).then(
    (result) => {
      console.log("Auto-reply sent to user:", result.text);
      onSubmit({ isSubmitted: true, isError: false });

      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });

      setTimeout(() => {
        onSubmit({ isSubmitted: false, isError: false });
      }, 5000);
    },
    (error) => {
      console.error("Auto-reply failed:", error.text);
      onSubmit({ isSubmitted: true, isError: true });
    });
  };


    


  return (
    <div id="contact-form">
      <GlassCard className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-purple-600/30 blur-3xl"></div>
          <div className="absolute -left-20 -top-20 w-64 h-64 rounded-full bg-blue-600/20 blur-3xl"></div>
        </div>
        
        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Send Us a Message</h2>
          
          {formStatus.isSubmitted && !formStatus.isError && <SuccessMessage />}
          {formStatus.isError && <ErrorMessage />}
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormInput
                label="Full Name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
              
              <FormInput
                label="Email"
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
              
              <FormInput
                label="Phone Number"
                type="tel"
                name="phone"
                placeholder="+1 (555) 123-4567"
                value={formData.phone}
                onChange={handleChange}
              />
              
              <FormInput
                label="Company"
                name="company"
                placeholder="Your Company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            
            <FormInput
              label="Subject"
              name="subject"
              placeholder="How can we help you?"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            
            <FormInput
              label="Message"
              type="textarea"
              name="message"
              placeholder="Tell us about your project or inquiry..."
              value={formData.message}
              onChange={handleChange}
              required
            />
            
            <NeuButton 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-[0_4px_14px_rgba(79,70,229,0.4)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.6)] flex items-center gap-2"
              type="submit"
            >
              <span>Send Message</span>
              <Send size={16} />
            </NeuButton>
          </form>
        </div>
      </GlassCard>
    </div>
  );
};

export default ContactForm;