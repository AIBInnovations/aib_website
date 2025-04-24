// import { useState } from 'react';
// import { ArrowUpRight, ExternalLink } from 'lucide-react';
// import { GlassCard } from '../ui/GlassCard';
// import { NeuButton } from '../ui/NeuButton';

// // Project Card Component
// const ProjectCard = ({ image, title, description, category, link }) => {
//   const [isHovered, setIsHovered] = useState(false);
  
//   return (
//     <div 
//       className="h-full transition-all duration-500 transform hover:scale-102"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <GlassCard className="h-full flex flex-col overflow-hidden">
//         {/* Project Image */}
//         <div className="relative h-48 md:h-64 mb-4 overflow-hidden rounded-lg">
//           <img 
//             src={image} 
//             alt={title} 
//             className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
//             style={{
//               transform: isHovered ? 'scale(1.05)' : 'scale(1)'
//             }}
//           />
          
//           {/* Category Badge */}
//           <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-md text-xs py-1 px-2 rounded-full border border-white/10">
//             {category}
//           </div>
//         </div>
        
//         {/* Project Content */}
//         <div className="flex-grow flex flex-col">
//           <h3 className="text-xl font-bold mb-2">{title}</h3>
//           <p className="text-slate-300 text-sm mb-4 flex-grow">{description}</p>
          
//           <a 
//             href={link} 
//             className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors mt-auto"
//           >
//             <span className="mr-1">View Project</span>
//             <ArrowUpRight size={16} />
//           </a>
//         </div>
//       </GlassCard>
//     </div>
//   );
// };

// const ProjectsGrid = ({ activeFilter }) => {
//   // Projects data - in a real application, this could be fetched from an API
//   const projects = [
//     {
//       id: 1,
//       title: "High-Crest-Realtors", // Fixed typo in title "Hih" → "High"
//       description: "Enterprise data visualization dashboard with real-time analytics and customizable widgets.",
//       category: "software",
//       tags: ["web", "software"],
//       image: "/images/projects/Screenshot 2025-04-24 at 12.08.06 PM.png", // Should be an image path, not a video
//       videoSrc: "/videos/projects/High-Crest-Realtors-Made-with-Clipchamp-1.mp4", // Add this if you need the video
//       link: "#project-detail"
//     },
//     {
//       id: 2,
//       title: "SmartHome Hub",
//       description: "Integrated IoT control system for managing smart home devices with voice and app control.",
//       category: "hardware",
//       tags: ["hardware", "iot"],
//       image: "/api/placeholder/600/400",
//       link: "#project-detail"
//     },
//     {
//       id: 3,
//       title: "Predictive Analytics Engine",
//       description: "Machine learning system for predictive business analytics with industry-specific models.",
//       category: "AI & ML",
//       tags: ["ai", "software"],
//       image: "/api/placeholder/600/400",
//       link: "#project-detail"
//     },
//     {
//       id: 4,
//       title: "Health Monitoring Wearable",
//       description: "Medical-grade wearable device with continuous health monitoring and alert system.",
//       category: "hardware",
//       tags: ["hardware", "iot"],
//       image: "/api/placeholder/600/400",
//       link: "#project-detail"
//     },
//     {
//       id: 5,
//       title: "E-Commerce Platform",
//       description: "Full-featured e-commerce solution with inventory management and payment processing.",
//       category: "web",
//       tags: ["web", "software"],
//       image: "/api/placeholder/600/400",
//       link: "#project-detail"
//     },
//     {
//       id: 6,
//       title: "Logistics Tracking App",
//       description: "Mobile application for real-time tracking of shipments and delivery management.",
//       category: "mobile",
//       tags: ["mobile", "software"],
//       image: "/api/placeholder/600/400",
//       link: "#project-detail"
//     },
//     {
//       id: 7,
//       title: "AI-Powered Customer Service",
//       description: "Natural language processing solution for automated customer support and ticketing.",
//       category: "AI & ML",
//       tags: ["ai", "software"],
//       image: "/api/placeholder/600/400",
//       link: "#project-detail"
//     },
//     {
//       id: 8,
//       title: "Industrial Automation System",
//       description: "Factory automation solution with robotics integration and production monitoring.",
//       category: "hardware",
//       tags: ["hardware", "iot"],
//       image: "/api/placeholder/600/400",
//       link: "#project-detail"
//     },
//     {
//       id: 9,
//       title: "Fintech Payment Gateway",
//       description: "Secure financial transaction platform with multi-currency support and fraud detection.",
//       category: "software",
//       tags: ["web", "software"],
//       image: "/api/placeholder/600/400",
//       link: "#project-detail"
//     }
//   ];

//   // Filter projects based on active filter
//   const filteredProjects = activeFilter === 'all' 
//     ? projects 
//     : projects.filter(project => project.tags.includes(activeFilter));

//   return (
//     <div>
//       {/* Projects Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {filteredProjects.map((project) => (
//           <ProjectCard
//             key={project.id}
//             image={project.image}
//             title={project.title}
//             description={project.description}
//             category={project.category}
//             link={project.link}
//           />
//         ))}
//       </div>
      
//       {/* Empty state when no projects match filter */}
//       {filteredProjects.length === 0 && (
//         <div className="text-center py-16">
//           <h3 className="text-2xl font-semibold mb-4">No projects found</h3>
//           <p className="text-slate-300 mb-8">No projects match the selected filter criteria.</p>
//           <NeuButton 
//             onClick={() => setActiveFilter('all')}
//             className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
//           >
//             View All Projects
//           </NeuButton>
//         </div>
//       )}
      
//       {/* Load More Button - only show if there are projects */}
//       {filteredProjects.length > 0 && (
//         <div className="text-center mt-12">
//           <NeuButton className="bg-white/5 hover:bg-white/10 px-8">
//             <span className="mr-2">Load More Projects</span>
//             <ExternalLink size={16} />
//           </NeuButton>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProjectsGrid;



import { useState, useRef, useEffect } from 'react';
import { ArrowUpRight, ExternalLink, Play } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { NeuButton } from '../ui/NeuButton';

// Project Card Component
const ProjectCard = ({ image, title, description, category, link, videoSrc }) => {
  // For debugging image paths
  console.log(`Loading image for ${title}: ${image}`);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  
  const handlePlayVideo = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };
  
  return (
    <div 
      className="h-full transition-all duration-500 transform hover:scale-102"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <GlassCard className="h-full flex flex-col overflow-hidden">
        {/* Project Image or Video */}
        <div className="relative h-48 md:h-64 mb-4 overflow-hidden rounded-lg">
          {videoSrc ? (
            <>
              <video 
                ref={videoRef}
                poster={image}
                className="w-full h-full object-cover"
                onClick={handlePlayVideo}
                onEnded={() => setIsPlaying(false)}
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Play button overlay - only show when not playing */}
              {!isPlaying && (
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity cursor-pointer"
                  onClick={handlePlayVideo}
                >
                  <div className="w-12 h-12 rounded-full bg-indigo-600/80 flex items-center justify-center hover:bg-indigo-500 transition-colors">
                    <Play size={20} className="text-white ml-1" />
                  </div>
                </div>
              )}
            </>
          ) : (
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover"
              style={{
                maxHeight: "100%",
                display: "block" // Ensure the image is displayed as a block element
              }}
              onError={(e) => {
                console.error(`Error loading image: ${image}`);
                // Use a data URI placeholder instead of the API placeholder
                e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='100%25' height='100%25' fill='%23555'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24px' fill='%23fff'%3E${title}%3C/text%3E%3C/svg%3E";
              }}
            />
          )}
          
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
            target="_blank"  
            rel="noopener noreferrer"
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
      title: "High-Crest-Realtors",
      description: "High Crest Realtors is an Indore-based, customer-focused real-estate consultancy that guides clients through buying, selling, renting and even building or renovating properties, backed by in-house construction and interior-design services.",
      category: "software",
      tags: ["web", "software"],
      image: "/images/projects/1.png", 
      // Add a black background color to make the play button more visible
      backgroundColor: "#000", // Restore original path
      videoSrc: "/videos/projects/High-Crest-Realtors-Made-with-Clipchamp-1.mp4",
      link: "https://highcrestrealtors.com/"
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
            videoSrc={project.videoSrc}
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