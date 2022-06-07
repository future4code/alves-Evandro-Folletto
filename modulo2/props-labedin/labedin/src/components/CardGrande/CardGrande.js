import React from 'react';
import { CardGrandeDiv, CardGrandeEstilizacao, CardGrandeh4, CardGrandeImg } from './styled';

function CardGrande(props) {
    return (

        <CardGrandeEstilizacao>
            <CardGrandeImg src={ props.imagem } />
            <CardGrandeDiv>
                <CardGrandeh4>{ props.nome }</CardGrandeh4>
                <p>{ props.descricao }</p>
            </CardGrandeDiv>
        </CardGrandeEstilizacao>

    )
}

export default CardGrande;