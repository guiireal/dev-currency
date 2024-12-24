export type Coin = {
  symbol: string;
  show_symbol: string | null;
  name: string;
  rank: number;
  price: string;
  market_cap: string;
  volume_24h: string;
  delta_24h: string | number;
};

export type CoinLibResponse = {
  coins: Coin[];
  last_updated_timestamp: number;
  remaining: number;
};
