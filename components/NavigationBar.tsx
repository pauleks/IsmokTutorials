import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const NavigationBar = () => {

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">IšmOK</Link>
        <span className={styles.badge}><Link href="/alpha">αlpha</Link></span>
      </div>
      <div className={styles.menu}>
        <span style={{ textDecoration: "line-through 4px" }}>Taškai</span>
        <Link href="/nustatymai">Nustatymai</Link>
      </div>
    </div>
  );
};

export default NavigationBar;
