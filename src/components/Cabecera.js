import React from 'react';

const Cabecera = ({calificaciones, listadoPeliculas, columna3}) => {
    return (
      <div className="row cabecera">
        <div className="col">
          {calificaciones}
        </div>
        <div className="pelis" >
          {listadoPeliculas}
        </div>
        <div className="col" >
          {columna3}
        </div>
      </div>
    )
}

export default Cabecera;