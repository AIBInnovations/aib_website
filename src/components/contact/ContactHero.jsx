// import { MessageSquare } from 'lucide-react';
// import { NeuButton } from '../ui/NeuButton';

// const ContactHero = ({ scrollY, mousePosition }) => {
//   return (
//     <section id="contact-hero" className="relative pt-20 pb-0 md:pt-32 md:pb-20 overflow-hidden min-h-screen flex flex-col justify-center">
//       <div className="container mx-auto px-4 md:px-6">
//         {/* Mobile and tablet layout */}
//         <div className="md:hidden flex flex-col items-center">
//           {/* Text content - centered */}
//           <div className="w-full text-center">
//             <h1 className="text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-300 to-white">
//               Get In <span className="text-indigo-400">Touch</span>
//             </h1>
//             <p className="text-base text-slate-300 mb-8 max-w-md mx-auto leading-relaxed">
//               Have a project in mind or questions about our services? 
//               Our team is ready to listen and provide the solutions you need.
//               Reach out today and let's start the conversation.
//             </p>
//             <div className="flex flex-col gap-4 w-full max-w-md mx-auto mb-12">
//               <NeuButton className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-[0_4px_14px_rgba(79,70,229,0.4)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.6)]">
//                 <a href="#contact-form">Send Message</a>
//               </NeuButton>
//             </div>
//           </div>
          
//           {/* 3D isometric illustration */}
//           <div className="w-full">
//             <div className="relative w-full max-w-xs mx-auto aspect-square">
//               <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 to-purple-600/30 rounded-3xl backdrop-blur-3xl border border-white/20 shadow-2xl transform rotate-6 scale-90"></div>
//               <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-3xl backdrop-blur-3xl border border-white/10 shadow-2xl transform -rotate-3 scale-95"></div>
//               <div className="relative h-full w-full rounded-3xl overflow-hidden backdrop-blur-md bg-white/5 border border-white/20 shadow-xl p-6 flex items-center justify-center">
//                 <div className="relative z-10 text-center">
//                   <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 mx-auto mb-4 flex items-center justify-center shadow-lg">
//                     <MessageSquare size={32} className="text-white" />
//                   </div>
//                   <h3 className="text-xl font-bold mb-2">Let's Connect</h3>
//                   <p className="text-sm text-slate-300">We're here to help with your next big idea</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Desktop layout */}
//         <div className="hidden md:flex md:flex-row md:items-center">
//           <div className="md:w-1/2 md:pr-12 text-left">
//             <h1 
//               className="text-5xl lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-300 to-white"
//               style={{ 
//                 transform: `translateY(${Math.max(0, 50 - scrollY / 5)}px)`,
//                 opacity: Math.max(0, 1 - scrollY / 300)
//               }}
//             >
//               Get In <span className="text-indigo-400">Touch</span>
//             </h1>
//             <p 
//               className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed"
//               style={{ 
//                 transform: `translateY(${Math.max(0, 70 - scrollY / 4)}px)`,
//                 opacity: Math.max(0, 1 - scrollY / 400)
//               }}
//             >
//               Have a project in mind or questions about our services? 
//               Our team is ready to listen and provide the solutions you need.
//               Reach out today and let's start the conversation.
//             </p>
//             <div 
//               className="flex flex-row gap-4"
//               style={{ 
//                 transform: `translateY(${Math.max(0, 90 - scrollY / 3)}px)`,
//                 opacity: Math.max(0, 1 - scrollY / 500)
//               }}
//             >
//               <NeuButton className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-[0_4px_14px_rgba(79,70,229,0.4)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.6)]">
//                 <a href="#contact-form">Send Message</a>
//               </NeuButton>
//             </div>
//           </div>
//           <div 
//             className="md:w-1/2 relative"
//             style={{ 
//               transform: `translateY(${Math.max(0, 30 - scrollY / 6)}px)`,
//               opacity: Math.max(0, 1 - scrollY / 300)
//             }}
//           >
//             {/* 3D isometric illustration */}
//             <div className="relative w-full max-w-md mx-auto aspect-square">
//               <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 to-purple-600/30 rounded-3xl backdrop-blur-3xl border border-white/20 shadow-2xl transform rotate-6 scale-90"></div>
//               <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-3xl backdrop-blur-3xl border border-white/10 shadow-2xl transform -rotate-3 scale-95"></div>
//               <div className="relative h-full w-full rounded-3xl overflow-hidden backdrop-blur-md bg-white/5 border border-white/20 shadow-xl p-8 flex items-center justify-center">
//                 <div className="relative z-10 text-center">
//                   <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 mx-auto mb-6 flex items-center justify-center shadow-lg">
//                     <MessageSquare size={40} className="text-white" />
//                   </div>
//                   <h3 className="text-2xl font-bold mb-2">Let's Connect</h3>
//                   <p className="text-slate-300">We're here to help with your next big idea</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Floating shapes - only visible on desktop */}
//       <div className="hidden md:block">
//         <div 
//           className="absolute top-1/3 right-10 w-16 h-16 rounded-lg bg-indigo-600/20 backdrop-blur-xl border border-white/10 rotate-12"
//           style={{ 
//             transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px) rotate(12deg)`,
//             transition: 'transform 0.3s ease-out' 
//           }}
//         ></div>
//         <div 
//           className="absolute bottom-1/3 left-10 w-20 h-20 rounded-lg bg-purple-600/20 backdrop-blur-xl border border-white/10 -rotate-12"
//           style={{ 
//             transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px) rotate(-12deg)`,
//             transition: 'transform 0.3s ease-out' 
//           }}
//         ></div>
//       </div>
//     </section>
//   );
// };

// export default ContactHero;



import { MessageSquare } from 'lucide-react';
import { NeuButton } from '../ui/NeuButton';

const ContactHero = ({ scrollY, mousePosition }) => {
  return (
    <section id="contact-hero" className="relative pt-20 pb-20 md:pt-32 md:pb-20">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Mobile and tablet layout */}
        <div className="md:hidden flex flex-col items-center">
          {/* Text content - centered */}
          <div className="w-full text-center">
            <h1 className="text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-300 to-white">
              Get In <span className="text-indigo-400">Touch</span>
            </h1>
            <p className="text-base text-slate-300 mb-8 max-w-md mx-auto leading-relaxed">
              Have a project in mind or questions about our services? 
              Our team is ready to listen and provide the solutions you need.
              Reach out today and let's start the conversation.
            </p>
            <div className="flex flex-col gap-4 w-full max-w-md mx-auto mb-12">
              <NeuButton className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-[0_4px_14px_rgba(79,70,229,0.4)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.6)]">
                <a href="#contact-form">Send Message</a>
              </NeuButton>
            </div>
          </div>
          
          {/* 3D isometric illustration with fixed height */}
          <div className="w-full mb-8">
            <div className="relative w-full max-w-xs mx-auto h-64">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 to-purple-600/30 rounded-3xl backdrop-blur-3xl border border-white/20 shadow-2xl transform rotate-6 scale-90"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-3xl backdrop-blur-3xl border border-white/10 shadow-2xl transform -rotate-3 scale-95"></div>
              <div className="relative h-full w-full rounded-3xl overflow-hidden backdrop-blur-md bg-white/5 border border-white/20 shadow-xl p-6 flex items-center justify-center">
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <MessageSquare size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Let's Connect</h3>
                  <p className="text-sm text-slate-300">We're here to help with your next big idea</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Desktop layout */}
        <div className="hidden md:flex md:flex-row md:items-center">
          <div className="md:w-1/2 md:pr-12 text-left">
            <h1 
              className="text-5xl lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-300 to-white"
              style={{ 
                transform: `translateY(${Math.max(0, 50 - scrollY / 5)}px)`,
                opacity: Math.max(0, 1 - scrollY / 300)
              }}
            >
              Get In <span className="text-indigo-400">Touch</span>
            </h1>
            <p 
              className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed"
              style={{ 
                transform: `translateY(${Math.max(0, 70 - scrollY / 4)}px)`,
                opacity: Math.max(0, 1 - scrollY / 400)
              }}
            >
              Have a project in mind or questions about our services? 
              Our team is ready to listen and provide the solutions you need.
              Reach out today and let's start the conversation.
            </p>
            <div 
              className="flex flex-row gap-4"
              style={{ 
                transform: `translateY(${Math.max(0, 90 - scrollY / 3)}px)`,
                opacity: Math.max(0, 1 - scrollY / 500)
              }}
            >
              <NeuButton className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-[0_4px_14px_rgba(79,70,229,0.4)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.6)]">
                <a href="#contact-form">Send Message</a>
              </NeuButton>
            </div>
          </div>
          <div 
            className="md:w-1/2 relative"
            style={{ 
              transform: `translateY(${Math.max(0, 30 - scrollY / 6)}px)`,
              opacity: Math.max(0, 1 - scrollY / 300)
            }}
          >
            {/* 3D isometric illustration with fixed height */}
            <div className="relative w-full max-w-md mx-auto h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 to-purple-600/30 rounded-3xl backdrop-blur-3xl border border-white/20 shadow-2xl transform rotate-6 scale-90"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-3xl backdrop-blur-3xl border border-white/10 shadow-2xl transform -rotate-3 scale-95"></div>
              <div className="relative h-full w-full rounded-3xl overflow-hidden backdrop-blur-md bg-white/5 border border-white/20 shadow-xl p-8 flex items-center justify-center">
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <MessageSquare size={40} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Let's Connect</h3>
                  <p className="text-slate-300">We're here to help with your next big idea</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;