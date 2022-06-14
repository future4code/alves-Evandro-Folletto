import React from 'react';

export function PerguntaFechada(props) {
    return (
        <>
            <p>{props.pergunta}</p>
            <select onChange={props.alterar}>
                {props.opcoes.map((opc) => {
                    return <option> {opc} </option>
                })}
            </select>
        </>
    )
}