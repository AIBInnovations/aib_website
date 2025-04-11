import { useState, useEffect } from 'react';
import { 
  Code, 
  Server, 
  Cpu, 
  Globe, 
  MessageSquare, 
  Users, 
  Shield, 
  Layers,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import HeroSection from './sections/HeroSection';
import ServicesSection from './sections/ServicesSections';
import FeatureSection from './sections/FeatureSection';
import CtaSection from './sections/CtaSection';
import Footer from './shared/Footer';
import Navbar from './shared/Navbar';

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

// Main Homepage Component
const HomePage = () => {
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
      <div className="fixed inset-0 pointer-events-none">
        {/* Animated gradient orbs */}
        <div 
          className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-600/30 blur-3xl"
          style={{ 
            transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-indigo-500/20 blur-3xl animate-pulse"
          style={{ 
            animationDuration: '15s',
            transform: `translate(${-mousePosition.x * 40}px, ${-mousePosition.y * 40}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute top-1/2 left-2/3 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl"
          style={{ 
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWNmgydjEwem0tNiA2aC00di0yaDR2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
      </div>
      
      {/* Header/Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection scrollY={scrollY} mousePosition={mousePosition} />
      
      {/* Services Section */}
      <ServicesSection scrollY={scrollY} />
      
      {/* Feature Highlight */}
      <FeatureSection />
      
      {/* Call to Action */}
      <CtaSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;