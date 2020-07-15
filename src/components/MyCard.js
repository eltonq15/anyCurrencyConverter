import styled from 'styled-components';

export const MyCard = styled.div`
background: linear-gradient(71deg, rgba(180,187,255,1) 0%, rgba(255,255,255,1) 100%);
display: flex;
justify-content: center;
align-items: center;
width: 650px; 
margin: 50px auto;
border-radius: 10px;
padding: 0;
flex-direction: column;
border: 1px solid rgba(0,0,0,0.5);
box-shadow: 0 0 10px rgba(0,0,0,0.1);

@media(max-width: 800px) {
  display: flex;
  paddingTop: 25px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
  max-width: 310px;
}
`;