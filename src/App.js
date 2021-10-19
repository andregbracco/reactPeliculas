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
    const [excelente, setExcelente] = useState(['pocahontas', 'el padrino'])
    const [bueno, setBueno] = useState([])
    const [regular, setRegular] = useState([])
    const [malo, setMalo] = useState([])
    const [caca, setCaca] = useState(['dragon ball'])

    function tomaValor(evento) {
        setPeliNueva(evento.target.value)
    }

  return (
    <div className="tabla">
      <Cabecera calificaciones='Califícame' listadoPeliculas='Películas' columna3='Cantidad'/>
      <Fila calificaciones='Excelente' listadoPeliculas={excelente} setLista={setExcelente}/>
      <Fila calificaciones='Bueno' listadoPeliculas={bueno} setLista={setBueno}/>
      <Fila calificaciones='Regular' listadoPeliculas={regular} setLista={setRegular}/>
      <Fila calificaciones='Malo' listadoPeliculas={malo} setLista={setMalo}/>
      <Fila calificaciones='Caca' listadoPeliculas={caca} setLista={setCaca}/>

      <ListaPelis setPeliculas={setPeliculas} peliculas={peliculas} peliNueva={peliNueva} />

      <IngresaNuevoJuego setPeliculas={setPeliculas}  setPeliNueva={setPeliNueva}/>

  </div>

  );
}

export default App;
