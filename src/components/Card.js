import React from 'react';
import { useState } from 'react';

const Card = ({peli, setPeliculas, setSeleccionada, seleccionada}) => {

    function eliminar() {
      setPeliculas(peliculas => [...peliculas.filter(pelicula => pelicula !== peli )]);
    }
    function seleccionar() {
        setSeleccionada(peli)
    }
    function devolver() {
        return (
            <div key={peli} onClick={seleccionar} className={peli === seleccionada ? "seleccionada" : "cardpeli"}>
                <p className="nombrePeli">{peli}</p>
                <button onClick={eliminar} className="delete">X</button>
            </div>
        )
    }

    return (
        devolver()
    )
}
export default Card;


