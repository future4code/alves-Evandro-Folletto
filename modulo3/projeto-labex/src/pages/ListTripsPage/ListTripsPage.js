import { useState } from "react";
import * as s from './styled-ListTripsPage'
import Card from '../../components/CardList/Card';
import Header from '../../components/HeaderListTripsPage/Header';
import { useGetTrips } from "./../../hooks/useRequestData";

export default function ListTripsPage() {

  const [buscaNome, setBuscaNome] = useState("");
  const [duracaoMinima, setDuracaoMinima] = useState("");
  const [duracaoMaxima, setDuracaoMaxima] = useState("");
  const [ordenacao, setOrdenacao] = useState("título");

  const trips = useGetTrips('/trips',[])

  const onDuracaoMinima = (event) => {
    setDuracaoMinima(event.target.value);
  }

  const onDuracaoMaxima = (event) => {
    setDuracaoMaxima(event.target.value);
  }

  const onBuscaNome = (event) => {
    setBuscaNome(event.target.value);
  }

  const atualizaOrdenacao = (event) => {
    setOrdenacao(event.target.value)
  }

  const listaTrips = trips
    .filter( trip => {
      return duracaoMinima === "" || Number(trip.durationInDays) >= duracaoMinima
    })
    .filter( trip => {
      return duracaoMaxima === "" || Number(trip.durationInDays) <= duracaoMaxima
    })
    .filter( trip => {
      return trip.planet.toLowerCase().includes(buscaNome.toLowerCase())
    })
    .sort( (viagemAtual, proximaViagem) => {
      if (ordenacao === "planeta") {
        return (1) * viagemAtual.planet.localeCompare(proximaViagem.planet)
      } else if (ordenacao === "data") {
        return (1) * (new Date(viagemAtual.dueDate).getTime() - new Date(proximaViagem.dueDate).getTime())
      } else if (ordenacao === "duracao-cre") {
        return (1) * (viagemAtual.durationInDays - proximaViagem.durationInDays)
      } else {
        return (-1) * (viagemAtual.durationInDays - proximaViagem.durationInDays)
      }
    })
    .map( trip => {
      return (
        <Card key={trip.id}
        name={trip.name}
        description={trip.description}
        planet={trip.planet}
        durationInDays={trip.durationInDays}
        date={trip.date}
        />
      )
    })

  return (
    <s.Geral>

      <Header
        onBuscaNome={onBuscaNome}
        // buscaNome={buscaNome}
        atualizaOrdenacao={atualizaOrdenacao}
        onDuracaoMinima={onDuracaoMinima}
        onDuracaoMaxima={onDuracaoMaxima}
        // duracaoMinima={duracaoMinima}
        // duracaoMaxima={duracaoMaxima}
      />

      <s.Title>
        <s.Text>
          Lista de viagens disponíveis
        </s.Text>
      </s.Title>

      <s.Lista>
        {listaTrips}
      </s.Lista>

    </s.Geral>
  );
};