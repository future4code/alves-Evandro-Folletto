import { useNavigate } from "react-router-dom";
import * as s from "./styled-AboutPage";
import {goBack} from "./../../routes/coordinator.js"

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <s.Geral>

      <s.Textos>
        <s.Titulo>Projeto Astromatch</s.Titulo>
        
        <s.Text>
          O Projeto LabeX foi desenvolvido como uma atividade dentro do curso Full-Stack Web Developer da Labenu, o qual consiste em requisições para a API desenvolvida pela equipe da Labenu, via axios.
        </s.Text>

        <s.Text>
          Trata-se de uma ferramenta onde tanto usuários quanto administradores podem navegar:
          <br/>
          - os usuários podem verificar as viagens disponíveis e candidatar-se para as mesmas;
          <br/>
          - os administradores podem visualizar as viagens disponíveis, criar novas e detetar as existentes. Além disso, é possível ver detalhes das viagens, onde são apresentados os usuários que estão pendentes de aprovação/reprovação e também aqueles já foram aprovados.
        </s.Text>

        <s.Text>
          As requisições utilizadas para realizar este projeto foram:
        </s.Text>

        <s.Text>
          <b>- Get Trips:</b> retorna todas as viagens presentes no banco de dados;
          <br/>
          <b>- Get Trip Detail:</b> retorna os detalhes de uma viagem específica (incluindo candidatos aprovados e os dependentes de aprovação/reprovação);
          <br/>
          <b>- Create Trip:</b> endpoint que cria uma nova viagem.
          <br/>
          <b>- Apply to Trip:</b> recebe informações de um candidato e o relaciona a uma viagem.
          <br/>
          <b>- Delete Trip:</b> endpoint que deleta uma determinada viagem;
          <br/>
          <b>- Login:</b> endpoint para fazer login de um usuário.
          <br/>
          <b>- Decide Candidate:</b> endpoint para decidir a aprovação ou reprovação de um candidato para uma viagem.
          <br/>
          <b>- Populate*:</b> endpoint para popular o banco de dados para testes;
          <br/>
          <b>- Signup*:</b> endpoint utilizado para criar usuário admin.
          <br/>
          *endpoints utilizados apenas em desenvolvimento
        </s.Text>

        <s.DesenvolvidoPor>
          Desenvolvido por: Evandro Paulo Folletto
        </s.DesenvolvidoPor>
      </s.Textos>


      <s.ButtonBack onClick={()=>goBack(navigate)}>Voltar</s.ButtonBack>
    </s.Geral>
  );
};