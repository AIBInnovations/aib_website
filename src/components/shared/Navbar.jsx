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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Handle navigation to section on another page
  useEffect(() => {
    // Check if there's a hash in the URL after page load/navigation
    if (location.hash) {
      // Get the element with that id
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        // Wait a bit for the page to fully render, then scroll
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      // If there's no hash in the URL, scroll to top
      window.scrollTo(0, 0);
    }
  }, [location]);

  // Function to handle navigation and scrolling
  // const handleNavigation = (path) => {
  //   // For Services section, we don't want to scroll to top
  //   // as it uses a hash link to navigate to a specific section
  //   if (path !== '/#services') {
  //     window.scrollTo(0, 0);
  //   }
  // };

// Function to handle navigation and scrolling
const handleNavigation = (path) => {
  // Check if this is a hash link to a section
  if (path.includes('#')) {
    const [pagePath, sectionId] = path.split('#');
    const targetPage = pagePath || '/';
    
    // If we're already on the target page, just scroll to the section
    if (location.pathname === targetPage) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // We need to navigate to the page first, then scroll to the section
      // The useEffect hook should handle the scrolling after navigation
    }
  } else {
    // For regular page navigation, scroll to top
    window.scrollTo(0, 0);
  }
};

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/#services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
    { name: 'Testimonials', path: '/#testimonials' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || isMobileMenuOpen ? 'backdrop-blur-md bg-slate-900/80 border-b border-white/10 py-2' : 'bg-transparent py-3 md:py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center"
            onClick={() => handleNavigation('/')}
          >
            <div className="mr-2 w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg md:text-xl">AIB</div>
            <span className="font-bold text-lg md:text-xl tracking-tight">AIB Innovations</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              // Determine if this is an internal anchor link (contains #)
              const isHashLink = item.path.includes('#');
              
              // Current path without hash
              const currentPathWithoutHash = location.pathname;
              
              // For hash links to sections on the same page or another page
              if (isHashLink) {
                const [pagePath, sectionId] = item.path.split('#');
                const targetPage = pagePath || '/';
                const isCurrentPage = currentPathWithoutHash === targetPage;
                
                return (
                  <Link 
                    key={item.name} 
                    to={item.path}
                    className={`text-sm hover:text-white transition-colors ${
                      isCurrentPage ? 'text-white' : 'text-slate-300'
                    }`}
                    onClick={() => handleNavigation(item.path)}
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
                  onClick={() => handleNavigation(item.path)}
                >
                  {item.name}
                </Link>
              );
            })}
            <Link 
              to="/contact"
              onClick={() => handleNavigation('/contact')}
            >
              <NeuButton className="px-4 py-2 text-sm">Book an Appointment</NeuButton>
            </Link>
          </nav>
          
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-white/5" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
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
                
                if (isHashLink) {
                  return (
                    <Link 
                      key={item.name} 
                      to={item.path}
                      className="text-sm text-slate-300 hover:text-white transition-colors py-2"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        handleNavigation(item.path);
                      }}
                    >
                      {item.name}
                    </Link>
                  );
                }
                
                return (
                  <Link 
                    key={item.name} 
                    to={item.path}
                    className={`text-sm hover:text-white transition-colors py-2 ${
                      location.pathname === item.path ? 'text-white' : 'text-slate-300'
                    }`}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      handleNavigation(item.path);
                    }}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="pt-2">
                <Link 
                  to="/contact" 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleNavigation('/contact');
                  }}
                >
                  <NeuButton className="w-full justify-center py-3">Book an Appointment</NeuButton>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;