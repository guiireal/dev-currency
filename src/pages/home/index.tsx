import { BiSearch } from "react-icons/bi";
import { Link } from "react-router";
import styles from "./styles.module.css";

export default function Home() {
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
          <tr className={styles.tr}>
            <td className={styles.tdLabel} data-label="Moeda">
              <Link to="/detail/btc" className={styles.link}>
                <span>Bitcoin</span> | BTC
              </Link>
            </td>
            <td className={styles.tdLabel} data-label="Valor mercado">
              R$ 10.000,00
            </td>
            <td className={styles.tdLabel} data-label="Preço">
              R$ 40,00
            </td>
            <td className={styles.tdProfit} data-label="Volume">
              <span>-50</span>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
