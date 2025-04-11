import { Users } from 'lucide-react';
import { NeuButton } from '../ui/NeuButton';

const AboutHeroSection = ({ scrollY, mousePosition }) => {
  return (
    <section id="about-hero" className="relative pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-12 md:mb-0">
            <h1 
              className="text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-300 to-white"
              style={{ 
                transform: `translateY(${Math.max(0, 50 - scrollY / 5)}px)`,
                opacity: Math.max(0, 1 - scrollY / 300)
              }}
            >
              About <span className="text-indigo-400">AIB Innovations</span>
            </h1>
            <p 
              className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed"
              style={{ 
                transform: `translateY(${Math.max(0, 70 - scrollY / 4)}px)`,
                opacity: Math.max(0, 1 - scrollY / 400)
              }}
            >
              Founded in 2018, AIB Innovations has been at the forefront of 
              technology integration, combining cutting-edge software development 
              with innovative hardware solutions. Our mission is to create 
              technology that empowers businesses and transforms industries.
            </p>
            <div 
              className="flex flex-col sm:flex-row gap-4"
              style={{ 
                transform: `translateY(${Math.max(0, 90 - scrollY / 3)}px)`,
                opacity: Math.max(0, 1 - scrollY / 500)
              }}
            >
              <NeuButton className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-[0_4px_14px_rgba(79,70,229,0.4)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.6)]">
                Our Projects
              </NeuButton>
              <button className="flex items-center justify-center text-white px-8 py-4 rounded-xl bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 transition-all duration-300">
                <span className="mr-2">Meet The Team</span>
                <Users size={16} />
              </button>
            </div>
          </div>
          <div 
            className="md:w-1/2 relative"
            style={{ 
              transform: `translateY(${Math.max(0, 30 - scrollY / 6)}px)`,
              opacity: Math.max(0, 1 - scrollY / 300)
            }}
          >
            {/* Company Logo/Graphic */}
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 to-purple-600/30 rounded-3xl backdrop-blur-3xl border border-white/20 shadow-2xl transform rotate-6 scale-90"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-3xl backdrop-blur-3xl border border-white/10 shadow-2xl transform -rotate-3 scale-95"></div>
              <div className="relative h-full w-full rounded-3xl overflow-hidden backdrop-blur-md bg-white/5 border border-white/20 shadow-xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <div className="text-4xl font-bold text-white">AIB</div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-32 bg-white/20 rounded-full mx-auto"></div>
                    <div className="h-2 w-24 bg-white/20 rounded-full mx-auto"></div>
                    <div className="h-2 w-40 bg-white/20 rounded-full mx-auto"></div>
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

export default AboutHeroSection;