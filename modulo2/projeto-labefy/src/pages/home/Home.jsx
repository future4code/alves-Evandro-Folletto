import React, {Component} from "react";
import { Body, Container, Titulo, Buttons, ButtonAbout, ButtonList } from './Styled'

export default class Home_ extends Component {

  // ---------------------------------------------
  // IMPLEMENTAÇÕES SPOTIFY
  // ---------------------------------------------
  // constructor(props){
  // super(props);
  // const parametros = this.getHashParams();
  // parametros = this.getHashParams();
  // const token = parametros.access_token;
  // const token = "BQDqzr_4tqNkiZgfz__1SMPd4jBsd3JdjL3pU0Uln4JEbk6ucnez9vDijUtrbtR94C2LHY-91DA_qfjcWeeZ7IozxEmLVZ-M4hAFkTVVZwha3itqZvMa_WVya30vLtFH9fxtecfLA2YL3oxuxgiCZWMe9cS79YWjZ4QyN9CeDOYjLvx2XmaUgq1Uf3xDG-cqfhp4hQ";
  // token = "BQDqzr_4tqNkiZgfz__1SMPd4jBsd3JdjL3pU0Uln4JEbk6ucnez9vDijUtrbtR94C2LHY-91DA_qfjcWeeZ7IozxEmLVZ-M4hAFkTVVZwha3itqZvMa_WVya30vLtFH9fxtecfLA2YL3oxuxgiCZWMe9cS79YWjZ4QyN9CeDOYjLvx2XmaUgq1Uf3xDG-cqfhp4hQ";
  // token = this.getHashParams().access_token;
  // }

  // spotify = () => {
  //   axios.get("https://api.spotify.com/v1/artists/163tK9Wjr9P9DmM0AVK7lm/top-tracks?country=BR",
  //     {
  //       headers:
  //       {
  //         Authorization: `Bearer ${this.token}`
  //       }
  //     }
  //   )
  //   .then(res => {
  //     console.log('deu certo')
  //     console.log(res.data.tracks[1].name)
  //   })
  //   .catch(err => {
  //     console.log('deu erro')
  //     console.log(err.response)
  //   })
  // };

  // getHashParams() {
  //   var hashParams = {};
  //   var e, r = /([^&;=]+)=?([^&;]*)/g,
  //       q = window.location.hash.substring(1);
  //   while ( e = r.exec(q)) {
  //      hashParams[e[1]] = decodeURIComponent(e[2]);
  //   }
  //   return hashParams;
  // }
  // ---------------------------------------------

  render() {
    return (
      <Body>
        <Container>

          <Titulo>Bem vindo(a) ao Labefy</Titulo>

          <Buttons>
            <ButtonList onClick={this.props.homeToList}>Ver Playlists</ButtonList>
            <ButtonAbout onClick={() => this.props.changeScreen("about")}>Sobre</ButtonAbout>
          </Buttons>

        </Container>
      </Body>
    )
  }
}
