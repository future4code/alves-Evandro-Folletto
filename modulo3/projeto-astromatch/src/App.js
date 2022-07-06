import React, {useState, useEffect} from "react";
import Home from "./pages/home/home";
import GlobalStyle from './styles/global';
import axios from "axios";

function App() {
  useEffect(() => {
    getAProfileToChoose()
  }, [])

  const getAProfileToChoose = async () => {
  try {
    let profile = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/evandro/person`)
    // setPerfil(profile.data.profile)
    console.log(profile.data.profile.name)
  } catch (error) {
    alert('Ops! Ocorreu um erro no site, mas já estamos trabalhando para que você continue conhecendo novas pessoas!')
  }
  }

  return (
    <div>
      <GlobalStyle/>
      {/* <Home/> */}
    </div>
  );
}

export default App;