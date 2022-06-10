import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Entradas = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Inputs = styled.input`
  width: 296px;
  border: 1px solid gray;
  height: 30px;
  margin-bottom: 4px;
`

const Adicionar = styled.button`
  width: 100%;
  border: 1px solid gray;
  height: 40px;
  margin: 4px;
  background-color: lightgray;
  color: black;
  font-size: 16px;
`

// class App extends React.Component {
//   render() {
//     return (
//       <MainContainer>
//         <Post
//           nomeUsuario={'paulinha'}
//           fotoUsuario={'https://picsum.photos/50/50'}
//           fotoPost={'https://picsum.photos/200/150'}
//         />
//         <Post
//           nomeUsuario={'pedrinho'}
//           fotoUsuario={'https://picsum.photos/50/51'}
//           fotoPost={'https://picsum.photos/200/151'}
//         />
//         <Post
//           nomeUsuario={'joãozinho'}
//           fotoUsuario={'https://picsum.photos/50/52'}
//           fotoPost={'https://picsum.photos/200/152'}
//         />
//       </MainContainer>
//     );
//   }
// }

class App extends React.Component {
  state = {
    post: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150",
      },
      {
        nomeUsuario: "pedrinho",
        fotoUsuario: "https://picsum.photos/50/51",
        fotoPost: "https://picsum.photos/200/151",
      },
      {
        nomeUsuario: "joãozinho",
        fotoUsuario: "https://picsum.photos/50/52",
        fotoPost: "https://picsum.photos/200/152",
      }
    ],
    valorInputNome: "",
    valorInputFoto: "",
    valorInputPost: ""
  };

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputFoto,
      fotoPost: this.state.valorInputPost
    };

    const auxiliarPost = [...this.state.post, novoPost];

    this.setState({ post: auxiliarPost, valorInputNome: "", valorInputFoto: "", valorInputPost: ""});
  };

  onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value });
  };

  onChangeInputFoto = (event) => {
    this.setState({ valorInputFoto: event.target.value });
  };

  onChangeInputPost = (event) => {
    this.setState({ valorInputPost: event.target.value });
  };

  render() {
    const listaDeComponentes = this.state.post.map((postagem) => {
      return (
          <Post
              nomeUsuario = {postagem.nomeUsuario}
              fotoUsuario = {postagem.fotoUsuario}
              fotoPost = {postagem.fotoPost}
          />
      );
    });

    return (
      <MainContainer>
        {listaDeComponentes}

        <Entradas>
        <Inputs
          value={this.state.valorInputNome}
          onChange={this.onChangeInputNome}
          placeholder={"Usuário"}
        />
        <Inputs
          value={this.state.valorInputFoto}
          onChange={this.onChangeInputFoto}
          placeholder={"Foto usuário"}
        />
        <Inputs
          value={this.state.valorInputPost}
          onChange={this.onChangeInputPost}
          placeholder={"Post"}
        />
        <Adicionar onClick={this.adicionaPost}>Adicionar</Adicionar>
        </Entradas>
      </MainContainer>
    );
  }
}

export default App;