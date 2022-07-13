import { useNavigate } from "react-router-dom";
import { Container } from '../ApplicationFormPage/styled-ApplicationFormPage';
import { Geral, Lista, Titulo, Buttons, ButtonBack, ButtonCreate, ButtonLogout} from './styled-AdminHomePage'
import {goBack} from "./../../routes/coordinator.js"

export default function AdminHomePage() {
  const navigate = useNavigate();

  const teste =[ "a","b","c","d","e"];
  const listaViagens = teste.map(viagem => {
    return (
      <Lista>
        <Titulo>{`${viagem}`}</Titulo>
        <button>Excluir</button>
        {/* <ImagemLixeira src={img_lixeira} /> */}
      </Lista>
    )
  })

  return (
    <Geral>


      <Container>
        <h1>Painel Administrativo</h1>

        <Buttons>
          <ButtonBack onClick={()=>goBack(navigate)}>Voltar</ButtonBack>
          <ButtonCreate>Criar Viagem</ButtonCreate>
          <ButtonLogout>Logout</ButtonLogout>
        </Buttons>
      
        {listaViagens}
      </Container>

    </Geral>
  );
}; 