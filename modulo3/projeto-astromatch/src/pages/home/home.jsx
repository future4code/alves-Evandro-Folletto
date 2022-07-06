import React, {useState, useEffect} from "react";
import Perfis from "./../perfis/perfis";
import Matches from "./../matches/matches";
import axios from "axios";
// import { BASE_URL } from "../../constantes/BASE_URL";
import { Card, ContentImg, Image, Description, Bio } from "./styled_home"

export default function Home() {
  // const [currentScreen, setScreen] = useState("perfis");
  const [perfil, setPerfil] = useState({});
  // const [cont, setCont] = useState();
  // const [listMatchesMe, setListMatchesMe] = useState([]);
  // const [listMatches, setListMatches] = useState([]);
  // const [choice, setChoice] = useState(false);

  // const changeScreen = (screen) => {
  //   setScreen(screen);
  // };

  // const changeCont = (event) => {

  //   // choosePerson();

  //   setChoice(event.target.value);
  //   // console.log(event.target.value)

  //   setCont(cont + 1);
  //   // const click = Number(event.target.value);
  //   if (event) {
  //     for (let i=0 ; i<listMatchesMe.length ; i++) {
  //       // console.log(listMatchesMe[i].id)
  //       if (perfil.id === listMatchesMe[i].id) {
  //         console.log('deu match')
  //         const newList = [...listMatches, listMatchesMe[i]]
  //         setListMatches(newList)
  //         console.log(newList)
  //         break;
  //       }
  //     }
  //     // console.log(perfil.id);
  //   }
  // };

  // const takePerfil = () => {
  //   axios
  //     .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/evandro/person")
  //     .then((res)=>{
  //       // console.log('deu certo requisição de novo perfil');
  //       // console.log(res.data.profile);
  //       setPerfil(res.data.profile)
  //     })
  //     .catch((erro)=>{
  //       console.log('NÃO deu certo requisição de novo perfil');
  //       // alert('Ocorreu um erro ao carregar os serviços')
  //     });
  // };

  // Get Profile To Choose
  // useEffect(() => {
  //   axios
  //     .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/evandro/person")
  //     .then((res)=>{
  //       // console.log('deu certo requisição de novo perfil');
  //       // console.log(res.data.profile);
  //       // setPerfil(res.data.profile)
  //     })
  //     .catch((erro)=>{
  //       console.log('NÃO deu certo requisição de novo perfil');
  //       // alert('Ocorreu um erro ao carregar os serviços')
  //     });
  // },[]);

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

  // const takeListMatchesMe = () => {
  //   axios
  //     .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/evandro/matches")
  //     .then((res)=>{
  //       // console.log('deu certo requisição de lista de matches');
  //       // console.log(res.data.matches.length);
  //       for (let i=0 ; i<res.data.matches.length ; i++){
  //         // console.log(res.data.matches[i].name)
  //       }
  //       setListMatchesMe(res.data.matches)
  //     })
  //     .catch((erro)=>{
  //       console.log('NÃO deu certo requisição de lista de matches');
  //       // alert('Ocorreu um erro ao carregar os serviços')
  //     });
  // };

  // const choosePerson = () => {
  //   axios
  //     .post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/evandro/choose-person",
  //     {
  //       "id": perfil.id,
  //       "choice": choice
  //     },
  //     )
  //     .then((res)=>{
  //       // console.log('deu certo o POST');
  //       console.log(res.data);
  //       // setListMatchesMe(res.data.matches)
  //     })
  //     .catch((erro)=>{
  //       // console.log('NÃO deu certo o POST');
  //       console.log(erro.message);
  //       // alert('Ocorreu um erro ao carregar os serviços')
  //     });
  // };

  // useEffect( () => {
  //   takePerfil();
  // },[]);
  // },[cont]);

  // useEffect( () => {
  //   choosePerson();
  // },[cont]);

  // useEffect( () => {
  //   takeListMatchesMe();
  // },[]);

  // const chooseScreen = () => {
  //   switch(currentScreen) {
  //     case "perfis":
  //       return (
  //         <Perfis
  //         changeScreen={changeScreen}
  //         perfil={perfil}
  //         changeCont={changeCont}
  //         />
  //       )
  //     case "matches":
  //       return (
  //         <Matches
  //           changeScreen={changeScreen}
  //           listMatches={listMatches}
  //         />
  //       )
  //     default:
  //       return <></>
  //   }
  // }

  // return (
  //   <div>
  //     {chooseScreen()}
  //   </div>
  // );

  // return (
  //   <Card>
  //     <ContentImg>
  //       <Image src={perfil.photo} alt={perfil.photo_alt}/>
  //     </ContentImg>
  //     <Description>{`${perfil.name},${perfil.age}`}</Description>
  //     <Bio>{perfil.bio}</Bio>
  //   </Card>
  // );
};