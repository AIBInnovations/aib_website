// import { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// // Testimonial Slide Component
// const TestimonialSlide = ({ testimonial, isActive }) => {
//   return (
//     <div 
//       className={`absolute inset-0 transition-opacity duration-500 ${
//         isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
//       }`}
//     >
//       <div className="flex flex-col items-center text-center">
//         <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-8">
//           <Quote size={24} className="text-white" />
//         </div>
        
//         <blockquote className="text-xl md:text-2xl font-medium mb-6 max-w-2xl">
//           "{testimonial.quote}"
//         </blockquote>
        
//         <div className="flex flex-col items-center">
//           <div className="w-16 h-16 rounded-full overflow-hidden mb-2 border-2 border-indigo-500/50">
//             <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
//           </div>
//           <div className="font-semibold">{testimonial.name}</div>
//           <div className="text-indigo-400 text-sm">{testimonial.role}, {testimonial.company}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const ProjectsTestimonials = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
  
//   // Testimonial data
//   const testimonials = [
//     {
//       name: "Sarah Johnson",
//       role: "CTO",
//       company: "TechGrowth Inc.",
//       quote: "AIB Innovations delivered a manufacturing solution that increased our production efficiency by 40%. Their team's expertise in both hardware and software integration was exceptional.",
//       image: "/api/placeholder/100/100"
//     },
//     {
//       name: "Michael Zhang",
//       role: "Director of Operations",
//       company: "HealthTech Solutions",
//       quote: "The IoT monitoring system developed by AIB has transformed our medical device tracking. Patient satisfaction is up, and we've reduced equipment downtime by 60%.",
//       image: "/api/placeholder/100/100"
//     },
//     {
//       name: "Rebecca Torres",
//       role: "VP of Product",
//       company: "Finova",
//       quote: "Working with AIB on our financial analytics platform was a game-changer. Their AI expertise helped us develop predictive models that have dramatically improved our fraud detection rates.",
//       image: "/api/placeholder/100/100"
//     }
//   ];

//   // Auto-rotate testimonials
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//     }, 8000);
    
//     return () => clearInterval(interval);
//   }, [testimonials.length]);

//   // Navigation handlers
//   const goToPrevious = () => {
//     setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
//   };
  
//   const goToNext = () => {
//     setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//   };

//   return (
//     <section className="py-20 bg-gradient-to-b from-transparent to-slate-900/50">
//       <div className="container mx-auto px-6">
//         <div className="relative rounded-3xl overflow-hidden backdrop-blur-lg bg-gradient-to-br from-indigo-900/30 to-slate-900/30 border border-white/10 shadow-2xl p-8 md:p-16">
//           <div className="absolute inset-0 opacity-30">
//             <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-purple-600/50 blur-3xl"></div>
//             <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-blue-600/30 blur-3xl"></div>
//           </div>
          
//           <div className="relative z-10">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
//                 Client Testimonials
//               </h2>
//               <p className="max-w-2xl mx-auto text-slate-300">
//                 Hear what our clients have to say about working with us and the impact of our solutions.
//               </p>
//             </div>
            
//             <div className="relative h-80 md:h-64">
//               {testimonials.map((testimonial, index) => (
//                 <TestimonialSlide 
//                   key={index} 
//                   testimonial={testimonial} 
//                   isActive={index === activeIndex} 
//                 />
//               ))}
//             </div>
            
//             <div className="flex justify-center items-center space-x-4 mt-8">
//               <button 
//                 onClick={goToPrevious}
//                 className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
//                 aria-label="Previous testimonial"
//               >
//                 <ChevronLeft size={20} />
//               </button>
              
//               <div className="flex space-x-2">
//                 {testimonials.map((_, index) => (
//                   <button 
//                     key={index}
//                     onClick={() => setActiveIndex(index)}
//                     className={`w-2 h-2 rounded-full transition-all ${
//                       index === activeIndex 
//                         ? 'bg-indigo-500 w-6' 
//                         : 'bg-white/30 hover:bg-white/50'
//                     }`}
//                     aria-label={`Go to testimonial ${index + 1}`}
//                   />
//                 ))}
//               </div>
              
//               <button 
//                 onClick={goToNext}
//                 className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
//                 aria-label="Next testimonial"
//               >
//                 <ChevronRight size={20} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsTestimonials;





import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// Testimonial Slide Component
const TestimonialSlide = ({ testimonial, isActive }) => {
  return (
    <div 
      className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-700 ease-in-out ${
        isActive 
          ? 'opacity-100 visible scale-100' 
          : 'opacity-0 invisible scale-95'
      }`}
    >
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg">
        <Quote size={32} className="text-white" />
      </div>
      
      <blockquote className="text-2xl md:text-3xl font-medium mb-6 max-w-3xl px-4 text-white/90">
        "{testimonial.quote}"
      </blockquote>
      
      <div className="flex flex-col items-center mt-4">
        <div className="w-16 h-16 rounded-full overflow-hidden mb-2 border-2 border-indigo-500/50">
          <img 
            src={testimonial.image} 
            alt={testimonial.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="font-semibold text-white">{testimonial.name}</div>
        <div className="text-indigo-300 text-sm">{testimonial.role}, {testimonial.company}</div>
      </div>
    </div>
  );
};

const ProjectsTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Testimonial data
  const testimonials = [
    {
      name: "Minesh Jain",
      role: "CEO",
      company: "NTL Ventures",
      quote: "AIB Innovations gave us a fast Shopify store and a smooth WordPress hub with zero downtime. Their clean code, clear design and quick support made launch simple—highly recommended.",
      image: "/images/projects/23.png"
    },
    {
      name: "Nandini Porwal",
      role: "Co-Founder",
      company: "Sattva Organics",
      quote: "AIB Innovations rolled out our Shopify store and WordPress blog in days—polished design, smooth integrations, and responsive support throughout.",
      image: "/images/projects/24.png"
    },
    {
      name: "Mr. Vikas Jain",
      role: "CEO",
      company: "Spark Machineries Pvt. Ltd",
      quote: "AIB Innovations overhauled our financial-analytics platform with AI models that sharpened forecasts, added real-time risk alerts, and cut analysis time—proving smart, fast and truly collaborative.",
      image: "/images/projects/25.png"
    },
    {
      name: "Rajat Agrawal",
      role: "Director",
      company: "Rare Ventures",
      quote: "The AIB Innovations team never once said 'no'. Every request—big or small—was met with hard work, creative solutions, and steady follow-through. A truly dependable partner.",
      image: "https://www.freeiconspng.com/uploads/blank-face-person-icon-7.png"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Navigation handlers
  const goToPrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-indigo-900 to-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            Client Testimonials
          </h2>
          <p className="max-w-2xl mx-auto text-slate-300">
            Hear what our clients have to say about working with us and the impact of our solutions.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto h-[500px] overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <TestimonialSlide 
              key={index} 
              testimonial={testimonial} 
              isActive={index === activeIndex} 
            />
          ))}
          
          {/* Navigation */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-4 md:px-8">
            {/* Previous Button */}
            <button 
              onClick={goToPrevious}
              className="group p-2 rounded-full hover:bg-white/10 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft 
                size={32} 
                className="text-white/50 group-hover:text-white group-hover:scale-110 transition-all" 
              />
            </button>
            
            {/* Indicator Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'bg-indigo-500 w-6' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Next Button */}
            <button 
              onClick={goToNext}
              className="group p-2 rounded-full hover:bg-white/10 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight 
                size={32} 
                className="text-white/50 group-hover:text-white group-hover:scale-110 transition-all" 
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsTestimonials;