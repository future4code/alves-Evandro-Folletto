import React, {useState, useEffect} from 'react';
import axios from "axios";

function PokeCard(props) {
  const [pokemon, setPokemon] = useState({});

  // ----------------------------------
  // DUAS OPÇÕES DE USO DO useEffect():
  // ----------------------------------
  
  // 1a Opção:
  // ----------------------------------
  useEffect( () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${props.pokeName}`)
      .then((res) => {
        setPokemon(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.pokeName]); // ou pokemon?

  // 2a Opção:
  // ----------------------------------
  // const getPokemons = () => {
  //   axios
  //     .get(`https://pokeapi.co/api/v2/pokemon/${props.pokeName}`)
  //     .then((res) => {
  //       setPokemon(res.data)
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  // useEffect( () => {
  //   getPokemons()
  // },[pokemon])

  return (
    <figure>
      <strong>{pokemon.name && pokemon.name.toUpperCase()}</strong>
      <p>Peso: {pokemon.weight} g</p>
      <p>Tipo: {pokemon.types && pokemon.types[0].type.name}</p>
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
    </figure>
  );
};

export default PokeCard;
