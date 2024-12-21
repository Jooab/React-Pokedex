import styled from "styled-components"

export const Input = styled.input`
    background-color: ${props => props.theme.cardBackground};
    color: ${props => props.theme.textColor};
    min-width: 275px;
    min-height: 45px;
    border-radius: 10px;
    border: none;
    padding: 8px;
    font-size: 17px;

    @media (max-width: 430px) {
        min-width: 180px;
        min-height: 40px;
    }
`

export const InputSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`