import ThemeChanger from "../components/ThemeChanger";
import styles from "../styles/pages/nustatymai.module.css";
import { useEffect, useState } from "react";

const Nustatymai = () => {
    const [font, setFont] = useState("ReadexPro");

    useEffect(() => {
        if (localStorage.getItem("font") !== null) {
            setFont(localStorage.getItem("font") || "ReadexPro");
        }
    }, []);

    const changeFont = (e: any) => {
        setFont(e.target.value);
        localStorage.setItem("font", e.target.value);
    };

    useEffect(() => {
        document.documentElement.style.setProperty("--font", font);
    }, [font]);

    return (
        <div>
            <h1>Nustatymai</h1>
            <div className={styles.settingsMenu}>
                <div>
                    <h3>Svetinės spalvos</h3>
                    <p>Pasirink tau labiausiai patinkančią spalvą!</p>
                    <ThemeChanger />
                </div>
                <div>
                    <h3>Šriftas</h3>
                    <p>Pasirink šriftą, kuris tau patinka labiausiai!</p>
                    <select name={"font"} id={"font"} value={font} onChange={changeFont} style={{ fontFamily: font }}>
                        <option value={"ReadexPro"}>ReadexPro</option>
                        <option value={"Consolas"}>Consolas</option>
                        <option value={"Georgia"}>Georgia</option>
                        <option value={"Arial"}>Arial</option>
                        <option value={"Times New Roman"}>Times New Roman</option>
                        <option value={"Courier New"}>Courier New</option>
                        <option value={"Tahoma"}>Tahoma</option>
                    </select>
                </div>
                <p>Kažkas neveikia? Turi pasiūlymų? Pranešk: <a href="mailto:ismok@paulekas.eu">ismok@paulekas.eu</a></p>
            </div>
        </div>
    );
}

export default Nustatymai;