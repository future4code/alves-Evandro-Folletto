import styled from 'styled-components';

export const General = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  box-sizing: border-box;
`

export const Container = styled.div`
  display: grid;
  grid-template-rows: 60px 210px 1fr 40px;
  width: 375px;
  height: 667px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 10px 0 rgba(0,0,0,0.15);
`

export const Auxiliar = styled.div`
  width: 50px;
  height: 30px; 
  border: solid 1px blue;
`

export const Logo = styled.img`
  width: 30px;
`

export const RightButton = styled.button`
  width: 50px;
  height: 30px;
`

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background-color: #f0f0f0;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const Input = styled.input`
  width: 75%;
  height: 35px;
  font-size: 16px;
  border: solid 1px black;
  border-radius: 5px;
  margin: 0 0 10px 0;
  padding: 0 0 0 5px;
  &:focus {
    border: solid 2px #b2726b;
    outline: 0;
  }
`

export const PostText = styled.textarea`
  width: 75%;
  height: 70px;
  font-size: 16px;
  text-align: bottom;
  border: solid 1px black;
  border-radius: 5px;
  margin: 0 0 10px 0;
  padding: 5px;
  &:focus {
    border: solid 2px #b2726b;
    outline: 0;
  }
`

export const PostButton = styled.button`
  font-size: 18px;
  height: 30px;
  width: 75%;
  /* margin: 0 0 10px 0; */
  text-align: center;
  border: none;
  border-radius: 5px;
  background-color: #9a5d56;
  color: #fffafa;
  &:hover {
		cursor: pointer;
		background-color: #834841;
    border: none;
    transform: scale(1.03);
    transition: transform .2s;
	}
`

export const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const SearchInput = styled.input`
  width: 75%;
  height: 100%;
  font-size: 16px;
  border: solid 1px black;
  border-radius: 5px;
  margin: 0 0 10px 0;
  padding: 0 0 0 5px;
  &:focus {
    border: solid 2px #b2726b;
    outline: 0;
  }
`

export const Feed = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: auto;
`

export const Paginacao = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #9a5d56;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`

export const Pgn = styled.div`
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  margin: 0 20px;
  padding: 4px 12px;
  background-color: #fffafa;
`

export const BackNext = styled.img`
  width: 30px;
  &:hover {
		cursor: pointer;
    transform: scale(1.1);
    transition: transform .2s;
	}
`

export const BoxLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const Loading = styled.h2`
`