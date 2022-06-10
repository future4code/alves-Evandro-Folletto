import React from 'react';
import './CardPequeno.css';

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <img src={ props.imagem } />
            <div>
                <h4>{ props.tipo }&nbsp;</h4>
                <p>{ props.email }</p>
            </div>
        </div>
    )
}

export default CardPequeno;