import { useState } from 'react';
import { Code, Cpu, Globe, Shield, Layers, Server } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

// Service Card Component
const ServiceCard = ({ icon: Icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="w-full h-full transition-all duration-500 transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Adjusted padding and spacing for mobile */}
      <GlassCard className="h-full flex flex-col items-center text-center p-4 md:p-6">
        {/* Smaller icon container on mobile */}
        <div className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 mb-3 md:mb-4">
          <Icon size={24} className="text-white" />
        </div>
        {/* Adjusted text size and margins for mobile */}
        <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-white">{title}</h3>
        {/* Hide description on mobile, show on md and up screens */}
        <p className="text-slate-300 flex-grow hidden md:block">{description}</p>
        
        {/* "Learn more" text - only visible on hover */}
        <div className={`mt-2 md:mt-4 flex items-center text-indigo-400 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <span className="mr-2 text-sm md:text-base">Learn more</span>
          <ChevronRight size={16} />
        </div>
      </GlassCard>
    </div>
  );
};

const ServicesSection = ({ scrollY }) => {
  // Services data
  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs with cutting-edge technologies."
    },
    {
      icon: Cpu,
      title: "Hardware Projects",
      description: "Innovative hardware solutions from concept to implementation with expert engineering."
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Responsive, modern web applications with stunning UIs and seamless user experiences."
    },
    {
      icon: Shield,
      title: "Cybersecurity Services",
      description: "Comprehensive security solutions to protect your digital assets and infrastructure."
    },
    {
      icon: Layers,
      title: "AI & ML Solutions",
      description: "Leverage the power of artificial intelligence and machine learning for your business."
    },
    {
      icon: Server,
      title: "Cloud Services",
      description: "Scalable cloud solutions to optimize performance and reduce operational costs."
    }
  ];

  return (
    <section id="services" className="py-12 md:py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Our Services</h2>
          <p className="max-w-2xl mx-auto text-slate-300">Comprehensive solutions for all your technology needs, from custom software development to advanced hardware projects.</p>
        </div>
        
        {/* Added smaller gap for mobile view */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="h-full transition-all duration-700"
              style={{ 
                transform: `translateY(${Math.max(0, 100 - (scrollY - 300) / 5)}px)`,
                opacity: Math.min(1, (scrollY - 300) / 400),
                transitionDelay: `${index * 100}ms`
              }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;