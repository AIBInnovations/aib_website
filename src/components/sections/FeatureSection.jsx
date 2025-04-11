import { Layers } from 'lucide-react';
import { NeuButton } from '../ui/NeuButton';

const FeatureSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden backdrop-blur-lg bg-gradient-to-br from-indigo-900/30 to-slate-900/30 border border-white/10 shadow-2xl">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-purple-600/50 blur-3xl"></div>
            <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-blue-600/30 blur-3xl"></div>
          </div>
          
          <div className="relative p-8 md:p-16 z-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 mb-12 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Bringing Your Vision <br /><span className="text-indigo-400">To Reality</span></h2>
                <p className="text-slate-300 mb-8 max-w-xl">
                  Our team combines technical expertise with creative problem-solving 
                  to deliver solutions that exceed expectations. From concept to 
                  deployment, we're with you every step of the way.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "End-to-end development process",
                    "Cutting-edge technology stack",
                    "Experienced development team",
                    "Client-focused approach"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <NeuButton className="bg-white text-indigo-800">Learn Our Process</NeuButton>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-full max-w-sm aspect-square">
                  {/* 3D Cube animation would go here */}
                  <div className="w-full h-full rounded-2xl bg-white/5 backdrop-blur-md border border-white/20 shadow-xl p-6 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                      <Layers size={32} className="text-white" />
                    </div>
                  </div>
                  
                  {/* Stats cards */}
                  <div className="absolute -top-6 -left-6 p-4 backdrop-blur-md bg-white/10 rounded-lg border border-white/20 shadow-xl">
                    <div className="text-2xl font-bold text-white">100+</div>
                    <div className="text-xs text-slate-300">Projects Completed</div>
                  </div>
                  
                  <div className="absolute -bottom-6 -right-6 p-4 backdrop-blur-md bg-white/10 rounded-lg border border-white/20 shadow-xl">
                    <div className="text-2xl font-bold text-white">95%</div>
                    <div className="text-xs text-slate-300">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;