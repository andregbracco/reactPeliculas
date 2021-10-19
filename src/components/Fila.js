import React from 'react';
import Card from './Card';

const Fila = ({calificaciones, listadoPeliculas, setLista}) => {
    return (
      <div className="row">
        <div className="col">
          {calificaciones}
        </div>
        <div className="pelis">
          {listadoPeliculas.map(peli=> <Card peli={peli} setPeliculas={setLista} />)}
        </div>
        <div className="col">
          {listadoPeliculas.length}
        </div>
      </div>
    )
}

export default Fila;