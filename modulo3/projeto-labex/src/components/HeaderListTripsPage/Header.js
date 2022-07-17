import * as s from './styled-Header';
import { useNavigate } from "react-router-dom";
import { goToIndex, goToApplicationFormPage } from "./../../routes/coordinator.js";

export default function Header_(props) {
  const navigate = useNavigate();
  return (
    <s.Header>
      <s.ButtonBack onClick={() => goToIndex(navigate)}>Voltar</s.ButtonBack>
      <s.Buscar
        type="text"
        onChange={props.onBuscaNome}
        // value={props.buscaNome}
        placeholder="Buscar por planeta"
      />

      <s.OrderBy
        // value={ordenacao}
        onChange={props.atualizaOrdenacao}
      >
        <option value="" disabled selected>Ordenar por:</option>
        <option value="planeta">Nome dos Planetas</option>
        <option value="data">Data</option>
        <option value="duracao-cre">Duração (crescente)</option>
        <option value="duracao-dec">Duração (decrescente)</option>
      </s.OrderBy>

      <s.MinValue
        type="number"
        onChange={props.onDuracaoMinima}
        value={props.duracaoMinima}
        placeholder="Duração mín. (dias)"
      />
      <s.MaxValue
        type="number"
        onChange={props.onDuracaoMaxima}
        value={props.duracaoMaxima}
        placeholder="Duração Máx. (dias)"
      />
      <s.ButtonSignUp onClick={() => goToApplicationFormPage(navigate)}>Inscrever-se</s.ButtonSignUp>
    </s.Header>
  )
};