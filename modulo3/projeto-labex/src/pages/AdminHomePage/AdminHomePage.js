import {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as s from './styled-AdminHomePage'
import { goToIndex, goToLoginPage, goToTripDetailsPage, goToCreatetripPage } from "./../../routes/coordinator.js"
import img_lixeira from './../../assets/img/lixeira.png';
import useProtectedPage from './../../hooks/useProtectedPage';

export default function AdminHomePage() {
  const navigate = useNavigate();
  useProtectedPage();

  const [trips, setTrips] = useState([]);

  const token = localStorage.getItem('token');

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
      <s.Lista key={trip.id}>
        <s.ButtonTrip id={trip.id} onClick={()=>goToTripDetailsPage(navigate, trip.id)}>{trip.name}</s.ButtonTrip>
        <s.ImagemLixeira onClick={()=>deleteTrip(trip.id)} src={img_lixeira} />
      </s.Lista>
    )
  })

  const goToLogout = () => {
    // localStorage.clear();
    localStorage.removeItem("token");
    goToIndex(navigate);
  }
  
  return (
    <s.Geral>

      <s.Container>
        <h1>Painel Administrativo</h1>

        <s.Buttons>
          <s.ButtonBack onClick={()=>goToIndex(navigate)}>Voltar</s.ButtonBack>
          <s.ButtonCreate onClick={()=>goToCreatetripPage(navigate)}>Criar Viagem</s.ButtonCreate>
          <s.ButtonLogin onClick={token === null ? ()=>goToLoginPage(navigate) : goToLogout}>{token === null ? "Login" : "Logout"}</s.ButtonLogin>
        </s.Buttons>
      
        {listaViagens}
      </s.Container>

    </s.Geral>
  );
};