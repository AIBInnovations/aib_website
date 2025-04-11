import { GlassCard } from '../ui/GlassCard';

// Team Member Card Component
const TeamMemberCard = ({ image, name, role, bio }) => {
  return (
    <div className="w-full transition-all duration-500 transform hover:scale-105">
      <GlassCard className="h-full flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-indigo-500/50">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <h3 className="text-xl font-bold mb-1 text-white">{name}</h3>
        <p className="text-indigo-400 mb-3 text-sm">{role}</p>
        <p className="text-slate-300 text-sm">{bio}</p>
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
      name: "Alexandra Patel",
      role: "CEO & Founder",
      bio: "Tech visionary with 15+ years experience in software and hardware integration. Previously led innovation at TechGiant.",
      image: "/api/placeholder/100/100" // Using placeholder as mentioned in instructions
    },
    {
      name: "Marcus Chen",
      role: "CTO",
      bio: "Former lead engineer at SpaceX with expertise in AI and robotics. Holds 12 patents in embedded systems.",
      image: "/api/placeholder/100/100"
    },
    {
      name: "Sophia Rodriguez",
      role: "Lead Developer",
      bio: "Full-stack developer specialized in high-performance applications. Open source contributor and tech speaker.",
      image: "/api/placeholder/100/100"
    },
    {
      name: "David Kim",
      role: "Hardware Engineer",
      bio: "Electronics specialist with background in IoT and consumer electronics. Expert in PCB design and prototyping.",
      image: "/api/placeholder/100/100"
    }
  ];

  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Our Leadership Team</h2>
          <p className="max-w-2xl mx-auto text-slate-300">Meet the innovative minds behind AIB Innovations, driving our vision and technical excellence.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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