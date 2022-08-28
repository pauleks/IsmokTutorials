import Link from "next/link"

const Custom404 = () => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
            flexDirection: "column"
        }}>
            <h1>Puslapis nerastas</h1>
            <Link href="/">↜ grįžk į pradinį puslapį</Link>
        </div>
    )
}

export default Custom404;