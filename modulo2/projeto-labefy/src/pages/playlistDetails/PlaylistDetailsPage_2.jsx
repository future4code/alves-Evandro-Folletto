// import React, {Component} from "react";
// import styled from "styled-components";

// const Body = styled.body`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100vw;
//   height: 100vh;
//   border: 1px solid red;
//   box-sizing: border-box;
// `

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   border: 1px solid red;
//   box-sizing: border-box;
// `

// const ListaMusicas = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   /* align-items: center; */
//   /* border: 1px solid red; */
//   /* box-sizing: border-box; */
// `

// const Linha = styled.div`
//   display: flex;
//   justify-content: space-between;
// `

// const ButtonsDown = styled.div`
//   display: flex;
//   justify-content: space-between;
// `

// const ButtonAdd = styled.button`
//   height: 30px;
//   width: 100%;
//   margin: 50px 20px 0 10px;
//   text-align: center;
//   background-color: lightgreen;
//   border: 1px solid black;
//   cursor: pointer;
// `

// const ButtonBack = styled.button`
//   height: 30px;
//   width: 100%;
//   margin: 50px 10px 0 20px;
//   text-align: center;
//   border: 1px solid black;
//   background-color: lightblue;
//   cursor: pointer;
// ` 

// const ButtonRemove = styled.button`
//   margin: 0 5px;
//   cursor: pointer;
// `

// const ButtonPlay = styled.button`
//   margin: 0 5px;
//   cursor: pointer;
// `

// const ButtonsUp = styled.div`
//   display: flex;
// `

// const MusicName = styled.div`
//   display: flex;
// `

// export default class PlaylistsDetails_ extends Component {
//   state = {
//     audio: this.props.playlistMusics.map( music => {
//       return new Audio(music.url)
//     }),
//     isPlaying: this.props.playlistMusics.map( music => {
//       return false
//     }),
//   }

//   playPause = async (event) => {
//     this.props.playlistMusics.forEach( (music,i) => {
//       if (music.id === event.target.id) {
//         const aux = [...this.state.isPlaying];
//         aux[i] = !this.state.isPlaying[i];
//         this.setState({isPlaying: aux})
//       }
//     })

//     const id = event.target.value;
//     if (this.state.isPlaying[id]) {
//       try {
//         await this.state.audio[id].pause();
//       } catch (e) {
//         console.log(e)
//       }
//     } else {
//       try {
//         await this.state.audio[id].play();
//       } catch (e) {
//         console.log(e)
//       }
//     }

//     // const id = event.target.id;
//     // if (this.state.isPlaying[id]) {
//     //   this.state.audio[id].pause();
//     // } else {
//     //   this.state.audio[id].play();
//     // }

//     // const id = event.target.id;
//     // if (this.state.isPlaying[id]) {
//     //   var pausePromise = this.state.audio[id].pause();
//     //   if (pausePromise !== undefined) {
//     //     pausePromise.then(function() {
//     //     }).catch(function(error) {
//     //   });
//     // }
//     // } else {
//     //   this.state.audio[id].play();
//     //   var playPromise = this.state.audio[id].play();
//     //   if (playPromise !== undefined) {
//     //     playPromise.then(function() {
//     //     }).catch(function(error) {
//     //     });
//     // }
//     // }
    
//   }
  
//   render() {
//     console.log('playlistMusics = ', this.props.playlistMusics);
//     console.log('audio = ', this.state.audio);
//     const playlist = this.props.playlistMusics.map( (music,i) => {
//       return (
//         <Linha>
//           <MusicName>
//             {music.name}
//           </MusicName>
//           <ButtonsUp>
//             <audio src={music.url} controls></audio>
//             {/* <ButtonPlay id={music.id} value={i} onClick={this.playPause}>{this.state.isPlaying[i] ? 'Pause' : 'Play'}</ButtonPlay> */}
//             {/* <ButtonRemove id={music.id} onClick={this.props.removeMusic}>Remover</ButtonRemove> */}
//             <ButtonRemove id={music.id} onClick={this.props.removeToRemove}>Remover</ButtonRemove>
//           </ButtonsUp>
//         </Linha>
//       ) 
//     })
//     return (
//       <Body>

//             <Container>
//               <div>{this.props.playlistDetailName}</div>
//               <ListaMusicas>
//                 {playlist}
//               </ListaMusicas>

//               <ButtonsDown>
//                 <ButtonBack onClick={() => this.props.changeScreen("list")}>Voltar</ButtonBack>
//                 <ButtonAdd onClick={() => this.props.changeScreen("addMusic")}>Adicionar Música</ButtonAdd>
//               </ButtonsDown>
//             </Container>

//       </Body>
//     )
//   }
// }
