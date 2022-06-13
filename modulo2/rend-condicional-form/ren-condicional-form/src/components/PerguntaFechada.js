import React from 'react';

export function PerguntaFechada(props) {
    return (
        <>
            <p>{props.pergunta}</p>
            <select>
                {props.opcoes.map((opc) => {
                    return <option> {opc} </option>
                })}
                {/* <option value="Ensino médio incompleto"> Ensino médio incompleto</option> */}
                {/* <option value="Ensino médio completo"> Ensino médio completo</option> */}
                {/* <option value="Ensino superior incompleto"> Ensino superior incompleto</option> */}
                {/* <option value="Ensino superior completo"> Ensino superior completo</option> */}
            </select>
        </>
    )
}