import { useState, useEffect } from 'react';
import axios from "axios";
import { BASE_URL } from "./../constants/BASE_URL";

function useGetTrips(complemento, initialState){
  const [date, setData] = useState(initialState);
  const url = `${BASE_URL}${complemento}`;

  useEffect(() => {
    axios
    .get(url)
    .then(res => {
      setData(res.data.trips);
    })
    .catch(erro => alert('Ocorreu um erro ao carregar a lista de viagens'))
  },[])

  return date;
}

function useApplyToTrip(complemento, name, age, text, profession, country){
  const url = `${BASE_URL}${complemento}`;

  axios
  .post(url,
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
  .catch(erro => {
    if(erro.statusCode >= 400 && erro.statusCode < 500) {
      alert("Ocorreu algum erro no formulário, revise suas informações");
    } else if (erro.statusCode >= 500 && erro.statusCode < 600)
    alert("Ocorreu um erro no servidor, tente novamente mais tarde");
  })
}

export { useGetTrips, useApplyToTrip }