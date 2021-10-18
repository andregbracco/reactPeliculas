import React from 'react';
import { useState } from 'react';

const IngresaNuevoJuego = ({setPeliNueva}) => {
    const [nueva, setNueva] = useState('');

    function tomaValor(evento) {
        setNueva(evento.target.value)
    }

    function guardaNueva() {
        setPeliNueva(nueva)
    }

    return (
      <div className="agregar">
        <label>Nueva Película:</label>
        <input onChange={tomaValor} type="text" className="pelinueva" placeholder="Peli..."></input>
        <select name="calificacion" value="calificacion" className="pelinueva">
            <option value="excelente" name="excelente">Excelente</option>
            <option value="bueno" name="bueno">Bueno</option>
            <option value="regular" name="regular">Regular</option>
            <option value="malo" name="malo">Malo</option>
            <option value="caca" name="caca">Caca</option>
        </select>
        <button onClick={guardaNueva}>Agregar</button>
      </div>
    )
}
export default IngresaNuevoJuego;