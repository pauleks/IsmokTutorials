// for debug purposes only
import Link from "next/link";
import styles from "../styles/PointsPreview.module.css";

const POINTS = 15;

const PointsPreview = () => {
    // for debug purposes only

    return <></>;

    return (
        <div className={styles.pointsPreview}>
            <Link href="/taskai">{`${POINTS} taškų`}</Link>
        </div>
    );
};

export default PointsPreview;