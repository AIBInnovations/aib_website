import { useState, useEffect } from 'react';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';
import BackgroundElements from './about/BackgroundElements';
import {
  ProjectsHero,
  ProjectsFilter,
  ProjectsGrid,
  ProjectsFeatured,
  ProjectsTestimonials,
  ProjectsCtaSection
} from './projects';

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

// Main Projects Page Component
const ProjectsPage = () => {
  const scrollY = useScrollReveal();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeFilter, setActiveFilter] = useState('all');
  
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

  // Handle filter changes
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white overflow-hidden">
      {/* Background Decorative Elements */}
      <BackgroundElements mousePosition={mousePosition} />
      
      {/* Header/Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <ProjectsHero scrollY={scrollY} mousePosition={mousePosition} />
      
      {/* Featured Projects Section */}
      <ProjectsFeatured scrollY={scrollY} />
      
      {/* Projects Filter and Grid */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-6">
          <ProjectsFilter 
            activeFilter={activeFilter} 
            onFilterChange={handleFilterChange} 
          />
          
          <ProjectsGrid activeFilter={activeFilter} />
        </div>
      </section>
      
      {/* Testimonials Section */}
      <ProjectsTestimonials />
      
      {/* Call to Action */}
      <ProjectsCtaSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProjectsPage;