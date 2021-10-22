import React from 'react';
import { useState } from 'react';
import Card from './Card';

const Fila = ({calificacion, setSeleccionada, seleccionada, borrarSeleccionada, agregarPelicula}) => {

    const [listaDePeliculas, setListaDePeliculas] = useState([])

    function sumarLista() {
        if (seleccionada.length > 1) {
            setListaDePeliculas(listaDePeliculas =>[...listaDePeliculas.filter(pelicula=> pelicula !== seleccionada), seleccionada])
            borrarSeleccionada()
            }
    }
    function eliminarDeFila(peli) {
      setListaDePeliculas(listaDePeliculas => [...listaDePeliculas.filter(pelicula => pelicula !== peli )])
      agregarPelicula(peli);
    }

    return (
        <div>
          <div className="row">
            <div className={"col " + calificacion.toLowerCase()}>
              <p onClick={sumarLista} >{calificacion}</p>
            </div>
            <div className="pelis">
              {listaDePeliculas.map(peli=> <Card peli={peli}
                                                setSeleccionada={()=>{}}
                                                seleccionada={seleccionada}
                                                eliminar={eliminarDeFila}
                                          />)}
            </div>
            <div className="col">
              {listaDePeliculas.length}
            </div>
          </div>

        </div>
    )
}

export default Fila;