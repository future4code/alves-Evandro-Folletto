import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Geral, Container, Formulario, Titulo, Input, TextArea, Buttons, ButtonBack, ButtonCreate, SelectOrdenar, OptionOrdenar, DivSelect, Data, DataInput } from './styled-CreateTripPage'
import useForm from "./../../hooks/useForm";
import { goToAdminHomePage } from "./../../routes/coordinator.js"



export default function CreateTripPage() {
  const navigate = useNavigate();

  const createTrip = (nome, planeta, data, texto, duracao) => {
    const token = localStorage.getItem('token');
    axios
      .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/evandro-folletto-alves/trips`,
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
        console.log('Deu certo a criação de uma viagem = ',res)
      })
      .catch(erro => alert('Deu errado a criação de uma viagem'))
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
    <Geral>
      <Container>

        <Formulario onSubmit={cadastrar}>
          <input
            name={"nome"}
            value={form.nome}
            onChange={onChange}
            placeholder="Nome"
            required
            type={"text"}
            pattern={"^.{5,}"}
            title={"O nome deve ter no mínimo 5 letras"}
          />

          <select
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
          </select>

          <input
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

          <input
            name={"texto"}
            value={form.texto}
            onChange={onChange}
            placeholder="Descrição"
            required
            type={"text"}
            pattern={"^.{30,}"}
            title={"São necessários pelo menos 30 caracters"}
          />

          <input
            name={"duracao"}
            value={form.duracao}
            onChange={onChange}
            placeholder="Duração"
            required
            type={"number"}
            pattern={"^.{50,}"}
            title={"A duração mínima deve ser de 50 dias"}
          />

          {/* <Buttons> */}
          <button onClick={() => goToAdminHomePage(navigate)}>Voltar</button>
          <button>Enviar</button>
          {/* </Buttons> */}
        </Formulario>

      </Container>
    </Geral>
  );
};