import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as s from './styled-CreateTripPage'
import useForm from "./../../hooks/useForm";
import { goToAdminHomePage } from "./../../routes/coordinator.js"
import { BASE_URL } from "./../../constants/BASE_URL";

export default function CreateTripPage() {
  const navigate = useNavigate();

  const createTrip = (nome, planeta, data, texto, duracao) => {
    const token = localStorage.getItem('token');
    axios
      .post(`${BASE_URL}/trips`,
      {
        "name": nome,
        "planet": planeta,
        "date": data,
        "description": texto,
        "durationInDays": duracao
      },
      {
        headers: 
        {
          auth: token
        }
      })
      .then(res => {
        alert(`A viagem "${nome}" foi criada com sucesso!`)
      })
      .catch(erro => {
        if(erro.statusCode >= 400 && erro.statusCode < 500) {
          alert("Ocorreu algum erro no formulário, revise suas informações");
        } else if (erro.statusCode >= 500 && erro.statusCode < 600)
        alert("Ocorreu um erro no servidor, tente novamente mais tarde");
      })
  }

  const { form, onChange, cleanFields } = useForm({
    nome: "",
    planeta: "",
    data: "",
    texto: "",
    duracao: "",
  })
  
  const cadastrar = (event) => {
    event.preventDefault();
    cleanFields();
    createTrip(
      form.nome,
      form.planeta,
      form.data,
      form.texto,
      form.duracao
    );
  }

  return (
    <s.Geral>
      <s.Container>
        <s.TituloCadastro>Criar viagem</s.TituloCadastro>

        <s.Formulario onSubmit={cadastrar}>
          <s.Input
            name={"nome"}
            value={form.nome}
            onChange={onChange}
            placeholder="Nome"
            required
            type={"text"}
            pattern={"^.{5,}"}
            title={"O nome deve ter no mínimo 5 letras"}
          />

          <s.Selecionar
            name={"planeta"}
            value={form.planeta}
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
          </s.Selecionar>

          <s.Input
            name={"data"}
            value={form.data}
            onChange={onChange}
            placeholder="data"
            required
            type={"date"}
            // pattern={}
            // min={getDate()}
            title={"Não podem ser escolhidas datas no passado"}
          />

          <s.InputDescricao
            name={"texto"}
            value={form.texto}
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
        </s.Formulario>

      </s.Container>
    </s.Geral>
  );
};