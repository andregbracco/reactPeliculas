import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const Div = styled.div`

  display: flex;
  justify-content: space-evenly;
  font-size: 1.3em;
  margin-top: 20px;
  border: solid 1px black;
  padding: 3%;
  background-color: #000000;
  color: #ffffff;

  .pelinueva {
    width: 50%;
  }
  
  label {
    font-size: 1.3em;
  }
  button {
    font-size: 1em;
    padding: 5px;
  }
`;


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
      <Div>
        <label>Nueva Película:</label>
        <input onChange={tomaValor} type="text" className="pelinueva" placeholder="Peli..." value={nueva}></input>
        <button onClick={guardaNueva}>Agregar</button>
      </Div>
    )
}
export default IngresaNuevoJuego;