import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { websiteTheme } from "../types";
import styles from '../styles/components/ThemeChanger.module.css'

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const themes: websiteTheme[] = ["light", "dark", "green", "pink", "orange"];

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const buttons = themes.map((theme) => (
    <button
      key={theme}
      className={`${styles.themeChangerButton} ${styles[theme]}`}
      onClick={() => setTheme(theme)}
    />
  ));

  return <div className={styles.buttonRow}>{buttons}</div>;
};

export default ThemeChanger;
