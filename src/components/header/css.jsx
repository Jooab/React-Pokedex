import styled from "styled-components";

export const PokeHeader = styled.header` 
    padding: 20px 0; 
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 670px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
