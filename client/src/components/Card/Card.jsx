import { Link } from "react-router-dom"

import style from "./Card.module.css"


const Card = (props, {id})=>{
    return(
        <div className={style.container}>
            <Link to={`/detail/${id}`}>
            <p>name = {props.name}</p>
            </Link>
            <p>image = {props.image}</p>
            <p> types = {[]}</p>
        </div>
    )
}

export default Card