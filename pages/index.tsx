import styles from "../styles/pages/Index.module.css";
import Link from "next/link";
import Head from "next/head";
import { getLessons } from "../lib/getLessons";
import { useState, useEffect } from "react";

export const getStaticProps = async () => {
  const lessons = await getLessons();

  const filteredLessons = lessons.filter((lesson: any) => {
    console.log(lesson);
    return lesson.data && lesson.data?.draft === false;
  }).sort((a: any, b: any) => { return a.data?.rowNumber - b.data?.rowNumber });

  return {
    props: {
      filteredLessons,
    },
  };
};

const Home = ({ filteredLessons }: { filteredLessons: any }) => {
  const [hideIntro, setHideIntro] = useState(false);

  useEffect(() => {
    const hideIntro = localStorage.getItem("hideIntro");
    if (hideIntro === "true") {
      setHideIntro(true);
    }
    setTimeout(() => {
      localStorage.setItem("hideIntro", "true");
    }, 5000);
  }, []);

  const lessons = filteredLessons.map((lesson: any) => {
    return (
      <div key={lesson.id} className={styles.lessonSection}>
        <h3>
          <Link href={`/pamokos/${lesson.id}`}>{lesson.data.name}</Link>
        </h3>
        <p>{lesson.data.description}</p>
      </div>
    )
  });

  return (
    <>
      <Head>
        <title>IšmOK pamokos</title>
      </Head>
      <h1>Sveiki atvykę į <span style={{ textDecoration: "underline wavy" }}>IŠMOK</span> C++ kursą!</h1>
      {!hideIntro &&
        <h2>Čia - nemokamas C++ kursas, skirtas visiems, kurie ruošiasi informacinių technologijų VBE egzaminui.</h2>
      }
      <br />
      <h2 style={{ textDecoration: "underline wavy" }}>Pamokų sąrašas</h2>
      {lessons}
      {/* <br />
      <h2>Apie autorių</h2>
      <p>Čia dar nieko nėra bet pridėjau font switcher&#39;į nustatymuose {":^)"}</p> */}
    </>
  );
};

export default Home;
