import React from 'react';
import '../App.css';
import Card from './Card';

const ListaPelis = ({peliNueva, peliculas, setPeliculas }) => {

    return (
      <>
          <h2>Películas:</h2>
          <div className="conteiner-pelis">
            {peliculas.map(peli => <Card peli={peli} setPeliculas={setPeliculas} /> )}
          </div>
      </>
    )
}
export default ListaPelis;