import React from 'react';
import { CardPequenoImg, ImagemButtonEstilizacao } from './styled';

function ImagemButton(props) {
    return (

        <ImagemButtonEstilizacao>
            <CardPequenoImg src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ImagemButtonEstilizacao>

    )
}

export default ImagemButton;