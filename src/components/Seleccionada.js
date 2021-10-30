import React from 'react';

import css from './Seleccionada.module.css';

const Seleccionada = ({seleccionada}) => {
    return (
        <h2 className={css.titulo}>
            Seleccionada: {seleccionada}
        </h2>
    )
}

export default Seleccionada;