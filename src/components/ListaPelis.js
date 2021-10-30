import React from 'react';
import '../App.css';
import Card from './Card';
import styled from 'styled-components';

const Div = styled.div `
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  &:hover {
    justify-content: space-between;
  }
`

const ListaPelis = ({peliculas, seleccionada, setSeleccionada, eliminar }) => {
    
    return (
      <div>
          <h2>Películas:</h2>
          <Div>
            {peliculas.map(peli => 
              <Card
                  key={peli}
                  peli={peli}
                  setSeleccionada={setSeleccionada}
                  seleccionada={seleccionada}
                  eliminar={eliminar}
              /> 
            )
            }
          </Div>
      </div>
    )
}
export default ListaPelis;