import React from 'react';

const Cabecera = ({columna1, columna2, columna3}) => {
    return (
      <div className="row cabecera">
        <div className="col">
          {columna1}
        </div>
        <div className="pelis" >
          {columna2}
        </div>
        <div className="col" >
          {columna3}
        </div>
      </div>
    )
}

export default Cabecera;