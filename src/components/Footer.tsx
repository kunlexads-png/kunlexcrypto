import { TrendingUp, Twitter, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const platformLinks = [
    { name: 'Markets', href: '/#markets' },
    { name: 'News Feed', href: '/#news' },
    { name: 'Portfolio', href: '#' },
    { name: 'Watchlist', href: '#' },
  ];

  const resourceLinks = [
    { name: 'API Documentation', href: '/page/api-documentation' },
    { name: 'Crypto Guide', href: '/page/crypto-guide' },
    { name: 'Market Analysis', href: '/page/market-analysis' },
    { name: 'Newsletter', href: '/page/newsletter-archive' },
  ];

  const companyLinks = [
    { name: 'About Us', href: '/page/about-us' },
    { name: 'Careers', href: '/page/careers' },
    { name: 'Privacy Policy', href: '/page/privacy-policy' },
    { name: 'Terms of Service', href: '/page/terms-of-service' },
  ];

  return (
    <footer id="footer" className="bg-[#030712] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl flex items-center justify-center shadow-lg shadow-brand-primary/20">
                <TrendingUp className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-display font-bold tracking-tight text-white">
                kunlex <span className="gradient-text">CryptoNews</span>
              </span>
            </Link>
            <p className="text-slate-400 mb-8 leading-relaxed">
              The world's most trusted source for crypto market intelligence, real-time data, and breaking news.
            </p>
            <div className="flex items-center gap-4">
              {[Twitter, Github, Linkedin, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-brand-primary hover:text-white transition-all"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-white font-bold mb-6">Platform</h4>
            <ul className="space-y-4">
              {platformLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('/#') ? (
                    <a href={link.href} className="text-slate-400 hover:text-brand-primary transition-colors">{link.name}</a>
                  ) : (
                    <Link to={link.href} className="text-slate-400 hover:text-brand-primary transition-colors">{link.name}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-4">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-slate-400 hover:text-brand-primary transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-slate-400 hover:text-brand-primary transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} kunlex CryptoNews Hub. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <p className="text-slate-500 text-sm flex items-center gap-2">
              Data provided by <span className="text-slate-400 font-medium">CoinGecko</span> & <span className="text-slate-400 font-medium">CryptoCompare</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
