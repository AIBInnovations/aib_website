import { Target, Star } from 'lucide-react';

const MissionVisionSection = () => {
  return (
    <section id="mission-vision" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden backdrop-blur-lg bg-gradient-to-br from-indigo-900/30 to-slate-900/30 border border-white/10 shadow-2xl">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-purple-600/50 blur-3xl"></div>
            <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-blue-600/30 blur-3xl"></div>
          </div>
          
          <div className="relative p-8 md:p-16 z-10">
            <div className="flex flex-col md:flex-row items-start gap-12">
              <div className="md:w-1/2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mr-4">
                    <Target size={24} className="text-white" />
                  </div>
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  To empower businesses with transformative technology solutions that 
                  bridge the gap between software and hardware, enabling innovation 
                  that drives success in a rapidly evolving digital landscape.
                </p>
              </div>
              
              <div className="md:w-1/2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mr-4">
                    <Star size={24} className="text-white" />
                  </div>
                  <h2 className="text-3xl font-bold">Our Vision</h2>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  To be the global leader in integrated technology solutions, recognized 
                  for our innovation, technical excellence, and commitment to creating 
                  technology that positively impacts businesses and society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;