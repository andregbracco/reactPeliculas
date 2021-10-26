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
    
    function borrarSeleccionada() {
      setPeliculas(
        peliculas.filter(peli=> peli!==seleccionada)
      )
      setSeleccionada('')
    }

    function eliminar(peli) {
      setPeliculas(peliculas => [...peliculas.filter(pelicula => pelicula !== peli )]);
    }

    function agregarPelicula(peli) {
      setPeliculas([...peliculas, peli])
    }

  return (
    <div className="contenedor">
        <div className="tabla">
          <Cabecera calificaciones='Rating!' listadoPeliculas='Movies' columna3='Count'/>
          <Fila agregarPelicula={agregarPelicula} calificacion='Excellent' seleccionada={seleccionada} borrarSeleccionada={borrarSeleccionada}/>
          <Fila agregarPelicula={agregarPelicula} calificacion='Good' seleccionada={seleccionada} borrarSeleccionada={borrarSeleccionada}/>
          <Fila agregarPelicula={agregarPelicula} calificacion='Regular' seleccionada={seleccionada} borrarSeleccionada={borrarSeleccionada}/>
          <Fila agregarPelicula={agregarPelicula} calificacion='Bad' seleccionada={seleccionada} borrarSeleccionada={borrarSeleccionada}/>
          <Fila agregarPelicula={agregarPelicula} calificacion='Terrible' seleccionada={seleccionada} borrarSeleccionada={borrarSeleccionada}/>

          <ListaPelis 
                      peliculas={peliculas}
                      seleccionada={seleccionada}
                      setSeleccionada={setSeleccionada}
                      eliminar={eliminar}
                     
          />

          <IngresaNuevoJuego setPeliculas={setPeliculas}  setPeliNueva={setPeliNueva}/>

          <Seleccionada seleccionada={seleccionada} />
      </div>
    </div>
  );
}

export default App;
