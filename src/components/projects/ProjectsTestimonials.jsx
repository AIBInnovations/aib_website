
// import { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// // Testimonial Slide Component
// const TestimonialSlide = ({ testimonial, isActive }) => {
//   return (
//     <div 
//       className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-700 ease-in-out ${
//         isActive 
//           ? 'opacity-100 visible scale-100' 
//           : 'opacity-0 invisible scale-95'
//       }`}
//     >
//       <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg">
//         <Quote size={32} className="text-white" />
//       </div>
      
//       <blockquote className="text-2xl md:text-3xl font-medium mb-6 max-w-3xl px-4 text-white/90">
//         "{testimonial.quote}"
//       </blockquote>
      
//       <div className="flex flex-col items-center mt-4">
//         <div className="w-16 h-16 rounded-full overflow-hidden mb-2 border-2 border-indigo-500/50">
//           <img 
//             src={testimonial.image} 
//             alt={testimonial.name} 
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="font-semibold text-white">{testimonial.name}</div>
//         <div className="text-indigo-300 text-sm">{testimonial.role}, {testimonial.company}</div>
//       </div>
//     </div>
//   );
// };

// const ProjectsTestimonials = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
  
//   // Testimonial data
//   const testimonials = [
//     {
//       name: "Minesh Jain",
//       role: "CEO",
//       company: "NTL Ventures",
//       quote: "AIB Innovations gave us a fast Shopify store and a smooth WordPress hub with zero downtime. Their clean code, clear design and quick support made launch simple—highly recommended.",
//       image: "/images/projects/23.png"
//     },
//     {
//       name: "Nandini Porwal",
//       role: "Co-Founder",
//       company: "Sattva Organics",
//       quote: "AIB Innovations rolled out our Shopify store and WordPress blog in days—polished design, smooth integrations, and responsive support throughout.",
//       image: "/images/projects/24.png"
//     },
//     {
//       name: "Mr. Vikas Jain",
//       role: "CEO",
//       company: "Spark Machineries Pvt. Ltd",
//       quote: "AIB Innovations overhauled our financial-analytics platform with AI models that sharpened forecasts, added real-time risk alerts, and cut analysis time—proving smart, fast and truly collaborative.",
//       image: "/images/projects/25.png"
//     },
//     {
//       name: "Rajat Agrawal",
//       role: "Director",
//       company: "Rare Ventures",
//       quote: "The AIB Innovations team never once said 'no'. Every request—big or small—was met with hard work, creative solutions, and steady follow-through. A truly dependable partner.",
//       image: "https://www.freeiconspng.com/uploads/blank-face-person-icon-7.png"
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
//     <section id="testimonials" className="py-20 bg-gradient-to-br from-indigo-900 to-slate-900 text-white">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
//             Client Testimonials
//           </h2>
//           <p className="max-w-2xl mx-auto text-slate-300">
//             Hear what our clients have to say about working with us and the impact of our solutions.
//           </p>
//         </div>
        
//         <div className="relative max-w-4xl mx-auto h-[500px] overflow-hidden">
//           {testimonials.map((testimonial, index) => (
//             <TestimonialSlide 
//               key={index} 
//               testimonial={testimonial} 
//               isActive={index === activeIndex} 
//             />
//           ))}
          
//           {/* Navigation */}
//           <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-4 md:px-8">
//             {/* Previous Button */}
//             <button 
//               onClick={goToPrevious}
//               className="group p-2 rounded-full hover:bg-white/10 transition-all duration-300"
//               aria-label="Previous testimonial"
//             >
//               <ChevronLeft 
//                 size={32} 
//                 className="text-white/50 group-hover:text-white group-hover:scale-110 transition-all" 
//               />
//             </button>
            
//             {/* Indicator Dots */}
//             <div className="flex space-x-2">
//               {testimonials.map((_, index) => (
//                 <button 
//                   key={index}
//                   onClick={() => setActiveIndex(index)}
//                   className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                     index === activeIndex 
//                       ? 'bg-indigo-500 w-6' 
//                       : 'bg-white/30 hover:bg-white/50'
//                   }`}
//                   aria-label={`Go to testimonial ${index + 1}`}
//                 />
//               ))}
//             </div>
            
//             {/* Next Button */}
//             <button 
//               onClick={goToNext}
//               className="group p-2 rounded-full hover:bg-white/10 transition-all duration-300"
//               aria-label="Next testimonial"
//             >
//               <ChevronRight 
//                 size={32} 
//                 className="text-white/50 group-hover:text-white group-hover:scale-110 transition-all" 
//               />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsTestimonials;

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

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
      name: "Shubh Khatri",
      role: "Managing Director",
      company: "Punjabi Rishtey Marriage Forum",
      quote: "The team at AIB Innovations helped us do a complete overhaul of our Matrimonial Website with great expertise. They're a smart, up-to-date team that offers the best of solutions. They truly listen, act fast and deliver exactly what you need.",
      image: "/images/projects/26.jpeg"
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

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section id="testimonials" className="py-16 md:py-20 bg-gradient-to-br from-indigo-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            Client Testimonials
          </h2>
          <p className="max-w-2xl mx-auto text-slate-300 text-sm md:text-base">
            Hear what our clients have to say about working with us and the impact of our solutions.
          </p>
        </div>
        
        {/* Fixed layout testimonial card */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-indigo-900/30 backdrop-blur-md p-8 mb-8">
          {/* Quote Icon */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Quote size={24} className="text-white" />
          </div>
          
          {/* Testimonial Text - fixed height with scroll if needed */}
          <div className="mb-8">
            <blockquote className="text-lg md:text-xl font-medium mb-6 max-w-3xl mx-auto text-center text-white/90">
              "{currentTestimonial.quote}"
            </blockquote>
          </div>
          
          {/* Author Info */}
          <div className="flex flex-col items-center mb-4">
            <div className="w-14 h-14 rounded-full overflow-hidden mb-3 border-2 border-indigo-500/50">
              <img 
                src={currentTestimonial.image} 
                alt={currentTestimonial.name} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100%25' height='100%25' fill='%235046e5'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24px' fill='%23fff'%3E" + currentTestimonial.name.charAt(0) + "%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
            <div className="font-semibold text-white">{currentTestimonial.name}</div>
            <div className="text-indigo-300 text-sm">{currentTestimonial.role}, {currentTestimonial.company}</div>
          </div>
          
          {/* Navigation Controls - completely separate from content */}
          <div className="flex items-center justify-center gap-6 mt-6 pt-4 border-t border-indigo-500/20">
            {/* Previous Button */}
            <button 
              onClick={goToPrevious}
              className="p-2 rounded-full bg-indigo-500/20 hover:bg-indigo-500/40 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} className="text-white" />
            </button>
            
            {/* Indicator Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-indigo-500' : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Next Button */}
            <button 
              onClick={goToNext}
              className="p-2 rounded-full bg-indigo-500/20 hover:bg-indigo-500/40 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsTestimonials;