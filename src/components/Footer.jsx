import { MapPin, Phone, Clock, ArrowUp } from 'lucide-react';
import logoImg from '../assets/logo.png';

const Instagram = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-brand-green-dark text-primary border-t border-brand-green/20 relative pt-16 pb-8">
      {/* Scroll to Top Circle button */}
      <a
        href="#home"
        onClick={handleScrollToTop}
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3.5 rounded-full bg-brand-orange hover:bg-brand-orange-light text-primary hover:scale-110 shadow-lg transition-all duration-300 z-10"
        aria-label="Scroll to top"
      >
        <ArrowUp size={22} />
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-12">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="flex items-center space-x-3">
              <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-brand-orange shadow-md bg-yellow-400 flex items-center justify-center">
                <img src={logoImg} alt="Shahji Dairy Logo" className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold font-heading text-primary block leading-none">
                  Shahji Dairy
                </span>
                <span className="text-xs font-accent text-brand-orange-light block mt-0.5">
                  Restaurant & Milk Supplier
                </span>
              </div>
            </div>
            <p className="text-primary/70 text-sm sm:text-base leading-relaxed font-body max-w-sm mt-3">
              Serving the finest local dairy products and authentic traditional North Indian vegetarian cuisine in Sikandrabad, Uttar Pradesh since 2011.
            </p>
            <div className="flex space-x-3.5 pt-2">
              <a
                href="https://instagram.com/shahjidairyofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-brand-green-light/20 hover:bg-brand-orange text-primary rounded-full hover:scale-110 shadow transition-all duration-300"
                aria-label="Follow Shahji Dairy on Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h4 className="font-heading font-bold text-brand-orange uppercase tracking-wider text-sm border-b border-brand-green/25 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 font-body text-sm text-primary/80">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Us', href: '#about' },
                { name: 'Menu & Offerings', href: '#menu' },
                { name: 'Our Gallery', href: '#gallery' },
                { name: 'Reviews', href: '#reviews' },
                { name: 'Contact Us', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-brand-orange transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Details repeated */}
          <div className="md:col-span-4 space-y-4 text-left">
            <h4 className="font-heading font-bold text-brand-orange uppercase tracking-wider text-sm border-b border-brand-green/25 pb-2">
              Contact Info
            </h4>
            <ul className="space-y-3 font-body text-sm text-primary/80">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-brand-orange flex-shrink-0 mt-0.5" />
                <span>
                  CPW4+Q2J, Shaji Road, Sikandrabad,<br />
                  Uttar Pradesh 203205
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-brand-orange flex-shrink-0" />
                <a href="tel:08979369874" className="hover:text-brand-orange font-bold text-accent-red-light">
                  08979369874
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Clock size={18} className="text-brand-orange flex-shrink-0" />
                <span>Open Everyday: 7:00 AM - 10:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-brand-green/10 pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-primary/50 font-body space-y-4 sm:space-y-0">
          <div>
            &copy; 2026 Shahji Dairy. All rights reserved.
          </div>
          <div>
            Built with Freshness &amp; Pride in Sikandrabad
          </div>
        </div>

      </div>
    </footer>
  );
}
