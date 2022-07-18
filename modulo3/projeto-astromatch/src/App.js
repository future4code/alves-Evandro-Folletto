import React, {useState, useEffect} from "react";
import Home from "./pages/home/home";
import GlobalStyle from './styles/global';
import axios from "axios";

function App() {
  
  // const getAProfileToChoose = () => {
  //   console.log("entrou na função");
  //   axios
  //     .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/evandro-folletto-alves/person`)
  //     .then( res => console.log(res.data.profile.name) )
  //     .catch( error => alert('Deu erro!') )
  // }

  // useEffect(() => {
  //   console.log("entrou no useEffect");
  //   getAProfileToChoose()
  // }, [])

  return (
    <div>
      <GlobalStyle/>
      <Home/>
    </div>
  );
}

export default App;