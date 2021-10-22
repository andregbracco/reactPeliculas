import React from 'react';
import { useState } from 'react';

const IngresaNuevoJuego = ({ setPeliNueva, setPeliculas}) => {
    const [nueva, setNueva] = useState('');

    function tomaValor(evento) {
        setNueva(evento.target.value)
      
    }

    function guardaNueva() {
      if(nueva.length > 1) {
        setPeliculas(peliculas => [...peliculas, nueva])
        setNueva('')
      }
    }

    return (
      <div className="agregar">
        <label>Nueva Película:</label>
        <input onChange={tomaValor} type="text" className="pelinueva" placeholder="Peli..." value={nueva}></input>
        <button onClick={guardaNueva}>Agregar</button>
      </div>
    )
}
export default IngresaNuevoJuego;