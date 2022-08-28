import Head from "next/head";
import Link from "next/link";
import LessonPresentation from "./LessonPresentation";

const LessonLayout = ({ children, lessonConfiguration, categoryId }: {
    children: any,
    lessonConfiguration: {
        name: string;
        description: string;
        author: string[];
        rowNumber: number;
    },
    categoryId: string;
}) => {
    return (
        <>
            <Head>
                <title>{lessonConfiguration.name} - IšmOK pamokos</title>
            </Head>
            <Link href={`/${categoryId}`}>↜ grįžk atgal</Link>
            <LessonPresentation lessonName={lessonConfiguration.name} description={lessonConfiguration.description} authors={lessonConfiguration.author} />
            {children}
        </>
    )
}

export default LessonLayout;