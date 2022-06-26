import styled from 'styled-components';

export const Body = styled.div`
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
  width: 400px;
  background: #b6b6b6;
  box-sizing: border-box;
  padding: 20px;
  border-radius: 15px;
`

export const ListaPlaylist = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* height: 50px; */
`

export const Lista = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: gray;
  margin: 5px 0;
  border-radius: 10px;
  height: 50px;
`

export const Titulo = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  margin: 0 0 40px 0;
  border-radius: 15px;
  background-color: gray;
  font-size: 26px;
`

export const PlaylistName = styled.div`
  font-size: 20px;
  margin: 0 0 5px 20px;
  text-align: center;
  padding: 2px;
`

export const ButtonsUp = styled.div`
  display: flex;
  margin: 0 20px 0 0;
  height: 30px;
`

export const ButtonDetails = styled.button`
  margin: 0 5px 0 0;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: lightgray;
  &:hover {
		cursor: pointer;
		background-color: #e6e6e6;
    border: none;
	}  
`

export const ButtonRemove = styled.button`
  margin: 0 0 0 5px;
  cursor: pointer;
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
  height: 40px;
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

export const ButtonCreate = styled.button`
  font-size: 18px;
  height: 40px;
  width: 100%;
  margin: 0 0 0 5px;
  text-align: center;
  background-color: lightgreen;
  border: none;
  border-radius: 10px;
  &:hover {
		cursor: pointer;
		background-color: #00b900;
    border: none;
	}
`