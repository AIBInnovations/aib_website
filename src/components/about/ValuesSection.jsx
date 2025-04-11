import { Target, Users, Heart, Zap } from 'lucide-react';

// Value Card Component
const ValueCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex items-start p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
      <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mr-4">
        <Icon size={20} className="text-white" />
      </div>
      <div>
        <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
        <p className="text-slate-300 text-sm">{description}</p>
      </div>
    </div>
  );
};

const ValuesSection = () => {
  // Company values
  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We constantly push the boundaries of what's possible, embracing new technologies and approaches to solve complex problems."
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "We don't just build products for clients, we build relationships. Your success is our success."
    },
    {
      icon: Heart,
      title: "Ethical Technology",
      description: "We believe in creating technology that improves lives while respecting privacy and security."
    },
    {
      icon: Zap,
      title: "Excellence in Execution",
      description: "From concept to deployment, we maintain the highest standards in every project we undertake."
    }
  ];

  return (
    <section id="values" className="py-20 bg-gradient-to-b from-transparent to-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Our Core Values</h2>
          <p className="max-w-2xl mx-auto text-slate-300">The principles that guide our work and define our culture.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <ValueCard key={index} {...value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;