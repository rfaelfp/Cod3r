import React from 'react';
import ReactDOM from 'react-dom';
import Primeiro from './componentes/Primeiro';
import BomDia from './componentes/BomDia';

import Multi, { BoaNoite} from './componentes/Multiplos'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho';

import Saudacao from './componentes/Saudacao'

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro" sobrenome="Silva"/>
            <Filho nome="Paulo" sobrenome="Silva"/>
            <Filho nome="Carla" sobrenome="Silva"/>
        </Pai>

    </div>,
    
    document.getElementById('root'));