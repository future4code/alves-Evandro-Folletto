import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as s from './styled-HistoricPage';
import { goToSearchPage } from "./../../router/coordinator.js";
import Profile from './../../components/Profile';

export default function CartPage() {
  const navigate = useNavigate();

  const [listProfiles, setListProfiles] = useState([]);
  const [dataProfile, setDataProfile] = useState();
  const [profileExist, setprofileExist] = useState(false);

  const getHistoric = async () => {
    setListProfiles(JSON.parse(localStorage.getItem('listaProfiles')) || [])
  }
  useEffect(() => {
    getHistoric()
  }, [])

  const clearHistoric = () => {
    localStorage.setItem('listaProfiles', JSON.stringify([]));
    getHistoric();
  }

  const getProfile = (number) => {
    setprofileExist(true);
    setDataProfile(listProfiles[number])
  }

  const onChangeBox = (event) => {
    setprofileExist(false)
  }

  const searchesList = listProfiles && listProfiles
    .sort((a, b) => {
      return b.dateSearch - a.dateSearch
    })
    .map((profile, index) => {
      return (
        <s.SearchInfo onClick={() => getProfile(index)} value={index} key={index}>
          <s.SearchName> {profile.login} </s.SearchName>
        </s.SearchInfo>
      )
    })

  return (
    <s.General>
      {
        !profileExist ?
        <s.CenterBox>
            <h1>Histórico</h1>
              {
                searchesList.length > 0 ?
                  <s.List empty={searchesList.length > 0}> {searchesList} </s.List>
                :
                  <s.List empty={searchesList.length > 0}> <h2>Histórico vazio!</h2> </s.List>
              }
            <s.Buttons>
              <s.ButtonBack onClick={() => goToSearchPage(navigate)}> Voltar </s.ButtonBack>
              <s.ButtonClear onClick={clearHistoric}> Limpar Histórico </s.ButtonClear>
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