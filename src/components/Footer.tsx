import { Link, useLocation } from 'react-router-dom';

const XLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 1227 1227" fill="currentColor" className={className}>
    <path d="m654.53 592.55 276.12 394.95h-113.32l-225.32-322.28v-.02l-33.08-47.31-263.21-376.5h113.32l212.41 303.85z"/>
    <path d="m1094.42 0h-961.84c-73.22 0-132.58 59.36-132.58 132.58v961.84c0 73.22 59.36 132.58 132.58 132.58h961.84c73.22 0 132.58-59.36 132.58-132.58v-961.84c0-73.22-59.36-132.58-132.58-132.58zm-311.8 1040.52-228.01-331.84-285.47 331.84h-73.78l326.49-379.5-326.49-475.17h249.02l215.91 314.23 270.32-314.23h73.78l-311.33 361.9h-.02l338.6 492.77z"/>
  </svg>
);

const FacebookLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 512 512" fill="currentColor" className={className}>
    <path d="m437 0h-362c-41.351562 0-75 33.648438-75 75v362c0 41.351562 33.648438 75 75 75h151v-181h-60v-90h60v-61c0-49.628906 40.371094-90 90-90h91v90h-91v61h91l-15 90h-76v181h121c41.351562 0 75-33.648438 75-75v-362c0-41.351562-33.648438-75-75-75zm0 0"/>
  </svg>
);

const LinkedinLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 176 176" fill="currentColor" className={className}>
    <path d="m152 0h-128a24 24 0 0 0 -24 24v128a24 24 0 0 0 24 24h128a24 24 0 0 0 24-24v-128a24 24 0 0 0 -24-24zm-92 139.28a3.71 3.71 0 0 1 -3.71 3.72h-15.81a3.71 3.71 0 0 1 -3.72-3.72v-66.28a3.72 3.72 0 0 1 3.72-3.72h15.81a3.72 3.72 0 0 1 3.71 3.72zm-11.62-76.28a15 15 0 1 1 15-15 15 15 0 0 1 -15 15zm94.26 76.54a3.41 3.41 0 0 1 -3.42 3.42h-17a3.41 3.41 0 0 1 -3.42-3.42v-31.05c0-4.64 1.36-20.32-12.13-20.32-10.45 0-12.58 10.73-13 15.55v35.86a3.42 3.42 0 0 1 -3.37 3.42h-16.42a3.41 3.41 0 0 1 -3.41-3.42v-66.87a3.41 3.41 0 0 1 3.41-3.42h16.42a3.42 3.42 0 0 1 3.42 3.42v5.78c3.88-5.83 9.63-10.31 21.9-10.31 27.18 0 27 25.38 27 39.32z"/>
  </svg>
);

const InstagramLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 512 512" fill="currentColor" className={className}>
    <path d="m376 91h-240c-24.8125 0-45 20.1875-45 45v240c0 24.8125 20.1875 45 45 45h240c24.8125 0 45-20.1875 45-45v-240c0-24.8125-20.1875-45-45-45zm-120 270c-57.890625 0-105-47.109375-105-105s47.109375-105 105-105 105 47.109375 105 105-47.109375 105-105 105zm105-180c-16.539062 0-30-13.460938-30-30s13.460938-30 30-30 30 13.460938 30 30-13.460938 30-30 30zm0 0"/>
    <path d="m256 181c-41.351562 0-75 33.648438-75 75s33.648438 75 75 75 75-33.648438 75-75-33.648438-75-75-75zm0 0"/>
    <path d="m436 0h-360c-41.351562 0-76 34.648438-76 76v360c0 41.351562 34.648438 76 76 76h360c41.351562 0 76-34.648438 76-76v-360c0-41.351562-34.648438-76-76-76zm15 376c0 41.351562-33.648438 75-75 75h-240c-41.351562 0-75-33.648438-75-75v-240c0-41.351562 33.648438-75 75-75h240c41.351562 0 75 33.648438 75 75zm0 0"/>
  </svg>
);

const YoutubeLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="m14.8 12.3-4.1 2.2c-.1 0-.2.1-.2.1-.1 0-.2 0-.2-.1-.1-.1-.2-.2-.2-.4v-4.5c0-.2.1-.3.2-.4s.3-.1.5 0l4.1 2.3c.2.1.3.2.3.4-.2.1-.3.3-.4.4z"/>
    <path d="m19.7.5h-15.4c-2.1 0-3.8 1.7-3.8 3.8v15.4c0 2.1 1.7 3.8 3.8 3.8h15.4c2.1 0 3.8-1.7 3.8-3.8v-15.4c0-2.1-1.7-3.8-3.8-3.8zm.4 12.1c0 1.3-.2 2.6-.2 2.6 0 .1-.2 1.3-.7 1.9-.6.7-1.4.8-1.7.8h-.1c-2.1.2-5.4.2-5.4.2-.2 0-4 0-5.2-.2-.1 0-.1 0-.2 0-.4-.1-1.2-.1-1.8-.8-.6-.6-.8-1.7-.8-1.8s-.2-1.3-.2-2.7v-1.2c.1-1.3.2-2.6.2-2.6 0-.1.2-1.3.7-1.9.6-.7 1.4-.8 1.7-.8h.1c2.2-.2 5.5-.2 5.5-.2s3.3 0 5.4.2h.1c.4 0 1.1.1 1.7.8.6.6.8 1.7.8 1.8s.2 1.3.2 2.6v1.3z"/>
    <path d="m10.9 13.3 2.6-1.5-2.6-1.4z"/>
  </svg>
);

const WhatsappLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 448 512" fill="currentColor" className={className}>
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157.1zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
  </svg>
);

const PinterestLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 176 176" fill="currentColor" className={className}>
    <path d="m152 0h-128a24 24 0 0 0 -24 24v128a24 24 0 0 0 24 24h128a24 24 0 0 0 24-24v-128a24 24 0 0 0 -24-24zm-55.51 112.5c-6.83 0-13.24-3.69-15.44-7.88 0 0-3.67 14.56-4.44 17.37-2.74 9.92-10.78 19.86-11.41 20.67a.84.84 0 0 1 -1.5-.36c-.17-1.26-2.22-13.79.19-24l8.11-34.44a24.24 24.24 0 0 1 -2-10c0-9.36 5.43-16.35 12.19-16.35 5.74 0 8.52 4.31 8.52 9.49 0 5.77-3.68 14.41-5.58 22.42-1.59 6.7 3.36 12.17 10 12.17 12 0 20-15.38 20-33.6 0-13.84-9.32-24.21-26.29-24.21-19.16 0-31.11 14.29-31.11 30.22 0 5.51 1.63 9.39 4.17 12.39 1.17 1.38 1.34 1.94.91 3.52-.3 1.17-1 4-1.29 5.07a2.16 2.16 0 0 1 -3.16 1.58c-8.83-3.56-12.94-13.23-12.94-24.09 0-17.95 15.14-39.47 45.16-39.47 24.12 0 40 17.45 40 36.19 0 24.81-13.78 43.31-34.09 43.31z"/>
  </svg>
);

export default function Footer() {
  const location = useLocation();

  const getLinkProps = (href: string) => {
    if (href.startsWith('http')) {
      return { href, as: 'a', target: '_blank', rel: 'noopener noreferrer' };
    }
    if (href.startsWith('/')) {
      return { to: href, as: Link };
    }
    if (location.pathname === '/') {
      return { href, as: 'a' };
    }
    return { href: `/${href}`, as: 'a' };
  };

  const links = [
    { name: 'Services', href: '/services' },
    { name: 'About', href: 'https://jaiveeru.co.in/about/' },
    { name: 'Portfolio', href: 'https://jaiveeru.co.in/our-portfolio/' },
    { name: 'Join Us', href: 'https://jobs.jaiveeru.site/' },
    { name: 'JV TAPtik', href: 'https://tools.jaiveeru.site/' },
  ];

  return (
    <footer className="bg-[#292569] border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-4">
          <div className="col-span-1 md:col-span-2 lg:col-span-4 lg:pr-12">
            <Link to="/" className="inline-block mb-8">
              <img 
                src="https://jaiveeru.co.in/wp-content/uploads/2019/11/JV-white-logo.svg" 
                alt="Jai Veeru Creatives" 
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-white max-w-md mb-8 font-light leading-relaxed">
              <strong className="font-[400] text-[#FDBB10]">Brand and communications studio</strong><br />
              We work at the intersection of strategy, storytelling, and execution. Helping organisations clarify what they stand for, and communicate it consistently across every touchpoint that matters.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="https://www.facebook.com/jaiveeru.co" target="_blank" rel="noopener noreferrer" className="bg-white text-[#292569] hover:opacity-90 hover:scale-105 transition-all w-6 h-6 rounded-full flex items-center justify-center">
                <FacebookLogo className="w-[1.125rem] h-[1.125rem]" />
              </a>
              <a href="https://www.instagram.com/jaiveeru.creatives/" target="_blank" rel="noopener noreferrer" className="bg-white text-[#292569] hover:opacity-90 hover:scale-105 transition-all w-6 h-6 rounded-full flex items-center justify-center">
                <InstagramLogo className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/jaiveerucreativesofficial" target="_blank" rel="noopener noreferrer" className="bg-white text-[#292569] hover:opacity-90 hover:scale-105 transition-all w-6 h-6 rounded-full flex items-center justify-center">
                <LinkedinLogo className="w-[1.125rem] h-[1.125rem]" />
              </a>
              <a href="https://www.youtube.com/@jaiveeru.creatives" target="_blank" rel="noopener noreferrer" className="bg-white text-[#292569] hover:opacity-90 hover:scale-105 transition-all w-6 h-6 rounded-full flex items-center justify-center">
                <YoutubeLogo className="w-5 h-5" />
              </a>
              <a href="https://wa.me/919911184440" target="_blank" rel="noopener noreferrer" className="bg-white text-[#292569] hover:opacity-90 hover:scale-105 transition-all w-6 h-6 rounded-full flex items-center justify-center">
                <WhatsappLogo className="w-5 h-5" />
              </a>
              <a href="https://in.pinterest.com/jaiveerucreatives/" target="_blank" rel="noopener noreferrer" className="bg-white text-[#292569] hover:opacity-90 hover:scale-105 transition-all w-6 h-6 rounded-full flex items-center justify-center">
                <PinterestLogo className="w-[1.125rem] h-[1.125rem]" />
              </a>
            </div>
          </div>
          
          <div className="col-span-1 lg:col-span-2">
            <h3 className="font-[400] text-[#FDBB10] mb-8 uppercase tracking-wider flex items-center">
              Studio
              <span className="ml-4 w-12 sm:w-20 h-[2px] bg-[#FDBB10]"></span>
            </h3>
            <ul className="space-y-1">
              {links.map((link) => {
                const { as: Component, ...props } = getLinkProps(link.href);
                const isActive = location.pathname === link.href;
                // @ts-ignore
                return (
                  <li key={link.name}>
                    <Component
                      {...props}
                      className={`transition-colors ${isActive ? 'text-brand-green font-medium' : 'text-white hover:text-brand-green font-light'}`}
                    >
                      {link.name}
                    </Component>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <h3 className="font-[400] text-[#FDBB10] mb-8 uppercase tracking-wider flex items-center">
              Discover
              <span className="ml-4 w-12 sm:w-20 h-[2px] bg-[#FDBB10]"></span>
            </h3>
            <ul className="space-y-1">
              <li><a href="https://jaiveeru.co.in/impactful-insights/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-green transition-colors font-light block">Impactful Insights</a></li>
              <li><a href="https://jaiveeru.co.in/success-stories/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-green transition-colors font-light block">Success Stories</a></li>
              <li><a href="https://jaiveeru.co.in/our-blog/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-green transition-colors font-light block">Our Blog</a></li>
              <li><a href="https://jaiveeru.co.in/jv-diaries/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-green transition-colors font-light block">JV Diaries</a></li>
              <li><a href="https://jaiveeru.co.in/jv-moments/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-green transition-colors font-light block">JV Moments</a></li>
              <li><a href="https://jaiveeru.co.in/trusted-clients/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-green transition-colors font-light block">Clients</a></li>
              <li><a href="https://jaiveeru.co.in/faqs/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-green transition-colors font-light block">FAQs</a></li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-2 lg:col-span-4 lg:text-right">
            <h3 className="font-[400] text-[#FDBB10] mb-8 uppercase tracking-wider flex items-center md:justify-end">
              Connect
              <span className="ml-4 w-12 sm:w-20 h-[2px] bg-[#FDBB10]"></span>
            </h3>
            <div className="space-y-2 text-white font-light text-sm leading-relaxed">
              <p>
                <strong className="font-[400] text-[#FDBB10] mb-1">Delhi Hive  </strong>
                C-70, 4th Floor, DDA Shed Okhla Phase I,
                Okhla Industrial Estate,<br />
                New Delhi, 110020
              </p>
              <p>
                <strong className="font-[400] text-[#FDBB10] mb-1">Hyderabad Hub </strong>
                Manikonda, Hyderabad, Telangana
              </p>
              <p>
                <strong className="font-[400] text-[#FDBB10] mb-1">Call </strong>
                <a href="tel:+911161357576" className="hover:text-brand-green transition-colors">+91 11 61357576</a> <span className="mx-1">|</span> <a href="tel:+919911184440" className="hover:text-brand-green transition-colors">+91 99111 84440</a> <span className="mx-1">|</span> <a href="tel:+919667788659" className="hover:text-brand-green transition-colors">+91 96677 88659</a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t-[0.5px] border-white/20 pt-8 pb-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white text-[12px] font-light text-center md:text-left">
            © {new Date().getFullYear()} Jai Veeru Creatives. All rights reserved <span className="mx-2">|</span> Built with <span className="text-red-500">❤</span> in India
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-2 gap-y-2 text-[12px] text-white font-light">
            <Link to="/privacy-policy" >Privacy Policy</Link>
            <Link to="/terms-conditions" >Terms of Service</Link>
            <Link to="/refund_policy" >Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
