

import {Link} from 'react-router-dom'
import style from "./NavBar.module.css"

const NavBar = ()=>{

    

    const handleChange = (event) =>{
        
        
    }

    return(
        <div className= {style.container}>
            <Link to="/home">HOME</Link>
            <Link to="/create">FORM</Link>
            <input placeholder='Escriba el nombre de su pokemón' /*onChange={handleChange}*/ />
            <button >Buscar</button>
        </div>
    )
}

export default NavBar
