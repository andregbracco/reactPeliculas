import React from 'react';
import '../App.css';
import Card from './Card';

const ListaPelis = ({peliNueva, peliculas, setPeliculas, seleccionada, setSeleccionada, estilo, setEstilo }) => {

    return (
      <>
          <h2>Películas:</h2>
          <div className="conteiner-pelis">
            {peliculas.map(peli => <Card
                                        peli={peli}
                                        setPeliculas={setPeliculas}
                                        setSeleccionada={setSeleccionada}
                                        estilo={estilo}
                                        setEstilo={setEstilo}
                                        seleccionada={seleccionada}
                                    /> )}
          </div>
      </>
    )
}
export default ListaPelis;