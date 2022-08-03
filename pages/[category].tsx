import { getCategoriesOverview } from "../lib/lessons";
import Link from "next/link";
import {
  staticPathsInterface,
  pathsInterface,
  CategoryInterface,
} from "../lib/types";

export function getStaticPaths() {
  const categories = getCategoriesOverview();
  const paths = categories.map((category) => {
    return {
      params: {
        category: category.category,
      },
    };
  });
  return { paths, fallback: false } as staticPathsInterface;
}

export function getStaticProps({ params }: pathsInterface) {
  const categories = getCategoriesOverview();
  const category = categories.find(
    (category) => category.category === params.category
  ) as CategoryInterface;
  return {
    props: {
      category,
    },
  };
}

const CategoryPresentation = ({
  category,
}: {
  category: CategoryInterface;
}) => {
  const lessons = category.lessons.map(
    (
      lesson: {
        id: string;
        title: string;
      },
      i: number
    ) => (
      <p key={lesson.id}>
        <b>{i + 1}:</b>{" "}
        <Link href={category.category + `/` + lesson.id}>{lesson.title}</Link>
      </p>
    )
  );

  return (
    <>
      <Link href={`/`}>↜ Grįžk atgal</Link>
      <h1>{category.name}</h1>
      <h2>{category.description}</h2>
      <hr />
      <div>{lessons}</div>
    </>
  );
};

export default CategoryPresentation;
