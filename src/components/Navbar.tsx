import { motion } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '#work' },
    { name: 'About', href: '/about-us' },
  ];

  const getLinkProps = (href: string) => {
    if (href.startsWith('/')) {
      return { to: href, as: Link };
    }
    // If on home page, scroll to hash
    if (location.pathname === '/') {
      return { href, as: 'a' };
    }
    // If on other pages, go to home + hash
    return { href: `/${href}`, as: 'a' };
  };

  return (
    <nav className="absolute w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img 
                src="https://jaiveeru.co.in/wp-content/uploads/2023/04/JV-colour-logo.svg" 
                alt="Jai Veeru Creatives" 
                className="h-12 w-auto"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => {
              const { as: Component, ...props } = getLinkProps(link.href);
              const isActive = location.pathname === link.href;
              // @ts-ignore
              return (
                <Component
                  key={link.name}
                  {...props}
                  className={`text-[16px] font-medium transition-colors ${isActive ? 'text-brand-green' : 'text-gray-500 hover:text-brand-green'}`}
                >
                  {link.name}
                </Component>
              );
            })}
            <a 
              href="#contact" 
              className="btn-primary text-sm px-6 py-2.5 group"
            >
              Start a project
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
        >
          <div className="px-4 pt-4 pb-6 space-y-2">
            {links.map((link) => {
              const { as: Component, ...props } = getLinkProps(link.href);
              const isActive = location.pathname === link.href;
              // @ts-ignore
              return (
                <Component
                  key={link.name}
                  {...props}
                  className={`block py-3 text-lg font-medium border-b border-gray-50 ${isActive ? 'text-brand-green' : 'text-gray-900'}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Component>
              );
            })}
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="btn-primary block w-full text-center mt-4 group"
            >
              <span className="flex items-center justify-center">
                Start a project
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
