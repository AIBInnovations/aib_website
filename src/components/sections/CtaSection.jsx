import { NeuButton } from '../ui/NeuButton';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const CtaSection = () => {
  const navigate = useNavigate();
  
  const handleContactClick = () => {
    navigate('/contact');
    // Ensure the page scrolls to top when navigating
    window.scrollTo(0, 0);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="max-w-2xl mx-auto text-slate-300 mb-10">
            Let's collaborate to create innovative solutions that drive your business forward.
            Our team is ready to turn your ideas into reality.
          </p>
          <NeuButton 
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-[0_4px_14px_rgba(79,70,229,0.4)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.6)]"
            onClick={handleContactClick}
          >
            Start Your Project
          </NeuButton>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;