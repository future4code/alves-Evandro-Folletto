import {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as s from './styled-AdminHomePage'
import { goToIndex, goToLoginPage, goToTripDetailsPage, goToCreatetripPage } from "./../../routes/coordinator.js"
import img_trash from './../../assets/img/trash.png';
import useProtectedPage from './../../hooks/useProtectedPage';
import { BASE_URL } from "./../../constants/BASE_URL";

export default function AdminHomePage() {
  const navigate = useNavigate();
  useProtectedPage();

  const [trips, setTrips] = useState([]);

  const token = localStorage.getItem('token');

  const getTrips = () => {
    axios
    .get(`${BASE_URL}/trips`)
    .then( res => {
      setTrips(res.data.trips);
    }) 
    .catch( erro => alert('Deu errado o getTrip'))
  }

  useEffect(()=>{
    getTrips();
  },[])

  const deleteTrip = (id, name) => {
    const confirm = window.confirm(`Deseja realmentar deletar a viagem "${name}"?`);

    if(confirm) {
      const token = localStorage.getItem('token');
      axios
      .delete(`${BASE_URL}/trips/${id}`,
      {
        headers: 
        {
          auth: token
        }
      })
      .then( res => {
        alert(`A viagem "${name}" foi deletada com sucesso!`);
        getTrips();
      }) 
      .catch( erro => alert(`A viagem "${name}" não foi deletada com sucesso!`))
    }
  }

  const listaViagens =trips.map(trip => {
    return (
      <s.List key={trip.id}>
        <s.ButtonTrip id={trip.id} onClick={()=>goToTripDetailsPage(navigate, trip.id)}>{trip.name}</s.ButtonTrip>
        <s.ImageTrash onClick={()=>deleteTrip(trip.id, trip.name)} src={img_trash} />
      </s.List>
    )
  })

  const goToLogout = () => {
    // localStorage.clear();
    localStorage.removeItem("token");
    goToIndex(navigate);
  }
  
  return (
    <s.General>

      <s.Container>
        <s.PanelTitle>Painel Administrativo</s.PanelTitle>

        <s.Buttons>
          <s.ButtonBack onClick={()=>goToIndex(navigate)}>Voltar</s.ButtonBack>
          <s.ButtonCreate onClick={()=>goToCreatetripPage(navigate)}>Criar Viagem</s.ButtonCreate>
          <s.ButtonLogin onClick={token === null ? ()=>goToLoginPage(navigate) : goToLogout}>{token === null ? "Login" : "Logout"}</s.ButtonLogin>
        </s.Buttons>
      
        {listaViagens}
      </s.Container>

    </s.General>
  );
};