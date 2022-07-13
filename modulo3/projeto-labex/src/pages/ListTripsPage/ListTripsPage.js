import { useNavigate } from "react-router-dom";
import {Geral, Header, ButtonBack, ButtonSignUp, MinValue, MaxValue, Buscar, OrderBy, Lista, Card} from './styled-ListTripsPage'
import {goBack, goToApplicationFormPage} from "./../../routes/coordinator.js"

export default function ListTripsPage() {
  const navigate = useNavigate();

  const teste = {
    nome: "Planeta Vegeta",
    descricao: "O planeta do homem mais poderoso de todas as galáxias, Son Goku!",
    planeta: "Terra",
    duracao: 100,
    data: 2024-12-31
  }

  return (
    <Geral>
      <Header>
        <ButtonBack onClick={()=>goBack(navigate)}>Voltar</ButtonBack>
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
        <ButtonSignUp onClick={()=>goToApplicationFormPage(navigate)}>Inscrever-se</ButtonSignUp>
      </Header>

      <Lista>
        <Card>
          <h2>Nome: {teste.nome}</h2>
          <p><strong>Descrição:</strong> {teste.descricao}</p>
          <p><strong>Planeta:</strong> {teste.planeta}</p>
          <p><strong>Duração:</strong> {teste.duracao}</p>
          <p><strong>Data:</strong> {teste.data}</p>
        </Card>
      </Lista>

    </Geral>
  );
};