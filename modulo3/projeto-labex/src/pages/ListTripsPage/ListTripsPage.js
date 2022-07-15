import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Geral, Header, Title, Text, ButtonBack, ButtonSignUp, MinValue, MaxValue, Buscar, OrderBy, Lista } from './styled-ListTripsPage'
import { goToIndex, goToApplicationFormPage } from "./../../routes/coordinator.js";
import Card from './../../components/Card';

export default function ListTripsPage() {
  const navigate = useNavigate();

  const [trips, setTrips] = useState([]);
  const [buscaNome, setBuscaNome] = useState("");
  const [duracaoMinima, setDuracaoMinima] = useState("");
  const [duracaoMaxima, setDuracaoMaxima] = useState("");
  const [ordenacao, setOrdenacao] = useState("título");

  const getTrips = () => {
    axios
      .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/evandro-folletto-alves/trips`)
      .then(res => {
        setTrips(res.data.trips);
      })
      .catch(erro => alert('Deu errado o getTrip'))
  }

  useEffect(() => {
    getTrips();
  }, [])

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
    <Geral>
      <Header>
        <ButtonBack onClick={() => goToIndex(navigate)}>Voltar</ButtonBack>
        <Buscar
          type="text"
          onChange={onBuscaNome}
          value={buscaNome}
          placeholder="Buscar por planeta"
        />
        <OrderBy
          // value={ordenacao}
          onChange={atualizaOrdenacao}
        >
          <option value="" disabled selected>Ordenar por:</option>
          <option value="planeta">Nome dos Planetas</option>
          <option value="data">Data</option>
          <option value="duracao-cre">Duração (crescente)</option>
          <option value="duracao-dec">Duração (decrescente)</option>
        </OrderBy>
        <MinValue
          type="number"
          onChange={onDuracaoMinima}
          value={duracaoMinima}
          placeholder="Duração mínima (dias)"
        />
        <MaxValue
          type="number"
          onChange={onDuracaoMaxima}
          value={duracaoMaxima}        
          placeholder="Duração Máxima (dias)"
        />
        <ButtonSignUp onClick={() => goToApplicationFormPage(navigate)}>Inscrever-se</ButtonSignUp>
      </Header>

      <Title>
        <Text>
          Lista de viagens disponíveis
        </Text>
      </Title>

      <Lista>
        {listaTrips}
      </Lista>

    </Geral>
  );
};