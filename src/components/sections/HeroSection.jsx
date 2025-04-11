import { Code } from 'lucide-react';
import { NeuButton } from '../ui/NeuButton';
import { ArrowRight } from 'lucide-react';

const HeroSection = ({ scrollY, mousePosition }) => {
  return (
    <section id="home" className="relative pt-32 pb-20">
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
              Innovating The <br />
              <span className="text-indigo-400">Digital Future</span>
            </h1>
            <p 
              className="text-lg text-slate-300 mb-8 max-w-xl"
              style={{ 
                transform: `translateY(${Math.max(0, 70 - scrollY / 4)}px)`,
                opacity: Math.max(0, 1 - scrollY / 400)
              }}
            >
              We create cutting-edge software and hardware solutions 
              that transform businesses and redefine what's possible in 
              the digital landscape.
            </p>
            <div 
              className="flex flex-col sm:flex-row gap-4"
              style={{ 
                transform: `translateY(${Math.max(0, 90 - scrollY / 3)}px)`,
                opacity: Math.max(0, 1 - scrollY / 500)
              }}
            >
              <NeuButton className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-[0_4px_14px_rgba(79,70,229,0.4)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.6)]">
                Explore Our Work
              </NeuButton>
              <button className="flex items-center justify-center text-white px-8 py-4 rounded-xl bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 transition-all duration-300">
                <span className="mr-2">Contact Us</span>
                <ArrowRight size={16} />
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
            {/* 3D isometric illustration */}
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 to-purple-600/30 rounded-3xl backdrop-blur-3xl border border-white/20 shadow-2xl transform rotate-6 scale-90"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-3xl backdrop-blur-3xl border border-white/10 shadow-2xl transform -rotate-3 scale-95"></div>
              <div className="relative h-full w-full rounded-3xl overflow-hidden backdrop-blur-md bg-white/5 border border-white/20 shadow-xl p-8 flex items-center justify-center">
                {/* Animated circuit board pattern or tech visualization would go here */}
                <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIj48cGF0aCBkPSJNMzYgNDloLTZ2LThNOSA0OXYtNm0yNi0xOGgtNnYtOE01IDI1di02bTYtNmgxMm02IDEyaDEyTTUgMTN2MTJtNi0xOGgxMm0xMiAwaDEybTYgNnYxMk01IDM3djEyIi8+PC9nPjwvZz48L3N2Zz4=')] transform rotate-12 scale-150"></div>
                
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <Code size={40} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Next-Gen Solutions</h3>
                  <p className="text-slate-300">Software & Hardware Integration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;