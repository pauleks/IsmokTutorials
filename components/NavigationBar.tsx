import Link from "next/link";
import styles from "../styles/components/NavigationBar.module.css";
import { useState } from "react";

const NavigationBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { name: "Taškai", href: "/taskai", disabled: true },
    { name: "Nustatymai", href: "/nustatymai" },
  ];

  const linksMenu = links.map((link) => (
    link.disabled ? <span key={link.name} style={{ textDecoration: "line-through 4px" }}>{link.name}</span> : <Link key={link.name} href={link.href}>{link.name}</Link>
  ))

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">IšmOK</Link>
        <span className={styles.badge}><Link href="/alpha">αlpha</Link></span>
      </div>
      <div className={`${styles.menu} ${isMobileMenuOpen && styles.openMenu}`} onClick={() => setIsMobileMenuOpen(false)}>
        <div className={styles.logo}>
          <Link href="/">IšmOK</Link>
          <span className={styles.badge}><Link href="/alpha">αlpha</Link></span>
        </div>
        {linksMenu}
      </div>
      <div className={styles.mobileIconMenu} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <span />
        <span />
        <span />
      </div>
    </div>

  );
};

export default NavigationBar;
