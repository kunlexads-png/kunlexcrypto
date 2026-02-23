import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Search, TrendingUp, TrendingDown, RefreshCw } from 'lucide-react';
import { fetchTopCoins } from '../services/api';
import { Coin } from '../types';
import { CoinChart } from './CoinChart';
import { LoadingSpinner, ErrorMessage } from './Status';

export const MarketTable = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const loadData = async (silent = false) => {
    if (!silent) setLoading(true);
    else setIsRefreshing(true);
    
    try {
      const data = await fetchTopCoins(20);
      setCoins(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch market data. Please try again later.');
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    loadData();
    const interval = setInterval(() => loadData(true), 60000); // Refresh every 60s
    return () => clearInterval(interval);
  }, []);

  const filteredCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section id="markets" className="py-20 bg-[#030712] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">Live Market Data</h2>
            <p className="text-slate-400">Real-time prices and market trends for the top cryptocurrencies.</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-brand-primary transition-colors" size={18} />
              <input
                type="text"
                placeholder="Search coins..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all w-full md:w-64"
              />
            </div>
            <button 
              onClick={() => loadData(true)}
              disabled={isRefreshing}
              className="p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-slate-400 hover:text-white transition-all disabled:opacity-50"
            >
              <RefreshCw size={20} className={isRefreshing ? 'animate-spin' : ''} />
            </button>
          </div>
        </div>

        <div className="glass-card overflow-hidden">
          <div className="overflow-x-auto scrollbar-hide">
            <table className="w-full text-left border-collapse min-w-[600px] md:min-w-full">
              <thead>
                <tr className="border-b border-white/5 bg-white/[0.02]">
                  <th className="px-4 md:px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">#</th>
                  <th className="px-4 md:px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider sticky left-0 bg-[#0a0f1d] z-10 md:static md:bg-transparent">Coin</th>
                  <th className="px-4 md:px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Price</th>
                  <th className="px-4 md:px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">24h Change</th>
                  <th className="px-4 md:px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider hidden md:table-cell">Market Cap</th>
                  <th className="px-4 md:px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider hidden lg:table-cell">Last 7 Days</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredCoins.map((coin) => (
                  <motion.tr
                    key={coin.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="hover:bg-white/[0.03] transition-colors group"
                  >
                    <td className="px-4 md:px-6 py-4 text-sm text-slate-500">{coin.market_cap_rank}</td>
                    <td className="px-4 md:px-6 py-4 sticky left-0 bg-[#0a0f1d] z-10 md:static md:bg-transparent group-hover:bg-[#111827] transition-colors">
                      <div className="flex items-center gap-3">
                        <img src={coin.image} alt={coin.name} className="w-6 h-6 md:w-8 md:h-8 rounded-full" referrerPolicy="no-referrer" />
                        <div>
                          <div className="font-bold text-white group-hover:text-brand-primary transition-colors text-sm md:text-base">{coin.name}</div>
                          <div className="text-[10px] md:text-xs text-slate-500 uppercase">{coin.symbol}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-4 font-mono font-medium text-white text-sm md:text-base">
                      ${coin.current_price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </td>
                    <td className="px-4 md:px-6 py-4 text-sm md:text-base">
                      <div className={`flex items-center gap-1 font-medium ${coin.price_change_percentage_24h >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {coin.price_change_percentage_24h >= 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                        {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-4 text-sm text-slate-400 hidden md:table-cell">
                      ${(coin.market_cap / 1e9).toFixed(2)}B
                    </td>
                    <td className="px-4 md:px-6 py-4 hidden lg:table-cell">
                      {coin.sparkline_in_7d && (
                        <CoinChart 
                          data={coin.sparkline_in_7d.price} 
                          color={coin.price_change_percentage_24h >= 0 ? '#10b981' : '#f43f5e'} 
                        />
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredCoins.length === 0 && (
            <div className="py-20 text-center text-slate-500">
              No coins found matching "{search}"
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
