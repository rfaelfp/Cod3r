import React, { Fragment } from 'react';

export default props => [
    <h1 key="h1">Bom dia {props.nome}</h1>,
    <h2 key="h2">Até breve</h2>
]


/*
    <Fragment>
    <h1>Bom dia {props.nome}</h1>
    <h2>Até breve</h2>
    </Fragment>

ou 

    <div>
    <h1>Bom dia {props.nome}</h1>
    <h2>Até breve</h2>
    </div>

*/