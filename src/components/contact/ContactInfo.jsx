import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

// Contact Info Item Component
const ContactInfoItem = ({ icon: Icon, title, details, link, linkLabel }) => (
  <div className="flex items-start mb-8">
    <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mr-4">
      <Icon size={20} className="text-white" />
    </div>
    <div>
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p className="text-slate-300 mb-1">{details}</p>
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
            link="https://maps.google.com"
            linkLabel="View on map"
          />
          
          <ContactInfoItem 
            icon={Phone}
            title="Phone Number"
            details="+919926446622"
            link="tel:+919926446622"
            linkLabel="Call us"
          />
          
          <ContactInfoItem 
            icon={Mail}
            title="Email"
            details="aibinnovations@gmail.com"
            link="mailto:aibinnovations@gmail.com"
            linkLabel="Send an email"
          />
          
          <ContactInfoItem 
            icon={Clock}
            title="Operating Hours"
            details="Monday - Friday: 9AM - 6PM (IST)"
          />
          
          <div className="mt-8 pt-8 border-t border-white/10">
            <h3 className="font-semibold text-lg mb-4">Follow us on</h3>
            <div className="flex space-x-4">
              {['twitter', 'linkedin', 'facebook', 'instagram'].map(social => (
                <a 
                  key={social}
                  href={`#${social}`}
                  className="w-10 h-10 rounded-full border border-indigo-500/30 flex items-center justify-center hover:bg-indigo-500/20 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  {/* Social icon would go here */}
                </a>
              ))}
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
  );
};

export default ContactInfo;