import React from 'react';

const Card = ({peli, setSeleccionada, seleccionada, eliminar }) => {  


    function seleccionar() {
        setSeleccionada(peli)
    }
    function devolver() {
        return (
            <div key={peli} onClick={seleccionar} className={peli === seleccionada ? "seleccionada" : "cardpeli"}>
                <p className="nombrePeli">{peli}</p>
                <button onClick={()=>eliminar(peli)} className="delete">X</button>
            </div>
        )
    }

    return (
        devolver()
    )
}
export default Card;


