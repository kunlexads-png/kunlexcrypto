import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarketTable } from './components/MarketTable';
import { NewsFeed } from './components/NewsFeed';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { ContentPage } from './components/ContentPage';
import { motion, AnimatePresence } from 'motion/react';

const HomePage = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <Hero />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <MarketTable />
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <NewsFeed />
    </motion.div>

    <Newsletter />
  </motion.div>
);

export default function App() {
  return (
    <Router>
      <div className="min-h-screen selection:bg-brand-primary/30">
        <Navbar />
        
        <main>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/page/:slug" element={<ContentPage />} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
