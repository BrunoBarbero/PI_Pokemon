import { useState } from "react";
import axios from "axios"

import style from "./Form.module.css"

const Form = ()=>{

    const [form, setForm] = useState({
        name:"",
        image:"",
        healt:"",
        damage:"",
        defense:"",
        speed:""
    })

    const [errors, setErrors] = useState({
        name:"",
        image:"",
        healt:"",
        damage:"",
        defense:"",
        speed:""
    })

    const validate = ()=>{
        
        const error = {};
        if(form.name.length < 3 ){
            error.name = 'El nombre debe contener al menos 3 letras'
        }
        
        return error
    }

    const changeHandler = (event)=>{
        const property = event.target.name;
        const value = event.target.value;
        setForm({...form, [property]:value })
        
        setErrors(validate()) //falta terminar datos en validate

    }

    const submitHandler = (event) =>{ //para evitar que la pagina se recargue cuando se hace click en button
        event.preventDefault()
        axios.post("http://localhost:3001/pokemons", form)
        .then(res =>alert(res))
        .catch(error =>alert(error))
    }

    return(
        <form className={style.container} onSubmit={submitHandler}>
           
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" value={form.name} onChange={changeHandler} name="name"/>
                {errors.name && <span>{errors.name}</span>}
            </div>

            <div>
                <label htmlFor="image">Image: </label>
                <input type="text" value={form.image} onChange={changeHandler} name="image"/>
            </div>

            <div>
                <label htmlFor="healt">Healt: </label>
                <input type="text" value={form.healt} onChange={changeHandler} name="healt"/>
            </div>

            <div>
                <label htmlFor="damage">Damage: </label>
                <input type="text" value={form.damage} onChange={changeHandler} name="damage"/>
            </div>

            <div>
                <label htmlFor="defense">Defense: </label>
                <input type="text" value={form.defense} onChange={changeHandler} name="defense"/>
            </div>

            <div>
                <label htmlFor="speed">Speed: </label>
                <input type="text" value={form.speed} onChange={changeHandler} name="speed"/>
            </div>

            <button type="submit">Crear</button>

            <select name="typos" id="">
                {
                    
                }
            </select>

        </form>
    )
}

export default Form;