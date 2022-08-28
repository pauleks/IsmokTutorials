import styles from "../styles/Index.module.css";
import Link from "next/link";
import { CategoryInterface } from "../types/Lessons";
import CategoryPresentation from "../components/CategoryPresentation";
import Head from "next/head";

import CategoriesData from "../data/Categories.json";

export const getStaticProps = () => {
  return {
    props: {
      CategoriesData,
    },
  };
};

const Home = ({ CategoriesData }: { CategoriesData: CategoryInterface[] }) => {
  const categoriesList = CategoriesData.map((category) => {
    return (
      <CategoryPresentation
        key={category.id}
        categoryName={category.name}
        description={category.description}
        id={category.id}
      />
    );
  });

  return (
    <>
      <Head>
        <title>IšmOK pamokos</title>
      </Head>
      <div className={styles.introBanner}>
        <p>Sveiki atvykę į</p>
        <h1>IšmOK</h1>
        <p>Lengvai ir paprastai paaiškintos programavimo pamokos</p>
      </div>
      {categoriesList}
    </>
  );
};

export default Home;
