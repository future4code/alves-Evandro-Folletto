import * as s from './styled-Header';
import { useNavigate } from "react-router-dom";
import { goToIndex, goToApplicationFormPage } from "./../../routes/coordinator.js";

export default function Header_(props) {
  const navigate = useNavigate();
  return (
    <s.Header>
      <s.ButtonBack onClick={() => goToIndex(navigate)}>Voltar</s.ButtonBack>
      <s.Search
        type="text"
        onChange={props.onSearchName}
        value={props.searchName}
        placeholder="Buscar por planeta"
      />

      <s.OrderBy
        value={props.ordenation}
        onChange={props.updateOrdenation}
      >
        <option value="" disabled selected>Ordenar por:</option>
        <option value="planet">Nome dos Planetas</option>
        <option value="date">Data</option>
        <option value="duration-cre">Duração (crescente)</option>
        <option value="duration-dec">Duração (decrescente)</option>
      </s.OrderBy>

      <s.MinValue
        type="number"
        onChange={props.onMinimunDuration}
        value={props.minimunDuration}
        placeholder="Duração mín. (dias)"
      />
      <s.MaxValue
        type="number"
        onChange={props.onMaximunDuration}
        value={props.maximunDuration}
        placeholder="Duração Máx. (dias)"
      />
      <s.ButtonSignUp onClick={() => goToApplicationFormPage(navigate)}>Inscrever-se</s.ButtonSignUp>
    </s.Header>
  )
};