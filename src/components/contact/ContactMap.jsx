// import { MapPin } from 'lucide-react';

// const ContactMap = () => {
//   return (
//     <section className="py-16 relative">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Visit Our Office</h2>
//           <p className="max-w-2xl mx-auto text-slate-300">Located in the heart of India, Indore - Madhya Pradesh</p>
//         </div>
//       </div>
      
//       <div className="relative">
//         {/* Map Container */}
//         <div className="relative h-96 w-full overflow-hidden">
//           {/* This would be replaced with an actual map component in a real project */}
//           <div className="absolute inset-0 bg-indigo-900/20">
//             {/* Placeholder Map Grid */}
//             <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0iIzY2NiIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuNSI+PHBhdGggZD0iTTQwIDQwVjBIMHY0MHoiLz48cGF0aCBkPSJNMCAwaDQwdjQwSDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-center"></div>
            
//             {/* Roads and Map Elements */}
//             <div className="absolute inset-0">
//               <div className="absolute top-1/2 left-0 right-0 h-8 bg-slate-500/20"></div>
//               <div className="absolute top-0 bottom-0 left-1/3 w-8 bg-slate-500/20"></div>
//               <div className="absolute top-0 bottom-0 right-1/4 w-6 bg-slate-500/20"></div>
//               <div className="absolute bottom-1/3 left-0 right-0 h-6 bg-slate-500/20"></div>
              
//               {/* Building Blocks */}
//               <div className="absolute top-1/4 left-1/3 w-16 h-16 bg-slate-600/30"></div>
//               <div className="absolute top-1/3 left-1/2 w-24 h-24 bg-slate-600/30"></div>
//               <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-slate-600/30"></div>
//               <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-slate-600/30"></div>
//             </div>
            
//             {/* Location Pin */}
//             <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
//               <div className="animate-pulse flex flex-col items-center">
//                 <div className="w-16 h-16 rounded-full bg-indigo-500/30 blur-xl"></div>
//                 <div className="w-12 h-12 -mt-10 mb-1 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
//                   <MapPin size={24} className="text-white" />
//                 </div>
//                 <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
//                   <span className="text-white font-medium">AIB Innovations HQ</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Overlay */}
//         <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-900 to-transparent opacity-70"></div>
//       </div>
//     </section>
//   );
// };

// export default ContactMap;



import { MapPin } from 'lucide-react';

const ContactMap = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Visit Our Office</h2>
          <p className="max-w-2xl mx-auto text-slate-300">Located in the heart of India, Indore - Madhya Pradesh</p>
        </div>
      </div>
      
      <div className="relative rounded-xl overflow-hidden mx-auto max-w-6xl shadow-xl">
        {/* Google Maps iframe with responsive container */}
        <div className="w-full h-96 md:h-[450px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4514.323640534955!2d75.9063948!3d22.710852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e2d14e8cab97%3A0x707117e93cfbf99!2s132%20FB%2C%20Sarovar-Kunj%2C%20Scheme%20no.%2094%2C%20Ring%20road%2C%20INDORE%20-%20M.P.%2C%20Scheme%2094%20Sector%20FB%2C%20Indore%2C%20Madhya%20Pradesh%20452018!5e1!3m2!1sen!2sin!4v1745517659060!5m2!1sen!2sin" 

            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
            title="AIB Innovations Office Location"
          ></iframe>
        </div>
        
        {/* Subtle gradient overlay to match site theme */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-900 to-transparent opacity-30"></div>
        
        {/* Company label overlay */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
          <div className="px-6 py-3 bg-indigo-800/80 backdrop-blur-md rounded-lg border border-indigo-500/30 shadow-xl">
            <div className="flex items-center gap-2">
              <MapPin size={20} className="text-indigo-300" />
              <span className="text-white font-medium">AIB Innovations HQ</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;