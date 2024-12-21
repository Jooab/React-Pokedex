import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    background: ${props => props.theme.background};
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
}`

export const PokemonProfile = styled.div`
    background-color: ${props => props.theme.cardBackground};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 600px;
    border-radius: 15px;
    padding: 20px;
    text-transform: capitalize;
    margin: 100px 0;
`

export const PokemonImage = styled.img`
    width: 50%;
`

export const ProfilePokemonName = styled.p`
    color: ${props => props.theme.textColor};
    font-weight: bold;
    font-size: 25px;
`

export const PokemonTypes = styled.div`
    display: flex;
    gap: 10px;
`

export const PokemonType = styled.span`
    color: #ffffff;
    font-weight: 700;
    padding: 5px;
    border-radius: 5px;
    min-width: 60px;
`

export const MovesSection = styled.div`
margin: 20px 0;
`

export const MovesTitle = styled.p`
    color: ${props => props.theme.textColor};
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const MovesList = styled.ul`
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
`

export const Move = styled.li`
    padding: 5px;
    border-radius: 5px;
    background-color: #b5b5b5;
    color: #ffffff;
    font-weight: 700;
    list-style: none;

    &:hover {
    cursor: pointer;
    background-color: #000000;
    transition: 0.3s;
    transform: scale(1.05);
    }
`

export const AbilitiesSection = styled.div`
    text-transform: none;
    color: ${props => props.theme.textColor};
`

export const AbilitiesTitle = styled.p`
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 15px;
`

export const AbilityName = styled.p`
    font-weight: 700;
    text-transform: capitalize;
`

export const AbilityDescription = styled.div`
    margin-bottom: 15px;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #000000;
    background-color: #ffffff;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 20px;
    height: 30px;
    display : flex;
    align-items: center;
    position: absolute;
    left : 20px;
    top : 30px;

    &:hover {
        transform: scale(1.05);
        transition: 0.4s;
        color: #ffffff;
        background-color: #1975d1;
    }
`

export const Arrow = styled.img`
    width: 35px;

&:hover {
    transform: scale(1.05);
    transition: 0.3s;
    cursor: pointer;
}
`