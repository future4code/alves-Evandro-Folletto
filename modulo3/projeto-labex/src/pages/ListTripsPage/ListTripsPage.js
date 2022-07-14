import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Geral, Header, Title, Text, ButtonBack, ButtonSignUp, MinValue, MaxValue, Buscar, OrderBy, Lista } from './styled-ListTripsPage'
import { goBack, goToApplicationFormPage } from "./../../routes/coordinator.js";
import Card from './../../components/Card';

export default function ListTripsPage() {
  const navigate = useNavigate();

  const [trips, setTrips] = useState([]);

  const getTrips = () => {
    axios
      .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/evandro-folletto-alves/trips`)
      .then(res => {
        setTrips(res.data.trips);
        console.log(res)
      })
      .catch(erro => alert('Deu errado o getTrip'))
  }

  useEffect(() => {
    getTrips();
  }, [])

  const listaTrips = trips.map( trip => {
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
        <ButtonBack onClick={() => goBack(navigate)}>Voltar</ButtonBack>
        <Buscar
          placeholder="Buscar"
        />
        <OrderBy>
          <option>Preço crescente</option>
          <option>Preço decrescente</option>
          <option>Título</option>
          <option>Prazo</option>
        </OrderBy>
        <MinValue
          placeholder="Valor Mínimo"
        />
        <MaxValue
          placeholder="Valor Máximo"
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