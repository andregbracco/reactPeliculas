import { useState } from 'react';
import './App.css';
import listaPelis from './datos/listaPelis'

import IngresaNuevoJuego from './components/IngresaNuevoJuego';
import ListaPelis from './components/ListaPelis'
import Cabecera from './components/Cabecera'
import Fila from './components/Fila'

function App() {

    const [peliNueva, setPeliNueva] = useState('Peli Nueva');
    const [peliculas, setPeliculas] = useState(listaPelis);


    function tomaValor(evento) {
        setPeliNueva(evento.target.value)
    }

  return (
    <div className="tabla">
      <Cabecera columna1='Califícame' columna2='Películas' columna3='Cantidad'/>
      <Fila columna1='Excelente' columna2='' columna3='0'/>
      <Fila columna1='Bueno' columna2='' columna3='0'/>
      <Fila columna1='Regular' columna2='' columna3='0'/>
      <Fila columna1='Malo' columna2='' columna3='0'/>
      <Fila columna1='Caca' columna2='' columna3='0'/>

      <ListaPelis peliculas={peliculas} peliNueva={peliNueva} />

      <IngresaNuevoJuego setPeliNueva={setPeliNueva}/>

  </div>

  );
}

export default App;
