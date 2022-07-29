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
  width: 375px;
  height: 667px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 10px 0 rgba(0,0,0,0.15);
`

export const Header = styled.div`
  /* display: flex; */
  /* justify-content: space-between; */
  /* align-items: center; */
  /* background-color: lightblue; */
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const Apresentation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 30%;
  /* border: solid 1px red; */
`

export const Title = styled.h1`
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 70%;
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

export const AceptTerms = styled.div`
  display: flex;
  justify-content: center;
  font-size: 16px;
  width: 75%;
`

export const MetInput = styled.input`
  margin: 0 5px 0 0;
  width: 15px;
  height: 15px;
`

export const Alert = styled.div`
  width: 75%;
  margin: 10px 0 10px 0;
`

export const Text = styled.p`
  display: inline;
  font-size: 12px;
`

export const BlueText = styled.p`
  display: inline;
  text-decoration: underline;
  font-size: 12px;
  color: blue;
`

export const ButtonSignUp = styled.button`
  font-size: 18px;
  height: 40px;
  width: 75%;
  margin: 20px 0 10px 0;
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