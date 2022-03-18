import { useState } from "react";
import { Link } from "react-router-dom";


const InputCount= (onAdd)=> {

    return (
        <Link to='/cart' >
            <button className="btn btn-outline-primary" onClick={onAdd} >Ir al Carrito</button>
        </Link>
    )
}



const ButtonCount= ({handleInter})=> {
    return <button className="btn btn-outline-success" onClick={handleInter}>Agregar al carrito</button>

}

const Intercambiabilidad = () => {

    const [inputType, setInputType ] = useState('button')

    const handleInter= ()=> {
        setInputType('input')
    }
    
    return (
        <div>
            
            {
                inputType === 'button' 
                ? 
                    <ButtonCount handleInter={handleInter} />
                : 
                    <InputCount />
            }
              
        </div>
    )
}

export default Intercambiabilidad
