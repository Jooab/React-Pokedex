import styled from "styled-components";

export const Card = styled.div`
    background: ${props => props.theme.cardBackground};
    list-style: none;
    text-transform: capitalize;
    font-weight: bold;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    min-height: 215px;
    min-width: 135px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: 0.3s ease-in-out;

    &:hover {
    transform: scale(1.05);
    cursor: pointer;
}
`

export const PokemonName = styled.p`
color: ${props => props.theme.textColor};
font-weight: bold;
font-size: 14px;
`

export const PokemonType = styled.p`
color: #ffffff;
font-weight: bold;
margin-top: 10px;
border-radius: 5px;
font-size: 12px;
`

export const PokemonLoading = styled.p`
color: #ffffff;
font-weight: bold;
font-size: 30px;
`