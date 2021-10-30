import React from 'react';
import Div from './CardStyle' 

const Card = ({peli, setSeleccionada, seleccionada, eliminar }) => {  

    function seleccionar() {
        setSeleccionada(peli)
    }
    
    return (
        <Div seleccionada={peli === seleccionada} onClick={seleccionar}  >
            <button onClick={()=>eliminar(peli)} className="delete">X</button>
            <p className="nombrePeli">{peli}</p>
        </Div>
    )
}
export default Card;


