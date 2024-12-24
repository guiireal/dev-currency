import { Link } from "react-router";
import styles from "./styles.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1>Página não existe</h1>
      <Link to="/">Acessar criptomoedas</Link>
    </div>
  );
}
