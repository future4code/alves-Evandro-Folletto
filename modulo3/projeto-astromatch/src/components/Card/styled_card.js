import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ContentImg = styled.div`
  margin: 20px 0 0 0;
  width: 250px;
  height: 250px;
`

export const Image = styled.img`
  max-width: 100%;
  width: 250px;
  height: 250px;
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%;
  object-fit: contain;
  /* object-fit: cover; */
  background-color: #cd3d44;
`

export const Description = styled.h2`
  margin: 20px 0 0 0;
`

export const Bio = styled.p`
  text-align: center;
  font-size: 18px;
  margin: 20px 20px;
`