import { NeuButton } from '../ui/NeuButton';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProjectsCtaSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden backdrop-blur-lg bg-gradient-to-br from-indigo-900/30 to-slate-900/30 border border-white/10 shadow-2xl p-8 md:p-16 text-center">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full bg-purple-600/50 blur-3xl"></div>
            <div className="absolute -left-10 -top-10 w-64 h-64 rounded-full bg-blue-600/30 blur-3xl"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Have a Project in Mind?</h2>
            <p className="max-w-2xl mx-auto text-slate-300 mb-8">
              Let's discuss how our team of experts can bring your vision to life with innovative
              technology solutions tailored to your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <NeuButton className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-[0_4px_14px_rgba(79,70,229,0.4)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.6)]">
                  <span className="mr-2">Start Your Project</span>
                  <ArrowRight size={16} />
                </NeuButton>
              </Link>
              <a href="#projects-grid">
                <button className="flex items-center justify-center text-white px-8 py-4 rounded-xl bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <span>Explore More Projects</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCtaSection;