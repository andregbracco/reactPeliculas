import React from 'react';

const Card = ({peli, setPeliculas}) => {

    function eliminar(peli) {
      setPeliculas(peliculas => [...peliculas.filter(pelicula => pelicula !== peli )]);
    }
    return (
        <div className="cardpeli">
            <p className="nombrePeli">{peli}</p>
            <button onClick={()=> eliminar(peli)} className="delete">X</button>
        </div>
    )
}
export default Card;


