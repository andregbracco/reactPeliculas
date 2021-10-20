import React from 'react';
import { useState } from 'react';
import Card from './Card';

const Fila = ({calificacion, setSeleccionada}) => {

    const [listaDePeliculas, setListaDePeliculas] = useState([])

    return (
        <div>
          <div className="row">
            <div className={"col " + calificacion.toLowerCase()}>
              {calificacion}
            </div>
            <div className="pelis">
              {listaDePeliculas.map(peli=> <Card peli={peli} setPeliculas={setListaDePeliculas} setSeleccionada={setSeleccionada}/>)}
            </div>
            <div className="col">
              {listaDePeliculas.length}
            </div>
          </div>

        </div>
    )
}

export default Fila;