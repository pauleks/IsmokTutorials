import { getCategories } from "../utils/GetCategories";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/CategoryPresentation.module.css";
import Head from "next/head";

import { CategoryInterface, pathsInterface } from "../types/Lessons";

export const getStaticPaths = () => {
  const categories = getCategories();
  const paths = categories.map((category) => {
    return {
      params: {
        category: category.id,
      },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps = ({ params }: pathsInterface) => {
  const category = getCategories().find(
    (category) => category.id === params.category
  );

  return {
    props: {
      category,
    },
  };
};

const CategoryPresentation = ({
  category,
}: {
  category: CategoryInterface;
}) => {
  const categoryLessons = category.lessons.map((lesson, i) => {
    return (
      <div key={lesson.id}>
        <b>{i + 1}.</b>{" "}
        <Link href={`/${category.id}/${lesson.id}`}>{lesson.name}</Link>
      </div>
    );
  });

  const router = useRouter();

  return (
    <>
      <Head>
        <title>{category.name} - IšmOK pamokos</title>
      </Head>
      <button onClick={() => router.push(`/`)}>↜ grįžk atgal</button>
      <div className={styles.parent} style={{ padding: "1rem" }}>
        <h1>{category.name}</h1>
        <p>{category.description}</p>
      </div>
      <h2>Pamokų sąrašas</h2>
      {categoryLessons}
    </>
  );
};

export default CategoryPresentation;
