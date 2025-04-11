import { useState, useEffect } from 'react';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';
import BackgroundElements from './about/BackgroundElements';
import AboutHeroSection from './about/AboutHeroSection';
import MissionVisionSection from './about/MissionVisionSection';
import TeamSection from './about/TeamSection';
import ValuesSection from './about/ValuesSection';
import TimelineSection from './about/TimelineSection';
import StatsSection from './about/StatsSection';
import AboutCtaSection from './about/AboutCtaSection';

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

// Main About Page Component
const AboutPage = () => {
  const scrollY = useScrollReveal();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white overflow-hidden">
      {/* Background Decorative Elements */}
      <BackgroundElements mousePosition={mousePosition} />
      
      {/* Header/Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <AboutHeroSection scrollY={scrollY} mousePosition={mousePosition} />
      
      {/* Mission & Vision Section */}
      <MissionVisionSection />
      
      {/* Team Section */}
      <TeamSection scrollY={scrollY} />
      
      {/* Company Values */}
      <ValuesSection />
      
      {/* Company Timeline */}
      <TimelineSection />
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* CTA Section */}
      <AboutCtaSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;