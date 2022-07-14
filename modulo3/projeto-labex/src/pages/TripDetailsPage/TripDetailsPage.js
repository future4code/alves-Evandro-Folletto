import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from '../HomePage/styled-HomePage';
import { Geral, Card, Card2, Card3, ButtonBack } from './styled-TripDetailsPage'
import useProtectedPage from './../../hooks/useProtectedPage';
import { goToAdminHomePage } from "./../../routes/coordinator.js"

export default function TripDetailsPage() {
  const params = useParams();
  const navigate = useNavigate();
  useProtectedPage();

  console.log(params);

  const [trip, setTrip] = useState({});

  const TripDetails = () => {
    const token = localStorage.getItem('token');
    axios
    .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/evandro-folletto-alves/trip/${params.id}`,
    {
      headers: 
      {
        auth: token
      }
    })
    .then( res => {
      console.log('Deu certo os detalhes da viagem:', res.data.trip);
      setTrip(res.data.trip);
    })
    .catch( erro => {
      console.log('Deu errado os detalhes da viagem', erro);
    });
  }

  useEffect(()=>{
    TripDetails();
  },[])

  return (
    <Geral>
      <Container>
        <Card>
        <h1>Nome: {trip.name}</h1>
        <p><strong>Descrição:</strong> {trip.description}</p>
        <p><strong>Planeta:</strong> {trip.planet}</p>
        <p><strong>Duração (dias):</strong> {trip.durationInDays}</p>
        <p><strong>Data:</strong> {trip.date}</p>
        </Card>

        <ButtonBack onClick={()=>goToAdminHomePage(navigate)}>Voltar</ButtonBack>

        <Card2>
        <h2>Candidatos pendentes</h2>
        </Card2>

        <Card3>
        <h2>Candidatos aprovados</h2>
        </Card3>
      </Container>
      
    </Geral>
  );
}; 