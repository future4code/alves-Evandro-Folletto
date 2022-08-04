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
  align-items: center;
  width: 375px;
  height: 667px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 10px 0 rgba(0,0,0,0.15);
`

export const Up = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-basis: 10%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: #834841;
`

export const Left = styled.div`
  display: flex;
  flex-basis: 15%;
  width: 100%;
`

export const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 85%;
`

export const ButtonBack = styled.img`
  width: 30px;
  margin: 0 0 0 15px;
  &:hover {
		cursor: pointer;
    transform: scale(1.1);
    transition: transform .2s;
	}
`

export const Title1 = styled.h1`
`

export const Title2 = styled.h1`
  color: #e19d94;
`

export const Logo = styled.img`
  width: 30px;
  margin: 0 10px 0 0;
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  flex-basis: 90%;
  padding: 10px;
  overflow: auto;
`

export const Text = styled.p`
  font-size: 19px;
  line-height: 25px;
`

export const DevelopedBy = styled.div`
  margin: 10px 0 0 0;
  font-size: 19px;
  color:#834841;
`