import { useState } from 'react';
import './App.css';
import listaPelis from './datos/listaPelis'

import IngresaNuevoJuego from './components/IngresaNuevoJuego';
import ListaPelis from './components/ListaPelis';
import Cabecera from './components/Cabecera';
import Fila from './components/Fila';
import Seleccionada from './components/Seleccionada';

function App() {

    const [peliNueva, setPeliNueva] = useState('Peli Nueva');
    const [peliculas, setPeliculas] = useState(listaPelis);
    const [seleccionada, setSeleccionada] = useState('');

    function tomaValor(evento) {
        setPeliNueva(evento.target.value)
    }

  return (
    <div className="contenedor">
        <div className="tabla">
          <Cabecera calificaciones='Califícame' listadoPeliculas='Películas' columna3='Cantidad'/>
          <Fila calificacion='Excelente' seleccionada={seleccionada} setSeleccionada={setSeleccionada}/>
          <Fila calificacion='Bueno' seleccionada={seleccionada} setSeleccionada={setSeleccionada}/>
          <Fila calificacion='Regular' seleccionada={seleccionada} setSeleccionada={setSeleccionada} />
          <Fila calificacion='Malo' seleccionada={seleccionada} setSeleccionada={setSeleccionada} />
          <Fila calificacion='Hediondo' seleccionada={seleccionada} setSeleccionada={setSeleccionada} />

          <ListaPelis setPeliculas={setPeliculas}
                      peliculas={peliculas}
                      peliNueva={peliNueva}
                      seleccionada={seleccionada}
                      setSeleccionada={setSeleccionada}
          />

          <IngresaNuevoJuego setPeliculas={setPeliculas}  setPeliNueva={setPeliNueva}/>

          <Seleccionada seleccionada={seleccionada} />
      </div>
    </div>
  );
}

export default App;
