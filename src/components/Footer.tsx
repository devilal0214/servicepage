import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <span className="font-display font-bold text-xl tracking-tight text-gray-900 mb-6 block">Jai Veeru Creatives</span>
            <p className="text-gray-500 max-w-sm mb-8 font-light leading-relaxed">
              A Brand & Communications Studio working with purpose-led organisations. 
              Clarity before communication.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-6">Studio</h3>
            <ul className="space-y-4">
              <li><a href="#philosophy" className="text-gray-500 hover:text-gray-900 transition-colors font-light">Philosophy</a></li>
              <li><a href="#services" className="text-gray-500 hover:text-gray-900 transition-colors font-light">Services</a></li>
              <li><a href="#process" className="text-gray-500 hover:text-gray-900 transition-colors font-light">Process</a></li>
              <li><a href="#work" className="text-gray-500 hover:text-gray-900 transition-colors font-light">Selected Work</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-6">Connect</h3>
            <ul className="space-y-4">
              <li><a href="mailto:hello@jaiveeru.co.in" className="text-gray-500 hover:text-gray-900 transition-colors font-light">hello@jaiveeru.co.in</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 transition-colors font-light">LinkedIn</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 transition-colors font-light">Instagram</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm font-light">
            © {new Date().getFullYear()} Jai Veeru Creatives. All rights reserved.
          </p>
          <div className="flex space-x-8 text-sm text-gray-400 font-light">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
