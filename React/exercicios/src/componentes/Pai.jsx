import React, { Component } from 'react';
import Filho from './Filho'

export default props =>
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {
                React.children.map(props.children, child => {
                    return React.cloneElement(child, {
                        ...props, ...props.child.props
                    })

                })
            }
        </ul>
    </div>