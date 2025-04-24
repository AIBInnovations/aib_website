// Mobile Timeline Item Component
const MobileTimelineItem = ({ year, title, description }) => {
  return (
    <div className="relative border-l-2 border-indigo-500/30 pl-6 mb-8 pb-2">
      {/* Timeline dot */}
      <div className="absolute top-0 left-0 w-4 h-4 rounded-full bg-indigo-500 -translate-x-1/2"></div>
      
      {/* Content */}
      <span className="text-indigo-400 font-bold block mb-1">{year}</span>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-slate-300 text-sm">{description}</p>
    </div>
  );
};

// Desktop Timeline Item Component
const DesktopTimelineItem = ({ year, title, description, isLeft }) => {
  return (
    <div className={`relative flex ${isLeft ? 'flex-row' : 'flex-row-reverse'} items-center w-full mb-12`}>
      {/* Line */}
      <div className="absolute left-1/2 top-8 bottom-0 w-0.5 bg-indigo-500/30 -translate-x-1/2 z-0"></div>
      
      {/* Content */}
      <div className={`w-5/12 ${isLeft ? 'text-right pr-12' : 'text-left pl-12'}`}>
        <span className="text-indigo-400 font-bold block mb-1">{year}</span>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-slate-300 text-sm">{description}</p>
      </div>
      
      {/* Center dot */}
      <div className="w-4 h-4 rounded-full bg-indigo-500 z-10 mx-4"></div>
      
      {/* Empty space for the other side */}
      <div className="w-5/12"></div>
    </div>
  );
};

const TimelineSection = () => {
  // Company timeline
  const timeline = [
    {
      year: "2022",
      title: "Company Founded",
      description: "AIB Innovations was established with a mission to bridge the gap between advanced software and hardware solutions for emerging tech challenges."
    },
    {
      year: "2023",
      title: "First Major Client",
      description: "Secured partnership with a Fortune 500 company to develop custom IoT solutions, marking our breakthrough into enterprise-level projects."
    },
    {
      year: "2024",
      title: "Expansion to AI Solutions",
      description: "Launched our specialized AI division, focusing on machine learning integration and developing cutting-edge predictive analytics platforms."
    },
    {
      year: "2024",
      title: "New Office Opening",
      description: "Expanded operations with a new headquarters in Indore's tech corridor, providing space for our growing team and innovation lab."
    },
    {
      year: "2025",
      title: "International Partnerships",
      description: "Formed strategic partnerships with international tech firms to collaborate on cross-border technology initiatives and expand our global presence."
    }
  ];

  return (
    <section id="timeline" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Our Journey</h2>
          <p className="max-w-2xl mx-auto text-slate-300">The key milestones that have defined our growth and success.</p>
        </div>
        
        {/* Mobile Timeline (vertical) */}
        <div className="md:hidden relative mx-auto max-w-md">
          {timeline.map((item, index) => (
            <MobileTimelineItem 
              key={index} 
              {...item} 
            />
          ))}
        </div>
        
        {/* Desktop Timeline (centered with alternating sides) */}
        <div className="hidden md:block relative mx-auto max-w-4xl py-8">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-indigo-500/30 -translate-x-1/2"></div>
          
          {/* Timeline items */}
          {timeline.map((item, index) => (
            <DesktopTimelineItem 
              key={index} 
              {...item} 
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;