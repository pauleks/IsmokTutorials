import { useRouter } from "next/router";
import { getCategoriesOverview } from "../../lib/lessons";
import Link from "next/link";
import { Sandpack } from "@codesandbox/sandpack-react";
import {
  staticPathsInterface,
  pathsInterface,
  LessonInterface,
} from "../../lib/types";

export function getStaticPaths() {
  const categories = getCategoriesOverview();
  const paths: { params: { category: string; lesson: string } }[] = [];

  categories.forEach((category) => {
    category.lessons.forEach((lesson) => {
      paths.push({
        params: {
          category: category.category,
          lesson: lesson.id,
        },
      });
    });
  });

  return { paths, fallback: false } as staticPathsInterface;
}

export async function getStaticProps({ params }: pathsInterface) {
  const categories = getCategoriesOverview();
  const category = categories.find(
    (category) => category.category === params.category
  );
  const lesson = category?.lessons.find(
    (lesson) => lesson.id === params.lesson
  ) as LessonInterface;
  return {
    props: {
      lesson,
    },
  };
}

const components = { Sandpack };

const CategoryPresentation = ({ lesson }: { lesson: LessonInterface }) => {
  const { query } = useRouter();
  const { title, author, contentHtml, draft, rowNumber } = lesson;

  return (
    <>
      <Link href={`/` + query.category}>↜ Grįžk atgal</Link>
      <div
        style={{
          margin: "1rem 0",
          backgroundColor: "#f1f1f1",
          borderRadius: "20px",
          padding: "20px",
        }}
      >
        <p
          style={{
            margin: "0 0 8px 0",
          }}
        >
          Pamoka #{rowNumber}
        </p>
        <h1
          style={{
            margin: "4px 0px",
          }}
        >
          {title}
        </h1>
      </div>

      {draft && (
        <div
          style={{
            backgroundColor: "#FFEC70",
            borderRadius: "20px",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              margin: "4px 0px",
            }}
          >
            Ši pamoka nėra pradinės būsenos, šiuo metu jinai yra dar kuriama ir
            tobulinama!
          </p>
        </div>
      )}

      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />

      <p style={{ opacity: "0.5" }}>
        Visos pamokos naudoja{" "}
        <a href="" target="_blank" rel="norefereer noopener">
          CC BY-NC-SA 4.0
        </a>{" "}
        licenziją, jeigu nenurodyta kitaip.
      </p>
    </>
  );
};

export default CategoryPresentation;
