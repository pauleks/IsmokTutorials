import Link from "next/link"

export default () => {
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