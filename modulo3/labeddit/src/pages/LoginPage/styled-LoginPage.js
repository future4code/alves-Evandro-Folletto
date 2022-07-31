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
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 375px;
  height: 667px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 10px 0 rgba(0,0,0,0.15);
`

export const Up = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-basis: 50%;
`

export const Down = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  flex-basis: 50%;
`

export const Info = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 50px;
  flex-basis: 15%;
`

export const ImageInfo = styled.img`
  width: 30px;
  margin: 10px 20px 0 0;
  &:hover {
		cursor: pointer;
    transform: scale(1.1);
    transition: transform .2s;
	}
`

export const Apresentation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 85%;
`

export const Image = styled.img`
  width: 70px;
  margin: 0 0 10px 0;
`

export const Title = styled.div`
  display: flex;
  margin: 0 0 10px 0;
`

export const Title1 = styled.h1`
`

export const Title2 = styled.h1`
  color: #834841;
`

export const Subtitle = styled.p`
  font-size: 16px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Input = styled.input`
  width: 75%;
  height: 50px;
  font-size: 18px;
  border: solid 1px;
  border-radius: 5px;
  margin: 0 0 20px 0;
  padding: 0 0 0 5px;
  &:focus {
    border: solid 2px #b2726b;
    outline: 0;
  }
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px 0 0 0;
`

export const ButtonLogin = styled.button`
  font-size: 18px;
  height: 40px;
  width: 75%;
  margin: 0 0 10px 0;
  text-align: center;
  border: none;
  border-radius: 20px;
  background-color: #9a5d56;
  color: #fffafa;
  &:hover {
		cursor: pointer;
		background-color: #834841;
    border: none;
    transform: scale(1.02);
    transition: transform .2s;
	}
`

export const ButtonSignUp = styled.button`
  font-size: 18px;
  height: 40px;
  width: 75%;
  text-align: center;
  border: solid 1px black;
  border-radius: 20px;
  &:hover {
		cursor: pointer;
		background-color: #ececec;
    transform: scale(1.02);
    transition: transform .2s;
	}
` 