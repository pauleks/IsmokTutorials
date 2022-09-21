import styles from "../styles/Index.module.css";
import Link from "next/link";
import { CategoryInterface } from "../types/Lessons";
import CategoryPresentation from "../components/CategoryPresentation";
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
      <h2 style={{ textDecoration: "underline wavy", rotate: "2deg" }}>Pamokų sąrašas</h2>
      <h3>(Jau greitai)</h3>
    </>
  );
};

export default Home;
