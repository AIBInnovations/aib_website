import { useState } from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { NeuButton } from '../ui/NeuButton';

// Project Card Component
const ProjectCard = ({ image, title, description, category, link }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="h-full transition-all duration-500 transform hover:scale-102"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <GlassCard className="h-full flex flex-col overflow-hidden">
        {/* Project Image */}
        <div className="relative h-48 md:h-64 mb-4 overflow-hidden rounded-lg">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
            style={{
              transform: isHovered ? 'scale(1.05)' : 'scale(1)'
            }}
          />
          
          {/* Category Badge */}
          <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-md text-xs py-1 px-2 rounded-full border border-white/10">
            {category}
          </div>
        </div>
        
        {/* Project Content */}
        <div className="flex-grow flex flex-col">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-slate-300 text-sm mb-4 flex-grow">{description}</p>
          
          <a 
            href={link} 
            className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors mt-auto"
          >
            <span className="mr-1">View Project</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      </GlassCard>
    </div>
  );
};

const ProjectsGrid = ({ activeFilter }) => {
  // Projects data - in a real application, this could be fetched from an API
  const projects = [
    {
      id: 1,
      title: "TechFlow Dashboard",
      description: "Enterprise data visualization dashboard with real-time analytics and customizable widgets.",
      category: "software",
      tags: ["web", "software"],
      image: "/api/placeholder/600/400",
      link: "#project-detail"
    },
    {
      id: 2,
      title: "SmartHome Hub",
      description: "Integrated IoT control system for managing smart home devices with voice and app control.",
      category: "hardware",
      tags: ["hardware", "iot"],
      image: "/api/placeholder/600/400",
      link: "#project-detail"
    },
    {
      id: 3,
      title: "Predictive Analytics Engine",
      description: "Machine learning system for predictive business analytics with industry-specific models.",
      category: "AI & ML",
      tags: ["ai", "software"],
      image: "/api/placeholder/600/400",
      link: "#project-detail"
    },
    {
      id: 4,
      title: "Health Monitoring Wearable",
      description: "Medical-grade wearable device with continuous health monitoring and alert system.",
      category: "hardware",
      tags: ["hardware", "iot"],
      image: "/api/placeholder/600/400",
      link: "#project-detail"
    },
    {
      id: 5,
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce solution with inventory management and payment processing.",
      category: "web",
      tags: ["web", "software"],
      image: "/api/placeholder/600/400",
      link: "#project-detail"
    },
    {
      id: 6,
      title: "Logistics Tracking App",
      description: "Mobile application for real-time tracking of shipments and delivery management.",
      category: "mobile",
      tags: ["mobile", "software"],
      image: "/api/placeholder/600/400",
      link: "#project-detail"
    },
    {
      id: 7,
      title: "AI-Powered Customer Service",
      description: "Natural language processing solution for automated customer support and ticketing.",
      category: "AI & ML",
      tags: ["ai", "software"],
      image: "/api/placeholder/600/400",
      link: "#project-detail"
    },
    {
      id: 8,
      title: "Industrial Automation System",
      description: "Factory automation solution with robotics integration and production monitoring.",
      category: "hardware",
      tags: ["hardware", "iot"],
      image: "/api/placeholder/600/400",
      link: "#project-detail"
    },
    {
      id: 9,
      title: "Fintech Payment Gateway",
      description: "Secure financial transaction platform with multi-currency support and fraud detection.",
      category: "software",
      tags: ["web", "software"],
      image: "/api/placeholder/600/400",
      link: "#project-detail"
    }
  ];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <div>
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            category={project.category}
            link={project.link}
          />
        ))}
      </div>
      
      {/* Empty state when no projects match filter */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <h3 className="text-2xl font-semibold mb-4">No projects found</h3>
          <p className="text-slate-300 mb-8">No projects match the selected filter criteria.</p>
          <NeuButton 
            onClick={() => setActiveFilter('all')}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
          >
            View All Projects
          </NeuButton>
        </div>
      )}
      
      {/* Load More Button - only show if there are projects */}
      {filteredProjects.length > 0 && (
        <div className="text-center mt-12">
          <NeuButton className="bg-white/5 hover:bg-white/10 px-8">
            <span className="mr-2">Load More Projects</span>
            <ExternalLink size={16} />
          </NeuButton>
        </div>
      )}
    </div>
  );
};

export default ProjectsGrid;