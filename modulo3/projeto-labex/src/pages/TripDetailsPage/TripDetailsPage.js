import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Geral, Container, Container2, Container3, Header, Lista, TextoVazio, Card, Card3, ButtonBack } from './styled-TripDetailsPage'
import useProtectedPage from './../../hooks/useProtectedPage';
import { goToAdminHomePage } from "./../../routes/coordinator.js"
import Card2 from "./../../components/CardCandidate/CardCandidate.js"

export default function TripDetailsPage() {
  const params = useParams();
  const navigate = useNavigate();
  useProtectedPage();

  const [trip, setTrip] = useState({});
  const [candidates, setCandidates] = useState([]);
  const [approved, setApproved] = useState([]);

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
      setCandidates(res.data.trip.candidates);
      setApproved(res.data.trip.approved);
    })
    .catch( erro => {
      console.log('Deu errado os detalhes da viagem', erro);
    });
  }

  useEffect(()=>{
    TripDetails();
  },[])

  const decideCandidate = (idCandidate, valor) => {
    const token = localStorage.getItem('token');
    console.log("token = ",token);
    console.log("ID candidato = ",idCandidate);
    console.log("ID trip = ",trip.id);
    console.log("resposta = ",valor);
    axios
    .put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/evandro-folletto-alves/trips/${trip.id}/candidates/${idCandidate}/decide`,
    {
      "approve": valor
    },
    {
      headers: 
      {
        auth: token
      }
    })
    .then( res => {
      console.log('Deu certo a escolha do candidato', res);
      TripDetails()
    })
    .catch( erro => {
      console.log('Deu errado a escolha do candidato', erro);
    });
  }

  const listaCandidatos = candidates.map( candidate => {
    return (
      <Lista key={candidate.id}>
        <Card2
          name={candidate.name}
          profession={candidate.profession}
          age={candidate.age}
          country={candidate.country}
          text={candidate.applicationText}
          idCandidate={candidate.id}
          decideCandidate={decideCandidate}
        />
      </Lista>
    )
  })

  const listaAprovados = approved.map( candidate => {
    console.log(candidate.name)
    return (
      <Card3 key={candidate.id}>
        {candidate.name}
      </Card3>
    )
  })

  return (
    <Geral>
      <Header>
        <ButtonBack onClick={()=>goToAdminHomePage(navigate)}>Voltar</ButtonBack>
      </Header>
      <Container>
        <Card>
        <h1>Nome: {trip.name}</h1>
        <p><strong>Descrição:</strong> {trip.description}</p>
        <p><strong>Planeta:</strong> {trip.planet}</p>
        <p><strong>Duração (dias):</strong> {trip.durationInDays}</p>
        <p><strong>Data:</strong> {trip.date}</p>
        </Card>

        <Container2>
          <h2>Candidatos pendentes</h2>  
          {
            listaCandidatos.length !== 0 ? listaCandidatos
            :
            <TextoVazio>A lista de candidatos está vazia</TextoVazio>
          }
        </Container2>

        <Container3>
          <h2>Candidatos aprovados</h2>
          {
            listaAprovados.length !== 0 ? listaAprovados
            :
            <TextoVazio>A lista de aprovados está vazia</TextoVazio>
          }          
        </Container3>
      </Container>

    </Geral>
  );
}; 