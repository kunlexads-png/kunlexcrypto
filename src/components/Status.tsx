import { motion } from 'motion/react';

export const LoadingSpinner = () => (
  <div className="flex flex-col items-center justify-center py-20">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className="w-12 h-12 border-4 border-brand-primary border-t-transparent rounded-full"
    />
    <p className="mt-4 text-slate-400 font-medium animate-pulse">Loading crypto data...</p>
  </div>
);

export const ErrorMessage = ({ message }: { message: string }) => (
  <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
    <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-4">
      <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
    <h3 className="text-xl font-bold text-white mb-2">Oops! Something went wrong</h3>
    <p className="text-slate-400 max-w-md">{message}</p>
    <button 
      onClick={() => window.location.reload()}
      className="mt-6 px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors font-medium"
    >
      Try Again
    </button>
  </div>
);
