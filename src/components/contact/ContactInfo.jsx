// import { MapPin, Phone, Mail, Clock } from 'lucide-react';
// import { GlassCard } from '../ui/GlassCard';

// // Contact Info Item Component
// const ContactInfoItem = ({ icon: Icon, title, details, link, linkLabel }) => (
//   <div className="flex items-start mb-8">
//     <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mr-4">
//       <Icon size={20} className="text-white" />
//     </div>
//     <div>
//       <h3 className="font-semibold text-lg mb-1">{title}</h3>
//       <p className="text-slate-300 mb-1">{details}</p>
//       {link && (
//         <a 
//           href={link} 
//           className="text-indigo-400 hover:text-indigo-300 transition-colors inline-flex items-center gap-1"
//         >
//           {linkLabel}
//         </a>
//       )}
//     </div>
//   </div>
// );

// const ContactInfo = () => {
//   return (
//     <div className="h-full">
//       <GlassCard className="h-full relative overflow-hidden">
//         <div className="absolute inset-0 opacity-30">
//           <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-indigo-600/30 blur-3xl"></div>
//         </div>
        
//         <div className="relative z-10">
//           <h2 className="text-2xl md:text-3xl font-bold mb-8">Contact Information</h2>
          
//           <ContactInfoItem 
//             icon={MapPin}
//             title="Office Location"
//             details="132 FB Scheme no. 94, Ring road, Indore, MP, India"
//             link="https://maps.app.goo.gl/rLT2AuRBipBRctoZ8"
//             linkLabel="View on map"
//           />
          
//           <ContactInfoItem 
//             icon={Phone}
//             title="Phone Number"
//             details="+919926446622"
//             link="tel:+919926446622"
//             linkLabel="Call us"
//           />
          
//           <ContactInfoItem 
//             icon={Mail}
//             title="Email"
//             details="aibinnovations@gmail.com"
//             link="mailto:aibinnovations@gmail.com"
//             linkLabel="Send an email"
//           />
          
//           <ContactInfoItem 
//             icon={Clock}
//             title="Operating Hours"
//             details="Monday - Friday: 9AM - 6PM (IST)"
//           />
          
//           <div className="mt-8 pt-8 border-t border-white/10">
//             <h3 className="font-semibold text-lg mb-4">Follow us on</h3>
//             <div className="flex space-x-4">
//               {['twitter', 'linkedin', 'facebook', 'instagram'].map(social => (
//                 <a 
//                   key={social}
//                   href={`#${social}`}
//                   className="w-10 h-10 rounded-full border border-indigo-500/30 flex items-center justify-center hover:bg-indigo-500/20 transition-colors"
//                 >
//                   <span className="sr-only">{social}</span>
//                   {/* Social icon would go here */}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </GlassCard>
//     </div>
//   );
// };

// export default ContactInfo;

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Copy, Check } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

// Contact Info Item Component - simple version
const ContactInfoItem = ({ icon: Icon, title, details }) => (
  <div className="flex items-start mb-8">
    <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mr-4">
      <Icon size={20} className="text-white" />
    </div>
    <div>
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p className="text-slate-300 mb-1">{details}</p>
    </div>
  </div>
);

// Email Section with JavaScript and Copy functionality
const EmailSection = () => {
  const [copied, setCopied] = useState(false);
  const email = "aibinnovations@gmail.com";
  
  const handleEmailClick = (e) => {
    e.preventDefault();
    
    // Try multiple methods to open email client
    try {
      // Method 1: window.open
      window.open(`mailto:${email}`);
      
      // Method 2: direct location change (fallback)
      setTimeout(() => {
        window.location.href = `mailto:${email}`;
      }, 100);
    } catch (error) {
      console.error("Error opening email client:", error);
      alert("Please use the copy button and paste the email into your mail client.");
    }
  };
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  
  return (
    <div className="flex items-start mb-8">
      <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mr-4">
        <Mail size={20} className="text-white" />
      </div>
      
      <div>
        <h3 className="font-semibold text-lg mb-1">Email</h3>
        <p className="text-slate-300 mb-1">{email}</p>
        
        <div className="mt-2 flex flex-wrap gap-2">
          {/* JavaScript email handler button */}
          <button 
            onClick={handleEmailClick}
            className="py-2 px-4 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors flex items-center gap-1"
          >
            <Mail size={16} />
            <span>Email Us</span>
          </button>
          
          {/* Copy Email Button */}
          <button 
            onClick={copyToClipboard}
            className="py-2 px-4 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors flex items-center gap-1"
          >
            {copied ? (
              <>
                <Check size={16} />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy size={16} />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const ContactInfo = () => {
  return (
    <div className="h-full">
      <GlassCard className="h-full relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-indigo-600/30 blur-3xl"></div>
        </div>
        
        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Contact Information</h2>
          
          <ContactInfoItem 
            icon={MapPin}
            title="Office Location"
            details="132 FB Scheme no. 94, Ring road, Indore, MP, India"
          />
          
          <ContactInfoItem 
            icon={Phone}
            title="Phone Number"
            details="+919926446622"
          />
          
          <EmailSection />
          
          <ContactInfoItem 
            icon={Clock}
            title="Operating Hours"
            details="Monday - Friday: 9AM - 6PM (IST)"
          />
          
          
        </div>
      </GlassCard>
    </div>
  );
};

export default ContactInfo;