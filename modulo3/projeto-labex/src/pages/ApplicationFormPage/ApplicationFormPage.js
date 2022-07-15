import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { goToListTripsPage } from "./../../routes/coordinator.js"
import { Geral, Container, TituloCadastro, Titulo, Input, TextArea, Buttons, ButtonBack, ButtonCreate, SelectOrdenar, OptionOrdenar, DivSelect } from './styled-ApplicationFormPage'
import useForm from "./../../hooks/useForm";

export default function ApplicationFormPage() {
  const navigate = useNavigate();

  const [trips, setTrips] = useState([]);

  const getTrips = () => {
    axios
      .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/evandro-folletto-alves/trips`)
      .then(res => {
        setTrips(res.data.trips);
        console.log(res.data.trips)
      })
      .catch(erro => alert('Deu errado o getTrip'))
  }

  useEffect(() => {
    getTrips();
  }, [])

  const applyToTrip = (idViagem, nome, idade, texto, profissao, pais) => {
    axios
      .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/evandro-folletto-alves/trips/${idViagem}/apply`,
        {
          "name": nome,
          "age": idade,
          "applicationText": texto,
          "profession": profissao,
          "country": pais
        })
      .then(res => {
        console.log("Deu certo a aplicação pra viagem")
        console.log(res)
      })
      .catch(erro => alert("Deu errado a aplicação pra viagem"))
  }

  const { form, onChange, cleanFields } = useForm({
    idViagem: "",
    nome: "",
    idade: "",
    texto: "",
    profissao: "",
    pais: "",
  })

  const cadastrar = (event) => {
    event.preventDefault();
    cleanFields();
    applyToTrip(
      form.idViagem,
      form.nome,
      form.idade,
      form.texto,
      form.profissao,
      form.pais
    );
  }

  return (
    <Geral>
      <Container>
        <TituloCadastro>Inscrever-se para uma viagem</TituloCadastro>

        <form onSubmit={cadastrar}>

          <select
            name={"idViagem"}
            value={form.idViagem}
            onChange={onChange}
          >
            <option value="" selected disabled>Escolha uma viagem</option>
            {trips.map(trip => {
              return (
                <option value={trip.id}>{trip.name} - {trip.planet}</option>
              )
            })}
          </select>

          <input
            name={"nome"}
            value={form.nome}
            onChange={onChange}
            placeholder="Nome"
            required
            type={"text"}
            pattern={"^.{3,}"}
            title={"O nome deve ter no mínimo 3 letras"}
          />

          <input
            name={"idade"}
            value={form.idade}
            onChange={onChange}
            placeholder="Idade"
            required
            type={"number"}
            min={18}
            title={"A idade deve ser no mínimo 18 anos"}
          />

          <input
            name={"texto"}
            value={form.texto}
            onChange={onChange}
            placeholder="Texto da candidatura"
            required
            type={"text"}
            pattern={"^.{30,}"}
            title={"São necessários pelo menos 30 caracters"}
          />

          <input
            name={"profissao"}
            value={form.profissao}
            onChange={onChange}
            placeholder="Profissão"
            required
            type={"text"}
            pattern={"^.{10,}"}
            title={"São necessários pelo menos 10 caracters"}
          />

          <select
            name={"pais"}
            value={form.pais}
            onChange={onChange}
          >
            <option value="" selected disabled>Escolha um país</option>
            <option value="Brasil">Brasil</option>
            <option value="Argentina">Argentina</option>
            <option value="Paraguai">Paraguai</option>
            <option value="Uruguai">Uruguai</option>
            <option value="Chile">Chile</option>
          </select>

          {/* <Buttons> */}
          <button onClick={() => goToListTripsPage(navigate)}>Voltar</button>
          <button>Enviar</button>
          {/* </Buttons> */}
        </form>

      </Container>
    </Geral>
  );
};