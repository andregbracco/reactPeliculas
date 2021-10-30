import React from 'react';
import { useState } from 'react';
import Card from '../Card';

import css from './Fila.module.css';

const Fila = ({calificacion, seleccionada, borrarSeleccionada, agregarPelicula}) => {

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
          <div className={css.row}>
            <div className={css.col + ' ' + css[calificacion.toLowerCase()]}>
              <p onClick={sumarLista} >{calificacion}</p>
            </div>
            <div className={css.pelis}>
              {listaDePeliculas.map(peli=> <Card peli={peli}
                                                setSeleccionada={()=>{}}
                                                seleccionada={seleccionada}
                                                eliminar={eliminarDeFila}
                                          />)}
            </div>
            <div className={css.col}>
              {listaDePeliculas.length}
            </div>
          </div>

        </div>
    )
}

export default Fila;