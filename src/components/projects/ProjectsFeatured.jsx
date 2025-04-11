import { ArrowRight } from 'lucide-react';
import { NeuButton } from '../ui/NeuButton';

const ProjectsFeatured = ({ scrollY }) => {
  // Featured project data
  const featuredProject = {
    title: "NextGen Smart Manufacturing Platform",
    description: "An integrated hardware and software solution that revolutionizes manufacturing processes with IoT sensors, predictive maintenance AI, and real-time analytics dashboard.",
    stats: [
      { label: "Efficiency Increase", value: "47%" },
      { label: "Cost Reduction", value: "35%" },
      { label: "Deployment Time", value: "3 months" }
    ],
    technologies: ["AI/ML", "IoT", "Cloud", "Edge Computing", "React", "Node.js", "TensorFlow"],
    image: "/api/placeholder/800/600"
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            Featured Project
          </h2>
          <p className="max-w-2xl mx-auto text-slate-300">
            Our most innovative and impactful recent work that showcases our capabilities.
          </p>
        </div>
        
        <div 
          className="relative rounded-3xl overflow-hidden"
          style={{ 
            transform: `translateY(${Math.max(0, 100 - (scrollY - 300) / 5)}px)`,
            opacity: Math.min(1, (scrollY - 100) / 400),
          }}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 to-slate-900/50 backdrop-blur-sm z-10"></div>
          
          {/* Featured project image */}
          <div className="absolute inset-0">
            <img 
              src={featuredProject.image} 
              alt={featuredProject.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Content overlay */}
          <div className="relative z-20 p-8 md:p-16">
            <div className="flex flex-col md:flex-row items-center md:items-start">
              <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0 text-center md:text-left">
                <span className="inline-block bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-sm mb-4 backdrop-blur-md border border-indigo-500/30">
                  Case Study
                </span>
                
                <h3 className="text-3xl md:text-4xl font-bold mb-4">{featuredProject.title}</h3>
                
                <p className="text-slate-300 mb-6 max-w-xl mx-auto md:mx-0">
                  {featuredProject.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
                  {featuredProject.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-white/10 backdrop-blur-sm text-xs px-3 py-1 rounded-full border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="mb-8">
                  <div className="grid grid-cols-3 gap-4">
                    {featuredProject.stats.map((stat, index) => (
                      <div key={index} className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                        <div className="text-2xl font-bold text-indigo-400">{stat.value}</div>
                        <div className="text-xs text-slate-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <NeuButton className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white inline-flex items-center">
                  <span className="mr-2">View Case Study</span>
                  <ArrowRight size={16} />
                </NeuButton>
              </div>
              
              {/* Decorative elements */}
              <div className="md:w-1/2 md:pl-8 flex justify-center">
                <div className="relative w-full max-w-sm aspect-video rounded-xl overflow-hidden border border-white/20 shadow-2xl">
                  <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-indigo-600/80 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-indigo-500/80 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsFeatured;