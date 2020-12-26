import styled from 'styled-components';

export const Row = styled.div`
display: flex; 
justify-content: space-evenly;
align-items: space-evenly;
height: 100%;
width: 100%;
flex-direction: row;
flex-wrap: wrap;
@media(max-width: 800px) {
    height: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    //flex-wrap: wrap;
    justify-content: space-around;
}
`;