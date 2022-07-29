import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #9a5d56;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`

export const Line1 = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 90%;
`

export const Hello = styled.p`
  font-size: 14px;
`

export const Line2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 30px;
`

export const Auxiliar = styled.div`
  width: 60px;
`

export const Logo = styled.img`
  width: 30px;
`

export const RightButton = styled.div`
  width: 60px;
  font-size: 16px;
  font-weight: bold;
  text-decoration: underline;
  &:hover {
		cursor: pointer;
    border: none;
    transform: scale(1.05);
	}
`

export const ButtonBack = styled.img`
  width: 25px;
  margin: 0;
  &:hover {
		cursor: pointer;
    border: none;
    transform: scale(1.05);
	}
`