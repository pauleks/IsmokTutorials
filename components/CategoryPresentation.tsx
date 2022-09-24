import Link from "next/link";
import styles from "../styles/components/CategoryPresentation.module.css";

const ProjectPresentation = ({
  categoryName,
  description,
  id,
}: {
  categoryName: string;
  description: string;
  id: string;
}) => {
  return (
    <div className={styles.parent}>
      <div className={styles.card}>
        <h3>{categoryName}</h3>
        <p>{description}</p>
      </div>
      <div className={styles.link}>
        <Link href={`/${id}`}>Peržiūrėk pamokas ↝</Link>
      </div>
    </div>
  );
};

export default ProjectPresentation;
