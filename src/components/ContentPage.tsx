import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft } from 'lucide-react';
import { contentData } from '../constants/contentData';
import { useEffect } from 'react';

export const ContentPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? (contentData as any)[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold text-white mb-4">Page Not Found</h1>
        <Link to="/" className="text-brand-primary hover:underline">Return Home</Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 min-h-screen"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-8 group"
        >
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
            {data.title}
          </h1>
          <p className="text-xl text-slate-400">
            {data.subtitle}
          </p>
        </header>

        <div className="glass-card p-8 md:p-12 prose prose-invert prose-slate max-w-none">
          <div 
            className="content-body"
            dangerouslySetInnerHTML={{ __html: data.content }} 
          />
        </div>
      </div>

      <style>{`
        .content-body h2 {
          color: white;
          font-size: 1.875rem;
          font-weight: 700;
          margin-top: 2.5rem;
          margin-bottom: 1.25rem;
          font-family: var(--font-display);
        }
        .content-body h3 {
          color: white;
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .content-body p {
          color: #94a3b8;
          line-height: 1.75;
          margin-bottom: 1.25rem;
        }
        .content-body ul {
          list-style-type: disc;
          padding-left: 1.5rem;
          margin-bottom: 1.25rem;
          color: #94a3b8;
        }
        .content-body li {
          margin-bottom: 0.5rem;
        }
        .content-body code {
          background: rgba(255, 255, 255, 0.05);
          padding: 0.2rem 0.4rem;
          border-radius: 0.25rem;
          font-family: monospace;
          color: #818cf8;
        }
      `}</style>
    </motion.div>
  );
};
