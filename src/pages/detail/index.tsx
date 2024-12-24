import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import data from "../../data/coins.json";
import { Coin } from "../../types";
import { formatBRL, formatNumber } from "../../utils";
import styles from "./styles.module.css";

export default function Detail() {
  const { cripto } = useParams();

  const [coin, setCoin] = useState<Coin>();
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      const coinData = data.coins.find(
        (coin) =>
          coin.symbol.toLocaleLowerCase() === cripto?.toLocaleLowerCase()
      );

      if (!coinData) {
        navigate("/");
        return;
      }

      coinData.price = formatBRL(coinData.price);
      coinData.market_cap = formatBRL(coinData.market_cap);
      coinData.delta_24h = formatNumber(coinData.delta_24h);

      setCoin(coinData);
      setLoading(false);
    }, 500);
  }, [cripto]);

  if (loading) {
    return (
      <div className={styles.container}>
        <h4 className={styles.center}>Carregando informações...</h4>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.center}>{coin?.name}</h1>
      <p className={styles.center}>{coin?.symbol}</p>

      <section className={styles.content}>
        <p>
          <strong>Preço: </strong> {coin?.price}
        </p>
        <p>
          <strong>Valor de mercado: </strong> {coin?.market_cap}
        </p>
        <p>
          <strong>Volume: </strong>{" "}
          <span
            className={
              Number(coin?.delta_24h) >= 0 ? styles.tdProfit : styles.tdLoss
            }
          >
            {coin?.delta_24h}
          </span>
        </p>
      </section>
    </div>
  );
}
