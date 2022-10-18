import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as s from './styled-ProductsPage';
import { goToHistoricPage } from "./../../router/coordinator.js";
import axios from 'axios';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Card from '../../components/card-product/CardProduct';
import { BASE_URL } from '../../constants/BASE_URL';
import Pagination from '../../components/pagination/Pagination';

export default function FeedPage() {

  const navigate = useNavigate();

  const [products, setProducts] = useState([])
  const [cartDB, setCartDB] = useState([])

  const [numProdPgn, setNumProdPgn] = useState(0);
  const [searchName, setSearchName] = useState("");
  const [minimunPrice, setMinimunPrice] = useState();
  const [maximunPrice, setMaximunPrice] = useState();
  const [ordenation, setOrdenation] = useState();
  const [actualPage, setActualPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [numTotalProducts, setNumTotalProducts] = useState();
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [searchProfile, setSearchProfile] = useState();

  const getProfile = () => {
    axios
      .get(`${BASE_URL}/${searchProfile}`)
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        const errorCode = error.response.status;
        if (errorCode >= 400 && errorCode < 500) {
          alert(`Erro ${errorCode}: ${error.response.data.message}!`)
        } else {
          alert(`Erro no servidor, tente novamente mais tarde!`)
        }
      })
  }

  const updateNumProdPgn = (event) => {
    setNumProdPgn(Number(event.target.value));
  }

  const onMinimunPrice = (event) => {
    setMinimunPrice(Number(event.target.value));
  }

  const onMaximunPrice = (event) => {
    setMaximunPrice(Number(event.target.value));
  }

  const onSearchName = (event) => {
    setSearchName(event.target.value);
  }

  const updateOrdenation = (event) => {
    setOrdenation(event.target.value)
  }

  const onChangeSearchProfile = (event) => {
    setSearchProfile(event.target.value);
  }

  return (
    <s.General>

      <s.CenterBox>
        <s.InputSearch
          value={searchProfile}
          onChange={onChangeSearchProfile}
          placeholder="Git profile..."
          type={"text"}
        />

        <s.Buttons>
          <s.ButtonHistoric onClick={() => goToHistoricPage(navigate)}> Histórico </s.ButtonHistoric>
          <s.ButtonSearch onClick={getProfile}> Pesquisar </s.ButtonSearch>
        </s.Buttons>
      </s.CenterBox>

    </s.General>
  )
}