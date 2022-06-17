import React from 'react';

export function PerguntaAberta(props) {
    return (
        <>
            <p>{props.pergunta}</p>
            <input type="text" />
        </>
    )
}