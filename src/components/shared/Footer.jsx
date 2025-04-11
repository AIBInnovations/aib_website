import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10 backdrop-blur-md bg-black/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="flex items-center mb-6">
              <div className="mr-2 w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">AIB</div>
              <span className="font-bold text-xl tracking-tight">AIB Innovations</span>
            </Link>
            <p className="text-slate-400 mb-6">
              Innovation at the intersection of software and hardware.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'facebook', 'instagram', 'linkedin'].map(social => (
                <a 
                  key={social}
                  href={`#${social}`}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  {/* Social icon would go here */}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-4">
              {['Software Development', 'Hardware Projects', 'Web Development', 'Cybersecurity', 'AI & ML Solutions', 'Cloud Services'].map(service => (
                <li key={service}>
                  <Link to="/#services" className="text-slate-400 hover:text-white transition-colors">{service}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-slate-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/#services" className="text-slate-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/#projects" className="text-slate-400 hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6">Get In Touch</h3>
            <p className="text-slate-400 mb-4">Have a project in mind? Let's talk about how we can help.</p>
            <Link to="/contact" className="text-indigo-400 hover:text-indigo-300 transition-colors">Contact Us</Link>
            <p className="text-slate-400 mt-4">132 FB Scheme no. 94, Ring road<br />Indore, MP, India</p>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t border-white/10 text-center text-slate-500">
          <p>© 2025 AIB Innovations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;