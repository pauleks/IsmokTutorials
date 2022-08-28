import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import LessonPresentation from "../components/LessonPresentation";

import { CategoryInterface, pathsInterface } from "../types/Lessons";

import CategoriesData from "../data/Categories.json";

export const getStaticPaths = () => {
    const paths = CategoriesData.map((category) => {
        return {
            params: {
                category: category.id,
            },
        }
    });

    return { paths, fallback: false };
};

export const getStaticProps = ({ params }: pathsInterface) => {
    const category = CategoriesData.find((category) => category.id === params.category);

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
    const router = useRouter();

    console.log(category);

    const lessonsList = category.lessons.map((lesson) => <li><Link href={`/${category.id}/${lesson.link}`}>{lesson.name}</Link></li>);

    return (
        <>
            <Head>
                <title>{category.name} - IšmOK pamokos</title>
            </Head>
            <Link href={`/`}>↜ grįžk atgal</Link>
            <LessonPresentation lessonName={category.name} description={category.description} />
            <ol>{lessonsList}</ol>
        </>
    );
};

export default CategoryPresentation;
