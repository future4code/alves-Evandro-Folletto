import styled from 'styled-components';

export const General = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 700px;
  height: 800px;
  border-radius: 10px;
  box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 20px 0 rgba(0,0,0,0.19);
  background-color: #187e91;
  @media screen and (max-device-width : 480px){
    max-width: 100vw;
    height: auto;
    box-sizing: border-box;
    overflow-y: auto;
  }
`
export const Title = styled.h1`
  text-align: center;
  margin: 10px 0 10px 0;
  color:#e7e4f3;
  @media screen and (max-device-width : 480px){
    font-size: 22px;
  }
`

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  color:#e7e4f3;
`

export const Text = styled.div`
  font-size: 19px;
  margin: 0 20px 20px 20px;
  word-wrap: break-word;
  color:#e7e4f3;
  @media screen and (max-device-width : 480px){
    font-size: 12px;
  }
`

export const DevelopedBy = styled.div`
  margin: 0 20px 10px 20px;
  font-size: 19px;
  text-align: left;
  color:#e7e4f3;
  @media screen and (max-device-width : 480px){
    font-size: 12px;
  }
`

export const ButtonBack = styled.button`
  font-size: 18px;
  width: 95%;
  height: 40px;
  margin: 10px 0;
  text-align: center;
  border: none;
  border-radius: 10px;
  background-color: lightblue;
  &:hover {
		cursor: pointer;
		background-color: #3d3dff;
    border: none;
	}
  @media screen and (max-device-width : 480px){
    width: 90%;
    margin-bottom: 5px;
    border-radius: 5px;
  }
`