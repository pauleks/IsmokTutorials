import {
  CategoryInterface,
  LessonInterface,
  pathsInterface,
} from "../../types/Lessons";
import { getCategories } from "../../utils/GetCategories";
import { useRouter } from "next/router";
import styles from "../../styles/LessonPresentation.module.css";
import Head from "next/head";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'

import Image from "next/image";

export const getStaticPaths = () => {
  const categories = getCategories();
  const paths: {
    params: { category: string; lesson: string };
  }[] = [];

  categories.forEach((category) => {
    category.lessons.forEach((lesson) => {
      paths.push({
        params: {
          category: category.id,
          lesson: lesson.id,
        },
      });
    });
  });

  return { paths, fallback: false };
};

export const getStaticProps = ({ params }: pathsInterface) => {
  const category = getCategories().find(
    (category) => category.id === params.category
  );

  const lesson = category?.lessons.find(
    (lesson) => lesson.id === params.lesson
  );

  return {
    props: {
      lesson,
      category,
    },
  };
};

const Lesson = ({
  lesson,
  category,
}: {
  lesson: LessonInterface;
  category: CategoryInterface;
}) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{lesson.name} - IšmOK pamokos</title>
      </Head>
      <button onClick={() => router.push(`/${category.id}`)}>
        ↜ grįžk atgal
      </button>
      <div className={styles.card}>
        <h1>{lesson.name}</h1>
        <p>{lesson.description}</p>
      </div>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        className={styles.markdown}
        components={{
          img: ({ src, alt }) => {
            // eslint-disable-next-line @next/next/no-img-element
            return <img src={src} alt={alt} loading="lazy" />;
          },
          code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                language={match[1]}
                PreTag="div"
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          }
        }}
      >
        {lesson.content}
      </ReactMarkdown>
    </>
  );
};

export default Lesson;
