export interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  price_change_percentage_24h: number;
  sparkline_in_7d?: {
    price: number[];
  };
}

export interface NewsItem {
  id: string;
  title: string;
  url: string;
  imageurl: string;
  body: string;
  published_on: number;
  source: string;
  categories: string;
}

export interface NewsResponse {
  Data: NewsItem[];
}
