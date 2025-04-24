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
          
//         </div>
//       </GlassCard>
//     </div>
//   );
// };

// export default ContactInfo;



import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Copy, Check } from 'lucide-react';

// Copy Button Component
const CopyButton = ({ textToCopy, ariaLabel }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <button 
      onClick={handleCopy}
      aria-label={ariaLabel}
      className="ml-2 text-indigo-400 hover:text-indigo-300 transition-colors"
    >
      {copied ? <Check size={16} /> : <Copy size={16} />}
    </button>
  );
};

// Contact Info Item Component
const ContactInfoItem = ({ icon: Icon, title, details, link, linkLabel, copyText }) => (
  <div className="flex items-start mb-8">
    <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mr-4">
      <Icon size={20} className="text-white" />
    </div>
    <div className="flex-grow">
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <div className="flex items-center">
        <p className="text-slate-300 mb-1 mr-2">{details}</p>
        {copyText && (
          <CopyButton 
            textToCopy={copyText} 
            ariaLabel={`Copy ${title}`}
          />
        )}
      </div>
      {link && (
        <a 
          href={link} 
          className="text-indigo-400 hover:text-indigo-300 transition-colors inline-flex items-center gap-1"
        >
          {linkLabel}
        </a>
      )}
    </div>
  </div>
);

const ContactInfo = () => {
  const phoneNumber = "+919926446622";
  const emailAddress = "aibinnovations@gmail.com";

  // Email composition parameters
  const emailParams = {
    to: emailAddress,
    subject: 'Inquiry from Website',
    body: 'Hello AI Innovations Team,\n\nI am writing to...'
  };

  // Construct Gmail compose URL
  const composeEmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailParams.to)}&su=${encodeURIComponent(emailParams.subject)}&body=${encodeURIComponent(emailParams.body)}`;

  return (
    <div className="h-full">
      <div className="h-full relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-indigo-600/30 blur-3xl"></div>
        </div>
        
        <div className="relative z-10 p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Contact Information</h2>
          
          <ContactInfoItem 
            icon={MapPin}
            title="Office Location"
            details="132 FB Scheme no. 94, Ring road, Indore, MP, India"
            link="https://maps.app.goo.gl/rLT2AuRBipBRctoZ8"
            linkLabel="View on map"
          />
          
          <ContactInfoItem 
            icon={Phone}
            title="Phone Number"
            details={phoneNumber}
            link={`tel:${phoneNumber}`}
            linkLabel="Call us"
            copyText={phoneNumber}
          />
          
          <ContactInfoItem 
            icon={Mail}
            title="Email"
            details={emailAddress}
            link={composeEmailUrl}
            linkLabel="Send an email"
            copyText={emailAddress}
          />
          
          <ContactInfoItem 
            icon={Clock}
            title="Operating Hours"
            details="Monday - Friday: 9AM - 6PM (IST)"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;