import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NeuButton } from '../ui/NeuButton';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/#services' },
    { name: 'Projects', path: '/#projects' },
    { name: 'Contact', path: '/#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'backdrop-blur-md bg-slate-900/80 border-b border-white/10 py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <div className="mr-2 w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">AIB</div>
            <span className="font-bold text-xl tracking-tight">AIB Innovations</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              // Determine if this is an internal anchor link (contains #)
              const isHashLink = item.path.includes('#');
              
              // For pure hash links on the same page
              if (isHashLink && !item.path.startsWith('/')) {
                return (
                  <a 
                    key={item.name} 
                    href={item.path}
                    className={`text-sm hover:text-white transition-colors ${
                      location.pathname === '/' ? 'text-slate-300' : 'text-slate-300'
                    }`}
                  >
                    {item.name}
                  </a>
                );
              }
              
              // For hash links to sections on another page
              if (isHashLink) {
                return (
                  <Link 
                    key={item.name} 
                    to={item.path}
                    className={`text-sm hover:text-white transition-colors ${
                      location.pathname === item.path.split('#')[0] ? 'text-white' : 'text-slate-300'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              }
              
              // For regular page links
              return (
                <Link 
                  key={item.name} 
                  to={item.path}
                  className={`text-sm hover:text-white transition-colors ${
                    location.pathname === item.path ? 'text-white' : 'text-slate-300'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <NeuButton className="px-5 py-2 text-sm">Get Started</NeuButton>
          </nav>
          
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-white/5" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-white/10 animate-fadeIn">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => {
                // Similar logic as above for mobile menu
                const isHashLink = item.path.includes('#');
                
                if (isHashLink && !item.path.startsWith('/')) {
                  return (
                    <a 
                      key={item.name} 
                      href={item.path}
                      className="text-sm text-slate-300 hover:text-white transition-colors py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  );
                }
                
                return (
                  <Link 
                    key={item.name} 
                    to={item.path}
                    className={`text-sm hover:text-white transition-colors py-2 ${
                      location.pathname === item.path ? 'text-white' : 'text-slate-300'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <NeuButton className="mt-2 w-full justify-center">Get Started</NeuButton>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;