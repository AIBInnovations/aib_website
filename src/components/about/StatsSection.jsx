import { Briefcase, Users, Award, Clock } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    { number: "30+", label: "Projects Completed", icon: Briefcase },
    { number: "10+", label: "Team Members", icon: Users },
    { number: "4+", label: "Years Serving", icon: Award },
    { number: "3", label: "Years of Innovation", icon: Clock }
  ];

  return (
    <section id="stats" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                <stat.icon size={32} className="text-white" />
              </div>
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;