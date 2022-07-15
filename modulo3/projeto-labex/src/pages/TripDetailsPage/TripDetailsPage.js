import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import * as s from './styled-TripDetailsPage'
import useProtectedPage from './../../hooks/useProtectedPage';
import { goToAdminHomePage } from "./../../routes/coordinator.js"
import CardCandidate from "./../../components/CardCandidate/CardCandidate.js"

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
      <s.Lista key={candidate.id}>
        <CardCandidate
          name={candidate.name}
          profession={candidate.profession}
          age={candidate.age}
          country={candidate.country}
          text={candidate.applicationText}
          idCandidate={candidate.id}
          decideCandidate={decideCandidate}
        />
      </s.Lista>
    )
  })

  const listaAprovados = approved.map( candidate => {
    console.log(candidate.name)
    return (
      <s.CardAprovados key={candidate.id}>
        Nome: {candidate.name}
      </s.CardAprovados>
    )
  })

  return (
    <s.Geral>
      <s.Header>
        <s.ButtonBack onClick={()=>goToAdminHomePage(navigate)}>Voltar</s.ButtonBack>
      </s.Header>
      <s.Container>
        <s.CardDosContainers>
          <s.Titulo>Detalhes da viagem</s.Titulo>
          <s.Container1>
            <s.Item><strong>Nome:</strong> {trip.name}</s.Item>
            <s.Item><strong>Descrição:</strong> {trip.description}</s.Item>
            <s.Item><strong>Planeta:</strong> {trip.planet}</s.Item>
            <s.Item><strong>Duração (dias):</strong> {trip.durationInDays}</s.Item>
            <s.Item><strong>Data:</strong> {trip.date}</s.Item>
          </s.Container1>
        </s.CardDosContainers>

        <s.CardDosContainers>
          <s.Titulo>Candidatos pendentes</s.Titulo>
          <s.Container2>
            {
              listaCandidatos.length !== 0 ? listaCandidatos
              :
              <s.TextoVazio>A lista de candidatos está vazia!</s.TextoVazio>
            }
          </s.Container2>
        </s.CardDosContainers>

        <s.CardDosContainers>
          <s.Titulo>Candidatos aprovados</s.Titulo>
          <s.Container3>
          {
            listaAprovados.length !== 0 ? listaAprovados
            :
            <s.TextoVazio>A lista de aprovados está vazia!</s.TextoVazio>
          }          
        </s.Container3>
        </s.CardDosContainers>
      </s.Container>

    </s.Geral>
  );
}; 