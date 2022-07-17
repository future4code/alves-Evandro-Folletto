import { useNavigate } from "react-router-dom";
import * as s from "./styled-HomePage";
import {goToListTripsPage, goToAdminHomePage, goToAboutPage} from "./../../routes/coordinator.js";
import img_astro from './../../assets/img/astronauta.png';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <s.Container>

      <s.Titulo>Seja bem vindo(a) ao</s.Titulo>

      <s.Central>
        <s.ImgAstro src={img_astro}/>
        <s.Titulo1>Labe</s.Titulo1>
        <s.Titulo2>X</s.Titulo2>
      </s.Central>

      <s.Buttons>
        <s.ButtonTrip onClick={()=>goToListTripsPage(navigate)}>Listar viagens</s.ButtonTrip>
        <s.ButtonAdmin onClick={()=>goToAdminHomePage(navigate)}>Área restrita</s.ButtonAdmin>
        <s.ButtonAbout onClick={()=>goToAboutPage(navigate)}>Sobre</s.ButtonAbout>
      </s.Buttons>

    </s.Container>
  );
};