import React from 'react';
import { useState, useEffect } from 'react';
import Card from './Card';

const Fila = ({calificacion, setSeleccionada, seleccionada}) => {

    const [listaDePeliculas, setListaDePeliculas] = useState([])

    function sumarLista() {
        setListaDePeliculas([...listaDePeliculas, seleccionada])
    }

    return (
        <div>
          <div className="row">
            <div className={"col " + calificacion.toLowerCase()}>
              <p onClick={sumarLista} >{calificacion}</p>
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