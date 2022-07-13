import { useNavigate } from "react-router-dom";
import { Container, Titulo, Buttons, ButtonTrip, ButtonAdmin, ButtonAbout } from "./styled-HomePage";
import {goToListTripsPage, goToAdminHomePage, goToAboutPage} from "./../../routes/coordinator.js"

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Container>

      <Titulo>Seja bem vindo(a) ao</Titulo>

      <Titulo>LabeX</Titulo>

      <Buttons>
        <ButtonTrip onClick={()=>goToListTripsPage(navigate)}>Lista de viagens</ButtonTrip>
        <ButtonAdmin onClick={()=>goToAdminHomePage(navigate)}>Área restrita</ButtonAdmin>
        <ButtonAbout onClick={()=>goToAboutPage(navigate)}>Sobre</ButtonAbout>
      </Buttons>

    </Container>
  );
};