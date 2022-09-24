const Planai = () => {
    return (
        <>
            <h1>Ateities planai</h1>
            <p>Paskutinį kartą atnaujinta: <b>2022 m. rugsėjo 24 d.</b></p>
            <ul>
                <li>C++ pamokos</li>
                <ul>
                    <li>CodeBlocks instaliavimas</li>
                    <li>Supažindinimas su C++ kalba</li>
                    <li>Matematiniai veiksmai</li>
                    <li>Konsolės įvestis</li>
                    <li>...</li>
                </ul>
                <li className="done">Šriftų keitimas</li>
                <li className="done">Navigation bar</li>
                <li className="done">Slapukų notice</li>
                <li>Kodo atvaizdavimo {`<code>`} CSS patobulinimai</li>
                <li>a11y / prieinamumas</li>
                <ul>
                    <li>šriftas, skirtas disleksiją turintiems žmonėms</li>
                    <li>svetainės struktūros pritaikymas screen readeriams (?)</li>
                </ul>
                <li><a href="https://www.figma.com/file/2fWnUnK8teYX0DSzt5q7bh/I%C5%A0MOK" target="_blank" rel="noopener noreferrer">Viskas kita, kas egzistuoja Figma faile</a></li>
                <li className="maybe">Savas C++ compileris</li>
                <li className="maybe">hackathonai / konkursai</li>
            </ul>
            <style jsx>{`
            li {
                font-size: 1.5em;
            }

            .done {
                text-decoration: line-through 3px;
            }

            .maybe {
                opacity: 0.5;
            }
            `}</style>
        </>
    );
}

export default Planai;