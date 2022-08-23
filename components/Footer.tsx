import styles from "../styles/Footer.module.css";
import ThemeChanger from "../components/ThemeChanger";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <p>
          &copy;{" "}
          <a
            href="https://paulekas.eu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Paulius Gečas
          </a>{" "}
          2022
        </p>
        <p>
          Turi klausimų? Parašyk{" "}
          <a href="mailto:ismok@paulekas.eu">ismok@paulekas.eu</a>!
        </p>
      </div>
      <div className={styles.rightAlign}>
        <ThemeChanger />
        <p>
          Puslapio kodą gali rasti{" "}
          <a
            href="https://github.com/TheOnlyGhostwolf/IsmokTutorials"
            target="_blank"
            rel="noopener noreferrer"
          >
            čionais!
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
