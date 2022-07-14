import {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container } from '../ApplicationFormPage/styled-ApplicationFormPage';
import { Geral, Lista, ImagemLixeira, Buttons, ButtonBack, ButtonCreate, ButtonLogin} from './styled-AdminHomePage'
import { goToIndex, goToLoginPage, goToTripDetailsPage } from "./../../routes/coordinator.js"
import img_lixeira from './../../assets/img/lixeira.png';

export default function AdminHomePage() {
  const navigate = useNavigate();

  const [trips, setTrips] = useState([]);

  const getTrips = () => {
    axios
    .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/evandro-folletto-alves/trips`)
    .then( res => {
      setTrips(res.data.trips);
    }) 
    .catch( erro => alert('Deu errado o getTrip'))
  }

  useEffect(()=>{
    getTrips();
  },[])

  const deleteTrip = (id) => {
    const token = localStorage.getItem('token');
    axios
    .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/evandro-folletto-alves/trips/${id}`,
    {
      headers: 
      {
        auth: token
      }
    })
    .then( res => {
      console.log('Trip deletada com sucesso');
      getTrips();
    }) 
    .catch( erro => alert('Não foi possível deletar a trip clicada'))
  }

  const listaViagens =trips.map(trip => {
    return (
      <Lista key={trip.id}>
        <button id={trip.id} onClick={()=>goToTripDetailsPage(navigate, trip.id)}>{trip.name}</button>
        <ImagemLixeira onClick={()=>deleteTrip(trip.id)} src={img_lixeira} />
      </Lista>
    )
  })

  return (
    <Geral>

      <Container>
        <h1>Painel Administrativo</h1>

        <Buttons>
          <ButtonBack onClick={()=>goToIndex(navigate)}>Voltar</ButtonBack>
          <ButtonCreate>Criar Viagem</ButtonCreate>
          <ButtonLogin onClick={()=>goToLoginPage(navigate)}>Login</ButtonLogin>
        </Buttons>
      
        {listaViagens}
      </Container>

    </Geral>
  );
}; 