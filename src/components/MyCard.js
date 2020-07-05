import styled from 'styled-components';

export const MyCard = styled.div`
background: linear-gradient(71deg, rgba(180,187,255,1) 0%, rgba(255,255,255,1) 100%);
display: flex;
justify-content: flex-start;
align-items: space-around;
max-width: 800px;
height: 300px;
margin: 50px auto;
border-radius: 5px;
padding: 20px;
flex-direction: column;
border: 1px solid rgba(0,0,0,0.5);
box-shadow: 0 0 10px rgba(0,0,0,0.1);

@media(max-width: 800px) {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 500px;
  max-width: 90vw;
}
`;

export const Title = styled.h2`
  color: black;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  padding: 7px;
  border-radius: 50vh;
  @media (max-width: 800px) {
    font-size: 1.3em
  }
`;