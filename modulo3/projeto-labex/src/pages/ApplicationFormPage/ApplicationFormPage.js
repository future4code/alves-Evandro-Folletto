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
  
  const applyToTrip = (idTrip, name, age, text, profession, country) => {
    axios
      .post(`${BASE_URL}/trips/${idTrip}/apply`,
        {
          "name": name,
          "age": age,
          "applicationText": text,
          "profession": profession,
          "country": country
        })
      .then(res => {
        alert("Candidatura enviada com sucesso!")
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
    idTrip: "",
    name: "",
    age: "",
    text: "",
    profession: "",
    country: "",
  })

  const register = (event) => {
    event.preventDefault();
    cleanFields();
    applyToTrip(
      form.idTrip,
      form.name,
      form.age,
      form.text,
      form.profession,
      form.country
    );
  }

  return (
    <s.General>
      <s.Container>
        <s.TitleRegistration>Inscrever-se</s.TitleRegistration>

        <s.Form onSubmit={register}>

          <s.Select
            name={"idTrip"}
            value={form.idTrip}
            onChange={onChange}
          >
            <option value="" selected disabled>Escolha uma viagem</option>
            {trips.map(trip => {
              return (
                <option key={trip.id} value={trip.id}>{trip.name} - {trip.planet}</option>
              )
            })}
          </s.Select>

          <s.Input
            name={"name"}
            value={form.name}
            onChange={onChange}
            placeholder="Nome"
            required
            type={"text"}
            pattern={"^.{3,}"}
            title={"O nome deve ter no mínimo 3 letras"}
          />

          <s.Input
            name={"age"}
            value={form.age}
            onChange={onChange}
            placeholder="Idade"
            required
            type={"number"}
            min={18}
            title={"A idade deve ser no mínimo 18 anos"}
          />

          <s.InputCandidatura
            name={"text"}
            value={form.text}
            onChange={onChange}
            placeholder="Texto da candidatura"
            required
            type={"text"}
            pattern={"^.{30,}"}
            title={"São necessários pelo menos 30 caracters"}
          />

          <s.Input
            name={"profession"}
            value={form.profession}
            onChange={onChange}
            placeholder="Profissão"
            required
            type={"text"}
            pattern={"^.{10,}"}
            title={"São necessários pelo menos 10 caracters"}
          />

          <s.Select
            name={"country"}
            value={form.country}
            onChange={onChange}
            // required
          >
            <option value="" selected disabled>Selecione seu país</option>
            <option value="Brasil">Brasil</option>
            <option value="Argentina">Argentina</option>
            <option value="Paraguai">Paraguai</option>
            <option value="Uruguai">Uruguai</option>
            <option value="Chile">Chile</option>
          </s.Select>

          <s.Buttons>
            <s.ButtonBack onClick={() => goToListTripsPage(navigate)}>Voltar</s.ButtonBack>
            <s.ButtonCreate>Enviar</s.ButtonCreate>
          </s.Buttons>
        </s.Form>

      </s.Container>
    </s.General>
  );
};