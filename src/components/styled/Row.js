import styled from 'styled-components';

export const Row = styled.div`
display: flex; 
justify-content: space-around;
flex-direction: row;
@media(max-width: 800px) {
    display: flex;
    flex-direction: column;
}
`;