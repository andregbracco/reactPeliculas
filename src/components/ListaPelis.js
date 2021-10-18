import React from 'react';
import '../App.css';


const ListaPelis = ({peliNueva, peliculas, setPeliculas }) => {

  function eliminar(peli) {
    setPeliculas(peliculas => [...peliculas.filter(pelicula => pelicula !== peli )]);
  }

    return (
      <>
          <h2>Películas:</h2>
          <div className="conteiner-pelis">
            {peliculas.map(peli => <div className="cardpeli">
                                        <p className="nombrePeli">{peli}</p>
                                        <button onClick={()=> eliminar(peli)} className="delete">X</button>
                                   </div> )}
          </div>
      </>
    )
}
export default ListaPelis;