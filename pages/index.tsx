import styles from "../styles/pages/Index.module.css";
import Link from "next/link";
import Head from "next/head";

const Home = () => {


  return (
    <>
      <Head>
        <title>IšmOK pamokos</title>
      </Head>
      <h1>Sveiki atvykę į <span style={{ textDecoration: "underline wavy" }}>IŠMOK</span> C++ kursą</h1>
      <h2>Čia - nemokamas C++ kursas, skirtas visiems, kurie ruošiasi informacinių technologijų VBE egzaminui.</h2>
      <br />
      <h2>Pamokų sąrašas</h2>
      <h3>(Jau greitai)</h3>
      <br />
      <h2>Apie autorių</h2>
      <p>Čia dar nieko nėra bet pridėjau font switcher&#39;į nustatymuose {":^)"}</p>
    </>
  );
};

export default Home;
