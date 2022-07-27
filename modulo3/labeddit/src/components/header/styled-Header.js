import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: lightblue;
`

export const Line1 = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 0 0 5px 0;
`

export const Line2 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
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