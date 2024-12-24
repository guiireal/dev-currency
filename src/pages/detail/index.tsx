import { useEffect, useState } from "react";
import { useParams } from "react-router";
import data from "../../data/coins.json";
import { Coin } from "../../types";
import styles from "./styles.module.css";

export default function Detail() {
  const { cripto } = useParams();

  const [coin, setCoin] = useState<Coin>();

  useEffect(() => {
    setTimeout(() => {
      const coinData = data.coins.find(
        (coin) =>
          coin.symbol.toLocaleLowerCase() === cripto?.toLocaleLowerCase()
      );

      setCoin(coinData);
    }, 500);
  }, [cripto]);

  return (
    <div className={styles.container}>
      <h1>Detalhes: {cripto}</h1>
    </div>
  );
}
