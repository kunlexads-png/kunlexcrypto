import axios from 'axios';
import { Coin, NewsResponse } from '../types';

const COINGECKO_BASE_URL = 'https://api.coingecko.com/api/v3';
const CRYPTOCOMPARE_BASE_URL = 'https://min-api.cryptocompare.com/data/v2';

export const fetchTopCoins = async (perPage = 10): Promise<Coin[]> => {
  const response = await axios.get(`${COINGECKO_BASE_URL}/coins/markets`, {
    params: {
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: perPage,
      page: 1,
      sparkline: true,
      price_change_percentage: '24h',
    },
  });
  return response.data;
};

export const fetchLatestNews = async (): Promise<NewsResponse> => {
  const response = await axios.get(`${CRYPTOCOMPARE_BASE_URL}/news/`, {
    params: {
      lang: 'EN',
    },
  });
  return response.data;
};

export const searchCoins = async (query: string): Promise<Coin[]> => {
  if (!query) return [];
  const response = await axios.get(`${COINGECKO_BASE_URL}/search`, {
    params: { query },
  });
  
  // The search endpoint returns a different structure, we might need to fetch full data for results
  // but for simplicity, we'll just return the search results or filter the top coins if we have them.
  return response.data.coins;
};
