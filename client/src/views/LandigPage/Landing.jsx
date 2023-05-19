import style from "./Landing.module.css"

import { Link } from "react-router-dom";

const Landing = ()=>{
    return(
        <div className={style.container}>
            <h1 className={style.titulo}>Bienvenidos al mundo de pokemons</h1>
            <h2>En este sitio podras encontrar a cada uno de tus personajes favoritos!!</h2>
            <h2>Y no solo eso! tambien podras crearlos</h2>
            <h2>Presiona el boton de INGRESAR para a este maravilloso mundo</h2>
            <Link className={style.boton} to="/home">Ingresar</Link>
        </div>
    )
}

export default Landing;