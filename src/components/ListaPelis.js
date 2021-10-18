import React from 'react';

const ListaPelis = ({peliNueva, peliculas}) => {

    return (
      <>
          <h2>Películas:</h2>
          <div className="conteiner-pelis">
            {peliculas.map(peli => <div className="cardpeli">{peli}</div> )}
            <div className="cardpeli">{peliNueva}</div>
          </div>
      </>
    )
}
export default ListaPelis;