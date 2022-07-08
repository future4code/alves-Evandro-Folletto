import React, {useState, useEffect} from "react";
import Inicio from "./../inicio/inicio";
import About from "./../about/about";
import Perfis from "./../perfis/perfis";
import Matches from "./../matches/matches";
import axios from "axios";
// import { BASE_URL } from "../../constantes/BASE_URL";

export default function Home() {

  const [currentScreen, setScreen] = useState("inicio");
  const [perfil, setPerfil] = useState({});
  const [listMatchesMe, setListMatchesMe] = useState([]);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    getAProfileToChoose()
  }, [])

  const nome = "evandro-150-alves"
  const getAProfileToChoose = () => {
    axios
      .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${nome}/person`)
      .then( res => {
        setPerfil(res.data.profile);
      })
      .catch( error => {
        setPerfil({})
        // alert('Reinicie os matches');
        setErro(true);
      });
  }

  const getMatches = () => {
    axios
      .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${nome}/matches`)
      .then( res => {
        setListMatchesMe(res.data.matches)
        changeScreen("matches");
      })
      .catch( error => console.log('NÃO deu certo requisição de lista de matches') );
  };

  const choosePerson = () => {
    axios
      .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${nome}/choose-person`,
      {
        "id": perfil.id,
        "choice": true
      })
      .then( res => {
        if(res.data.isMatch ) alert("hmm, deu match :)");
      })
      .catch( erro => console.log('NÃO deu certo o choosePerson') );
  };

  const clear = () => {
    axios
      .put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${nome}/clear`)
      .then( res => {
        setErro(false);
        getAProfileToChoose();
      })
      .catch( erro => console.log('NÃO deu certo o clear') );
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