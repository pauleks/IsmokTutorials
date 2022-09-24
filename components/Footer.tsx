import styles from "../styles/components/Footer.module.css";

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
      </div>
      <div className={styles.rightAlign}>
        <p>
          Turi klausimų? Parašyk{" "}
          <a href="mailto:ismok@paulekas.eu">ismok@paulekas.eu</a>!
        </p>
      </div>
    </div>
  );
};

export default Footer;
