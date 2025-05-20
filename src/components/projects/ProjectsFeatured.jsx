
// import { ArrowRight } from 'lucide-react';
// import { NeuButton } from '../ui/NeuButton';

// const ProjectsFeatured = ({ scrollY }) => {
//   // Featured project data
//   const featuredProject = {
//     title: "NextGen AI Interviewing Platform",
//     description: "NextGen AI Interviewing Platform is redefining the recruitment landscape with cutting-edge AI technology and real-time intelligent proctoring. It dynamically crafts personalized interview experiences, powered by advanced question generation and precise candidate assessments. Leveraging sophisticated features—including real-time object detection, precise head and gaze movement analysis, and multi-face detection—it ensures unparalleled interview integrity and authenticity.",
//     stats: [
//       { label: "Efficiency Increase", value: "47%" },
//       { label: "Cost Reduction", value: "35%" },
//       { label: "Deployment Time", value: "1 month" }
//     ],
//     technologies: ["AI/ML", "TensorFlow", "React", "Flask","Generative AI", "Node.js", "Computer Vision","Natural Language Processing"],
//     image: "/images/projects/28.jpeg", 
//   };

//   return (
//     <section className="py-20 relative overflow-hidden">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
//             Featured Project
//           </h2>
//           <p className="max-w-2xl mx-auto text-slate-300">
//             Our most innovative and impactful recent work that showcases our capabilities.
//           </p>
//         </div>
        
//         <div 
//           className="relative rounded-3xl overflow-hidden"
//           style={{ 
//             transform: `translateY(${Math.max(0, 100 - (scrollY - 300) / 5)}px)`,
//             opacity: Math.min(1, (scrollY - 100) / 400),
//           }}
//         >
//           {/* Background gradient - keeping as a subtle background */}
//           <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 to-slate-900/50 backdrop-blur-sm z-10"></div>
          
//           {/* Removed the full-size background image */}
          
//           {/* Content overlay */}
//           <div className="relative z-20 p-8 md:p-16">
//             <div className="flex flex-col md:flex-row items-center md:items-start">
//               <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0 text-center md:text-left">
//                 <h3 className="text-3xl md:text-4xl font-bold mb-4">{featuredProject.title}</h3>
                
//                 <p className="text-slate-300 mb-6 max-w-xl mx-auto md:mx-0">
//                   {featuredProject.description}
//                 </p>
                
//                 <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
//                   {featuredProject.technologies.map((tech, index) => (
//                     <span 
//                       key={index}
//                       className="bg-white/10 backdrop-blur-sm text-xs px-3 py-1 rounded-full border border-white/10"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
                
//                 <div className="mb-8">
//                   <div className="grid grid-cols-3 gap-4">
//                     {featuredProject.stats.map((stat, index) => (
//                       <div key={index} className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
//                         <div className="text-2xl font-bold text-indigo-400">{stat.value}</div>
//                         <div className="text-xs text-slate-400">{stat.label}</div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
              
//               {/* Image container - now showing the actual image in the box */}
//               <div className="md:w-1/2 md:pl-8 flex justify-center">
//                 <div className="relative w-full max-w-md h-96 rounded-xl overflow-hidden border border-white/20 shadow-2xl">
//                   {/* Image inside the box */}
//                   <img 
//                     src={featuredProject.image} 
//                     alt={featuredProject.title} 
//                     className="w-full h-full object-contain"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsFeatured;




import { ArrowRight } from 'lucide-react';
import { NeuButton } from '../ui/NeuButton';

const ProjectsFeatured = ({ scrollY }) => {
  // Featured project data
  const featuredProject = {
    title: "NextGen AI Interviewing Platform",
    description: "NextGen AI Interviewing Platform is redefining the recruitment landscape with cutting-edge AI technology and real-time intelligent proctoring. It dynamically crafts personalized interview experiences, powered by advanced question generation and precise candidate assessments. Leveraging sophisticated features—including real-time object detection, precise head and gaze movement analysis, and multi-face detection—it ensures unparalleled interview integrity and authenticity.",
    stats: [
      { label: "Efficiency Increase", value: "47%" },
      { label: "Cost Reduction", value: "35%" },
      { label: "Deployment Time", value: "1 month" }
    ],
    technologies: ["AI/ML", "TensorFlow", "React", "Flask","Generative AI", "Node.js", "Computer Vision","Natural Language Processing"],
    image: "/images/projects/28.jpeg", 
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
          {/* Background gradient - keeping as a subtle background */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 to-slate-900/50 backdrop-blur-sm z-10"></div>
          
          {/* Removed the full-size background image */}
          
          {/* Content overlay */}
          <div className="relative z-20 p-8 md:p-16">
            <div className="flex flex-col md:flex-row items-center md:items-start">
              <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0 text-center md:text-left">
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
                
                {/* Modified stats grid for better mobile display */}
                <div className="mb-8">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {featuredProject.stats.map((stat, index) => (
                      <div key={index} className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                        <div className="text-2xl font-bold text-indigo-400">{stat.value}</div>
                        <div className="text-xs text-slate-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Image container - now showing the actual image in the box */}
              <div className="md:w-1/2 md:pl-8 flex justify-center">
                <div className="relative w-full max-w-md h-96 rounded-xl overflow-hidden border border-white/20 shadow-2xl">
                  {/* Image inside the box */}
                  <img 
                    src={featuredProject.image} 
                    alt={featuredProject.title} 
                    className="w-full h-full object-contain"
                  />
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