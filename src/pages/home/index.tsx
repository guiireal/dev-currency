import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router";
import { Coin, CoinLibResponse } from "../../types";
import { formatBRL } from "../../utils";
import styles from "./styles.module.css";

export default function Home() {
  const [coins, setCoins] = useState<Coin[]>([]);

  useEffect(() => {
    fetch("https://sujeitoprogramador.com/api-cripto/?key=49bb99321215c02f")
      .then((response) => response.json())
      .then((data: CoinLibResponse) => {
        const coinsFormatted = data.coins.slice(0, 30).map((coin: Coin) => ({
          ...coin,
          price: formatBRL(coin.price),
          delta_24h: coin.delta_24h.replace(",", "."),
          market_cap: formatBRL(coin.market_cap),
        }));

        setCoins(coinsFormatted);
      });
  }, []);

  return (
    <main className={styles.container}>
      <form className={styles.form}>
        <input type="text" placeholder="Digite o símbolo da moeda: BTC..." />
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
                <span>{coin.delta_24h}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
