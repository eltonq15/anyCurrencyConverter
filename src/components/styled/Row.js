import styled from 'styled-components';

export const Row = styled.div`
display: flex; 
justify-content: center;
align-items: center;
padding: 0;
margin: 0;
height: 130px;
flex-direction: row;
@media(max-width: 800px) {
    height: 236px;
    display: flex;
    flex-direction: column;
}
`;