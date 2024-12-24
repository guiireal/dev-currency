import { FormEvent, useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Link, useNavigate } from "react-router";
import data from "../../data/coins.json";
import { Coin } from "../../types";
import { formatBRL, formatNumber } from "../../utils";
import styles from "./styles.module.css";

export default function Home() {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [searchCoin, setSearchCoin] = useState("");

  const navigate = useNavigate();

  function handleSearch(event: FormEvent) {
    event.preventDefault();

    if (!searchCoin) {
      return;
    }

    navigate(`/detail/${searchCoin}`);
  }

  useEffect(() => {
    setTimeout(() => {
      const coinsFormatted = data.coins.slice(0, 15).map((coin) => ({
        ...coin,
        price: formatBRL(coin.price),
        delta_24h: formatNumber(coin.delta_24h),
        market_cap: formatBRL(coin.market_cap),
      }));

      setCoins(coinsFormatted);
    }, 1000);
  }, []);

  return (
    <main className={styles.container}>
      <form className={styles.form} onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Digite o símbolo da moeda: BTC..."
          value={searchCoin}
          onChange={(event) => setSearchCoin(event.target.value)}
        />
        <button type="submit">
          <BiSearch size={30} color="#fff" />
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <th scope="col">Moeda</th>
            <th scope="col">Valor mercado</th>
            <th scope="col">Preço</th>
            <th scope="col">Volume</th>
          </tr>
        </thead>
        <tbody id="tbody">
          {coins.map((coin: Coin) => (
            <tr className={styles.tr} key={coin.symbol}>
              <td className={styles.tdLabel} data-label="Moeda">
                <Link to={`/detail/${coin.symbol}`} className={styles.link}>
                  <span>{coin.name}</span> | {coin.symbol}
                </Link>
              </td>
              <td className={styles.tdLabel} data-label="Valor mercado">
                {coin.market_cap}
              </td>
              <td className={styles.tdLabel} data-label="Preço">
                {coin.price}
              </td>
              <td
                className={
                  Number(coin?.delta_24h) >= 0 ? styles.tdProfit : styles.tdLoss
                }
                data-label="Volume"
              >
                <span>{coin?.delta_24h}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
