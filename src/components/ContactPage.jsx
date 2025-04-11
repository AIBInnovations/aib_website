import { useState, useEffect } from 'react';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';
import BackgroundElements from './about/BackgroundElements';
import ContactForm from './contact/ContactForm';
import ContactInfo from './contact/ContactInfo';
import ContactMap from './contact/ContactMap';
import ContactHero from './contact/ContactHero';
import ContactFaq from './contact/ContactFaq';

// Animation utility for scroll reveal
const useScrollReveal = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return scrollY;
};

// Main Contact Page Component
const ContactPage = () => {
  const scrollY = useScrollReveal();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formStatus, setFormStatus] = useState({ isSubmitted: false, isError: false });
  
  // Handle mouse movement for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Handle form submission
  const handleFormSubmit = (formData) => {
    // Simulating form submission - would be replaced with actual API call
    console.log('Form submitted with data:', formData);
    
    // Simulate success (in a real app, this would depend on API response)
    setFormStatus({ isSubmitted: true, isError: false });
    
    // For demo purposes, reset form status after 5 seconds
    setTimeout(() => {
      setFormStatus({ isSubmitted: false, isError: false });
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white overflow-hidden">
      {/* Background Decorative Elements */}
      <BackgroundElements mousePosition={mousePosition} />
      
      {/* Header/Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <ContactHero scrollY={scrollY} mousePosition={mousePosition} />
      
      {/* Main Contact Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Contact Form */}
            <div className="lg:w-7/12">
              <ContactForm 
                onSubmit={handleFormSubmit} 
                formStatus={formStatus}
              />
            </div>
            
            {/* Contact Info */}
            <div className="lg:w-5/12">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <ContactMap />
      
      {/* FAQ Section */}
      <ContactFaq />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;