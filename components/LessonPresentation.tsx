import styles from "../styles/LessonPresentation.module.css";

const LessonPresentation = ({ lessonName, description, authors }: { lessonName: string, description: string, authors?: string[] }) => {
    return (
        <div className={styles.card}>
            <h1>{lessonName}</h1>
            <p>{description}</p>
        </div>
    )
}

export default LessonPresentation;