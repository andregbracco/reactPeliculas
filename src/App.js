import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="tabla">
      <div className="row cabecera">
        <div className="col">
          Calificame
        </div>
        <div className="pelis" >
          Películas
        </div>
        <div className="col" >
          Cantidad
        </div>
      </div>
      <div className="row">
        <div className="col">
          Excelente
        </div>
        <div className="pelis">
          <div className="cardpeli">lal</div>
            
        </div>
        <div className="col">
          0
        </div>
      </div>
      <div className="row">
        <div className="col">
          Bueno
        </div>
        <div className="pelis">

        </div>
        <div className="col">
          0
        </div>
      </div>
      <div className="row">
        <div className="col">
          Regulero
        </div>
        <div className="pelis">

        </div>
        <div className="col">
          0
        </div>
      </div>
      <div className="row">
        <div className="col">
          Malo
        </div>
        <div className="pelis">

        </div>
        <div className="col">
          0
        </div>
      </div>
      <div className="row">
        <div className="col">
          Caca
        </div>
        <div className="pelis">

        </div>
        <div className="col">
          0
        </div>
      </div>
      <h2>Películas:</h2>
      <div className="conteiner-pelis">
        <div className="cardpeli">bomboncito</div>
        <div className="cardpeli">lindo</div>
        <div className="cardpeli"></div>
        <div className="cardpeli"></div>
        <div className="cardpeli"></div>
        <div className="cardpeli"></div>
        <div className="cardpeli"></div>
        <div className="cardpeli"></div>
        <div className="cardpeli"></div>
        <div className="cardpeli"></div>
        <div className="cardpeli"></div>
        <div className="cardpeli"></div>
        <div className="cardpeli"></div>

      </div>
      <div className="agregar">
        <label>Nueva Película:</label>
        <input type="text" className="pelinueva" placeholder="Peli..."></input>
        <button >Agregar</button>
      </div>
  </div>

  );
}

export default App;
