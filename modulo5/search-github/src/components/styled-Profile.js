import styled from 'styled-components';

export const BoxProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 375px;
  border-radius: 15px;
  background-color: gray;
`

export const ProfileImage = styled.div`
  margin: 30px 0;
`

export const Image = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
`

export const ProfileData = styled.div`
  font-size: 22px;
  text-align: center;
  margin: 10px 0;
`

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  padding: 0 0 0 10px;
  width: 100%;
  height: 30px;
`

export const ButtonBack = styled.button`
  font-size: 18px;
  height: 100%;
  width: 85px;
  margin: 0 5px 0 0;
  text-align: center;
  color: white;
  border: none;
  border-radius: 5px;
  background-color: #368ce7;
  &:hover {
    cursor: pointer;
    background-color: blue;
    transform: scale(1.02);
    transition: transform .2s;
  }
`