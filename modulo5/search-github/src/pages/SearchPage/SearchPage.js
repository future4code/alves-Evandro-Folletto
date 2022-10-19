import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as s from './styled-SearchPage';
import { goToHistoricPage, goToStartPage } from "../../router/coordinator.js";
import axios from 'axios';
import Profile from '../../components/Profile';
import { BASE_URL } from '../../constants/BASE_URL';

export default function FeedPage() {

  const navigate = useNavigate();

  const [searchProfile, setSearchProfile] = useState();
  const [dataProfile, setDataProfile] = useState();
  const [profileExist, setprofileExist] = useState(false);

  let listaProfiles = JSON.parse(localStorage.getItem('listaProfiles')) || [];

  const getProfile = (name) => {
    if (searchProfile) {
      axios
        .get(`${BASE_URL}/${name}`)
        .then(res => {
          setprofileExist(true);
          setDataProfile(res.data);
          const newDataProfile = res.data;
          newDataProfile.dateSearch = Date.now();
          listaProfiles.push(newDataProfile);
          localStorage.setItem('listaProfiles', JSON.stringify(listaProfiles))
          setSearchProfile("")
        })
        .catch(error => {
          const errorCode = error.response.status;
          if (errorCode >= 400 && errorCode < 500) {
            alert("Usuário não encontrado!")
          } else {
            alert(`Erro no servidor, tente novamente mais tarde!`)
          }
        })
    } else {
      alert("Digite algo no campo de busca!")
    }
  }

  const onChangeSearchProfile = (event) => {
    setSearchProfile(event.target.value);
  }

  const onChangeBox = (event) => {
    setprofileExist(false)
  }

  return (
    <s.General>
      {
        !profileExist ?
          <s.CenterBox>
            <s.InputSearch
              value={searchProfile}
              onChange={onChangeSearchProfile}
              placeholder="Git profile..."
              type={"text"}
            />

            <s.Buttons>
              <s.ButtonBack onClick={() => goToStartPage(navigate)}> Voltar </s.ButtonBack>
              <s.ButtonHistoric onClick={() => goToHistoricPage(navigate)}> Histórico </s.ButtonHistoric>
              <s.ButtonSearch onClick={()=>getProfile(searchProfile)}> Pesquisar </s.ButtonSearch>
            </s.Buttons>
          </s.CenterBox>
          :
          <Profile 
            dataProfile={dataProfile}
            onChangeBox={onChangeBox}
          />
      }
    </s.General>
  )
}