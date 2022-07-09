import React, {useState, useEffect} from "react";
import Inicio from "./../inicio/inicio";
import About from "./../about/about";
import Perfis from "./../perfis/perfis";
import Matches from "./../matches/matches";
import axios from "axios";
import {BASE_URL} from "./../../constants/BASE_URL";

export default function Home() {

  const [currentScreen, setScreen] = useState("inicio");
  const [perfil, setPerfil] = useState({});
  const [listMatchesMe, setListMatchesMe] = useState([]);
  const [erro, setErro] = useState(false);
  // const [alertMatch, setAlertMatch] = useState(false);

  useEffect(() => {
    getAProfileToChoose()
  }, [])

  const nome = "evandro-150-alves"
  const getAProfileToChoose = () => {
    axios
      .get(`${BASE_URL}/${nome}/person`)
      .then( res => {
        setPerfil(res.data.profile);
        // setAlertMatch(false);
      })
      .catch( error => {
        setPerfil({})
        setErro(true);
      });
  }

  const getMatches = () => {
    axios
      .get(`${BASE_URL}/${nome}/matches`)
      .then( res => {
        setListMatchesMe(res.data.matches)
        changeScreen("matches");
      })
      .catch( error => alert('NÃO deu certo requisição de lista de matches') );
  };

  const choosePerson = () => {
    axios
      .post(`${BASE_URL}/${nome}/choose-person`,
      {
        "id": perfil.id,
        "choice": true
      })
      .then( res => {
        if(res.data.isMatch ) alert("hmm, deu match :)");
        // if(res.data.isMatch ) setAlertMatch(true);
        
      })
      .catch( erro => alert('NÃO deu certo o choosePerson') );
  };

  const clear = () => {
    axios
      .put(`${BASE_URL}/${nome}/clear`)
      .then( res => {
        setErro(false);
        getAProfileToChoose();
      })
      .catch( erro => alert('NÃO deu certo o clear') );
  };

  const changeScreen = (screen) => {
    setScreen(screen);
  };

  const click_like = () => {
    choosePerson();
    getAProfileToChoose();
  }

  const click_dislike = () => {
    getAProfileToChoose();
  }

  const chooseScreen = () => {
    switch(currentScreen) {
      case "inicio":
        return (
          <Inicio 
            changeScreen={changeScreen}
          />
        )
      case "about":
        return (
          <About
            changeScreen={changeScreen}
          />
        )
      case "perfis":
        return (
          <Perfis
          changeScreen={changeScreen}
          getMatches={getMatches}
          perfil={perfil}
          click_like={click_like}
          click_dislike={click_dislike}
          clear={clear}
          erro={erro}
          // alertMatch={alertMatch}
          />
        )
      case "matches":
        return (
          <Matches
            changeScreen={changeScreen}
            listMatchesMe={listMatchesMe}
          />
        )
      default:
        return <></>
    }
  }

  return (
    <div>
      {chooseScreen()}
    </div>
  );
};