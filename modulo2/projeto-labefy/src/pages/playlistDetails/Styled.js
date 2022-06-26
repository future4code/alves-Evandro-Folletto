import styled from 'styled-components';

export const Body = styled.body`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #b6b6b6;
  box-sizing: border-box;
  padding: 20px;
  border-radius: 15px;
`

export const ListaMusicas = styled.div`
  display: flex;
  flex-direction: column;
`

export const Linha = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: gray;
  margin: 5px 0;
  border-radius: 15px;
`

export const PlaylistName = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  width: 100%;
  height: 50px;
  margin: 0 0 30px 0;
  border-radius: 15px;
  background-color: gray;
  font-size: 26px;
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 20px;
`

export const MusicName = styled.h4`
  font-size: 20px;
  color: white;
  margin: 0;
`

export const ArtistName = styled.div`
  margin: 0;
`

export const ButtonsUp = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`

export const ButtonPlay = styled.audio`
  cursor: pointer;
  width: 250px;
  height: 50px;
  align-items: center;
  padding: 0;
  margin: 0 10px;
`

export const ButtonRemove = styled.button`
  font-size: 14px;
  width: 70px;
  height: 50px;
  margin: 10px 20px 10px 10px;
  border-radius: 5px;
  border: none;
  background-color: lightgray;
  &:hover {
		cursor: pointer;
		background-color: lightcoral;
    border: none;
	}
`

export const ButtonsDown = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0 0 0;
  width: 100%;
  height: 50px;
`

export const ButtonBack = styled.button`
  font-size: 18px;
  height: 50px;
  width: 100%;
  margin: 0 5px 0 0;
  text-align: center;
  border: none;
  border-radius: 10px;
  background-color: lightblue;
  &:hover {
		cursor: pointer;
		background-color: #3d3dff;
    border: none;
	}
`

export const ButtonAdd = styled.button`
  font-size: 18px;
  height: 50px;
  width: 100%;
  margin: 0 0 0 5px;
  text-align: center;
  border: none;
  border-radius: 10px;
  background-color: lightgreen;
  &:hover {
		cursor: pointer;
		background-color: #00b900;
    border: none;
	}
`