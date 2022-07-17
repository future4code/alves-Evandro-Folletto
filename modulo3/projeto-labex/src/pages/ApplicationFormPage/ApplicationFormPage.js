import { useNavigate } from "react-router-dom";
import axios from "axios";
import { goToListTripsPage } from "./../../routes/coordinator.js"
import * as s from './styled-ApplicationFormPage'
import useForm from "./../../hooks/useForm";
import { BASE_URL } from "./../../constants/BASE_URL"
import { useGetTrips } from "./../../hooks/useRequestData";

export default function ApplicationFormPage() {
  const navigate = useNavigate();

  const trips = useGetTrips('/trips',[])
  
  const applyToTrip = (idViagem, nome, idade, texto, profissao, pais) => {
    axios
      .post(`${BASE_URL}/trips/${idViagem}/apply`,
        {
          "name": nome,
          "age": idade,
          "applicationText": texto,
          "profession": profissao,
          "country": pais
        })
      .then(res => {
        alert("Candidatura enviada com sucesso!")
      })
      .catch(erro => {
        if(erro.statusCode >= 400 && erro.statusCode < 500) {
          alert("Ocorreu algum erro no formulário, revise suas informações");
        } else if (erro.statusCode >= 500 && erro.statusCode < 600)
        alert("Ocorreu um erro no servidor, tente novamente mais tarde");
      })
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
    // useApplyToTrip(
      // `/trips/${form.idViagem}/apply`,
      form.idViagem,
      form.nome,
      form.idade,
      form.texto,
      form.profissao,
      form.pais
    );
  }

  return (
    <s.Geral>
      <s.Container>
        <s.TituloCadastro>Inscrever-se</s.TituloCadastro>

        <s.Formulario onSubmit={cadastrar}>

          <s.Selecionar
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
          </s.Selecionar>

          <s.Input
            name={"nome"}
            value={form.nome}
            onChange={onChange}
            placeholder="Nome"
            required
            type={"text"}
            pattern={"^.{3,}"}
            title={"O nome deve ter no mínimo 3 letras"}
          />

          <s.Input
            name={"idade"}
            value={form.idade}
            onChange={onChange}
            placeholder="Idade"
            required
            type={"number"}
            min={18}
            title={"A idade deve ser no mínimo 18 anos"}
          />

          <s.InputCandidatura
            name={"texto"}
            value={form.texto}
            onChange={onChange}
            placeholder="Texto da candidatura"
            required
            type={"text"}
            pattern={"^.{30,}"}
            title={"São necessários pelo menos 30 caracters"}
          />

          <s.Input
            name={"profissao"}
            value={form.profissao}
            onChange={onChange}
            placeholder="Profissão"
            required
            type={"text"}
            pattern={"^.{10,}"}
            title={"São necessários pelo menos 10 caracters"}
          />

          <s.Selecionar
            name={"pais"}
            value={form.pais}
            onChange={onChange}
          >
            <option value="" selected disabled>Selecione seu país</option>
            <option value="Brasil">Brasil</option>
            <option value="Argentina">Argentina</option>
            <option value="Paraguai">Paraguai</option>
            <option value="Uruguai">Uruguai</option>
            <option value="Chile">Chile</option>
          </s.Selecionar>

          <s.Buttons>
            <s.ButtonBack onClick={() => goToListTripsPage(navigate)}>Voltar</s.ButtonBack>
            <s.ButtonCreate>Enviar</s.ButtonCreate>
          </s.Buttons>
        </s.Formulario>

      </s.Container>
    </s.Geral>
  );
};