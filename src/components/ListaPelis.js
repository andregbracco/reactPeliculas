import React from 'react';
import '../App.css';
import Card from './Card';

const ListaPelis = ({peliculas, seleccionada, setSeleccionada, eliminar }) => {
    
    return (
      <>
          <h2>Movies:</h2>
          <div className="conteiner-pelis">

            {peliculas.map(peli => <Card
                                        peli={peli}
                                        setSeleccionada={setSeleccionada}
                                        seleccionada={seleccionada}
                                        eliminar={eliminar}
                                    /> 

                            )
            }
          </div>
      </>
    )
}
export default ListaPelis;