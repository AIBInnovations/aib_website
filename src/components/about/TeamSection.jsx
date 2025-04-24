import { GlassCard } from '../ui/GlassCard';
import akshat from "../../assets/akshat.jpg";
import ishan from "../../assets/ishan.jpg";
import bhavya from "../../assets/bhavya.jpg";

// Team Member Card Component
const TeamMemberCard = ({ image, name, role, quote }) => {
  return (
    <div className="w-full transition-all duration-500 transform hover:scale-105">
      <GlassCard className="h-full flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-indigo-500/50">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <h3 className="text-xl font-bold mb-1 text-white">{name}</h3>
        <p className="text-indigo-400 mb-3 text-sm">{role}</p>
        <p className="text-slate-300 text-sm italic">"{quote}"</p>
        <div className="mt-4 flex space-x-3">
          {['linkedin', 'twitter', 'github'].map(social => (
            <a 
              key={social}
              href={`#${social}`}
              className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <span className="sr-only">{social}</span>
              {/* Social icon would go here */}
            </a>
          ))}
        </div>
      </GlassCard>
    </div>
  );
};

const TeamSection = ({ scrollY }) => {
  // Team members data
  const teamMembers = [
    {
      name: "Akshat Jain",
      role: "CEO & Founder",
      quote: "Innovation distinguishes between a leader and a follower.",
      image: akshat
    },
    {
      name: "Ishan Jain",
      role: "CTO",
      quote: "The best way to predict the future is to invent it.",
      image: ishan
    },
    {
      name: "Bhavya Kothari",
      role: "Lead Developer",
      quote: "Code is like humor. When you have to explain it, it's bad.",
      image: bhavya
    }
  ];

  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Our Leadership Team</h2>
          <p className="max-w-2xl mx-auto text-slate-300">Meet the innovative minds behind AIB Innovations, driving our vision and technical excellence.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              style={{ 
                transform: `translateY(${Math.max(0, 80 - (scrollY - 600) / 5)}px)`,
                opacity: Math.min(1, (scrollY - 600) / 400),
                transitionDelay: `${index * 100}ms`
              }}
              className="transition-all duration-700"
            >
              <TeamMemberCard {...member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;