import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as s from './styled-CreateTripPage'
import useForm from "./../../hooks/useForm";
import { goToAdminHomePage } from "./../../routes/coordinator.js"
import { BASE_URL } from "./../../constants/BASE_URL";

export default function CreateTripPage() {
  const navigate = useNavigate();

  const createTrip = (name, planet, date, text, duracao) => {
    const token = localStorage.getItem('token');
    axios
      .post(`${BASE_URL}/trips`,
      {
        "name": name,
        "planet": planet,
        "date": date,
        "description": text,
        "durationInDays": duracao
      },
      {
        headers: 
        {
          auth: token
        }
      })
      .then(res => {
        alert(`A viagem "${name}" foi criada com sucesso!`)
      })
      .catch(error => {
        const errorCode = error.response.request.status;
        if(errorCode >= 400 && errorCode < 500) {
          alert("Ocorreu algum erro de preenchimento no formulário, revise suas informações");
        } else if (errorCode >= 500 && errorCode < 600)
          alert("Ocorreu um erro no servidor, tente novamente mais tarde");
      })
  }

  const { form, onChange, cleanFields } = useForm({
    name: "",
    planet: "",
    date: "",
    text: "",
    duracao: "",
  })
  
  const register = (event) => {
    event.preventDefault();
    cleanFields();
    createTrip(
      form.name,
      form.planet,
      form.date,
      form.text,
      form.duracao
    );
  }

  return (
    <s.General>
      <s.Container>
        <s.RegistrationTitle>Criar viagem</s.RegistrationTitle>

        <s.Form onSubmit={register}>
          <s.Input
            name={"name"}
            value={form.name}
            onChange={onChange}
            placeholder="Nome"
            required
            type={"text"}
            pattern={"^.{5,}"}
            title={"O nome deve ter no mínimo 5 letras"}
          />

          <s.Select
            name={"planet"}
            value={form.planet}
            onChange={onChange}
          >
            <option value="" selected disabled>Escolha um planeta</option>
            <option value="Mercúrio">Mercúrio</option>
            <option value="Vênus">Vênus</option>
            <option value="Terra">Terra</option>
            <option value="Marte">Marte</option>
            <option value="Júpiter">Júpiter</option>
            <option value="Saturno">Saturno</option>
            <option value="Urano">Urano</option>
            <option value="Netuno">Netuno</option>
            <option value="Plutão">Plutão</option>
          </s.Select>

          <s.Input
            name={"date"}
            value={form.date}
            onChange={onChange}
            placeholder="data"
            required
            type={"date"}
            // pattern={}
            // min={getDate()}
            title={"Não podem ser escolhidas datas no passado"}
          />

          <s.InputDescription
            name={"text"}
            value={form.text}
            onChange={onChange}
            placeholder="Descrição"
            required
            type={"text"}
            pattern={"^.{30,}"}
            title={"São necessários pelo menos 30 caracters"}
          />

          <s.Input
            name={"duracao"}
            value={form.duracao}
            onChange={onChange}
            placeholder="Duração (dias)"
            required
            type={"number"}
            pattern={"^.{50,}"}
            title={"A duração mínima deve ser de 50 dias"}
          />

          <s.Buttons>
            <s.ButtonBack onClick={() => goToAdminHomePage(navigate)}>Voltar</s.ButtonBack>
            <s.ButtonCreate>Enviar</s.ButtonCreate>
          </s.Buttons>
        </s.Form>

      </s.Container>
    </s.General>
  );
};