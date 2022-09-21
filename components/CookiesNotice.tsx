import styles from "../styles/Cookies.module.css";
import { useEffect, useState } from "react";

const CookiesNotice = () => {
    const [cookiesAccepted, setCookiesAccepted] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
        localStorage.getItem("cookiesAccepted") === "true" && setCookiesAccepted(true);
    }, [])

    const acceptCookies = () => {
        localStorage.setItem("cookiesAccepted", "true");
        setCookiesAccepted(true);
    }

    if (cookiesAccepted || loading) return null;

    return (
        <div className={styles.cookienotice}>
            <b>🍪 Labas! Ši svetainė išsaugos keletą nustatymų tavo naršyklėje, kurie yra būtini svetainės funkcionavimui! Čia nėra jokių sekimo ir trečiųjų šalių elementų.</b>
            <button onClick={acceptCookies}>Supratau!</button>
        </div>
    )
}

export default CookiesNotice;