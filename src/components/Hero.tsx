import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-secondary/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-primary text-sm font-medium mb-6">
            <Sparkles size={16} />
            <span>The Future of Crypto Intelligence</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold tracking-tight text-white mb-6 leading-[1.1]">
            Stay Ahead in the <br className="hidden sm:block" />
            <span className="gradient-text">Crypto Market</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Real-time market data, breaking news, and deep insights into the world of digital assets. 
            Empowering you to make smarter investment decisions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#markets"
              className="group px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full text-white font-bold shadow-xl shadow-brand-primary/20 hover:shadow-brand-primary/40 transition-all flex items-center gap-2"
            >
              View Live Markets
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#news"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white font-bold transition-all"
            >
              Latest News
            </a>
          </div>
        </motion.div>

        {/* Stats / Features */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
        >
          {[
            { label: 'Active Users', value: '50K+' },
            { label: 'Cryptocurrencies', value: '10K+' },
            { label: 'Daily News', value: '200+' },
            { label: 'Market Cap', value: '$2.5T+' },
          ].map((stat) => (
            <div key={stat.label} className="glass-card p-6 text-center">
              <div className="text-2xl md:text-3xl font-display font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-slate-500 uppercase tracking-wider font-semibold">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
