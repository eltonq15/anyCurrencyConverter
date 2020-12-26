import styled from 'styled-components';

export const MyCard = styled.div`
background: linear-gradient(71deg, #61abb8 0%, #ccf2f8 100%);
display: flex;
justify-content: center;
align-items: center;
width: 650px; 
margin: 50px auto;
border-radius: 10px;
flex-direction: column;
border: 1px solid rgba(0,0,0,0.5);
box-shadow: 3px 3px 10px rgba(0,0,0,0.6);
min-height: 40vh;

@media(max-width: 800px) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80%;
  max-width: 85%;
  margin-top: -10%;
  margin-bottom: 10px;
  height: 50%;
}
`;