import styled from "styled-components";


export const Select = styled.select`
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: ${props => props.theme.cardBackground};
    color: ${props => props.theme.textColor};
    font-weight: 700;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;;
`

export const Option = styled.option`
    font-weight: 700;
    text-transform: capitalize;
`