import ThemeChanger from "../components/ThemeChanger";

const Nustatymai = () => {
    return (
        <div>
            <h1>Nustatymai</h1>
            <h3>Svetinės spalvos</h3>
            <p>Pasirink tau labiausiai patinkančią spalvą!</p>
            <ThemeChanger />
            {/* <br /> */}
            <h3>Šriftas</h3>
            <p>Jau greitai</p>
            <br />
            <p>Kažkas neveikia? Turi pasiūlymų? Pranešk: <a href="mailto:ismok@paulekas.eu">ismok@paulekas.eu</a></p>
        </div>
    );
}

export default Nustatymai;