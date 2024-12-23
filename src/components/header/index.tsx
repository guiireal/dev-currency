import { Link } from "react-router";
import styles from "./styles.module.css";

export function Header() {
  return (
    <header className={styles.container}>
      <div>
        <Link to="/" className={styles.logo}>
          <h1>
            Dev<span>Currency</span>
          </h1>
        </Link>
      </div>
    </header>
  );
}
