import Head from "next/head";
import Link from "next/link";
import styles from "../styles/LessonPresentation.module.css";

const LessonPresentation = ({ lessonName, description, category, authors }: { lessonName: string, description: string, category: string, authors?: string[] }) => {
    return (
        <>
            <Head>
                <title>{lessonName} - IšmOK pamokos</title>
            </Head>
            <Link href={`/${category}`}>↜ grįžk atgal</Link>
            <div className={styles.card}>
                <h1>{lessonName}</h1>
                <p>{description}</p>
            </div>
        </>
    )
}

export default LessonPresentation;