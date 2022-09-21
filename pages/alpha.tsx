import Link from "next/link";

const Alpha = () => {
    return (
        <>
            <h1 style={{ rotate: "-1deg" }}><span style={{ textDecoration: "underline wavy" }}>Alpha</span> stadija. Ką tai reiškia?</h1>
            <h2>Šios svetainės turinys bei struktūra vis dar yra ir tikriausiai bus tobulinama. <Link href="/planai">Progresą gali sekti čionais.</Link></h2>
            <h3>Taip pat, svetainės funkcijos gali turėti ir trikdžių. Jei aptinkate tai, kas neveikia arba atrodo keistai, praneškite man per el. paštą <a href="mailto:ismok@paulekas.eu">ismok@paulekas.eu</a>!</h3>
        </>
    );
}

export default Alpha;