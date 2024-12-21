import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/theme-context";
import { colorsScheme } from "../../assets/colorsScheme";
import { Card, PokemonName, PokemonType, PokemonLoading } from "./css";
import PokemonContext from "../../contexts/pokemon-context";
import Skeleton from '@mui/material/Skeleton';

export const CardsList = ({ pokemon }) => {

    const pokemons = pokemon
    const { theme } = useContext(ThemeContext)
    const { notFound, isCardListLoading, isInputValueLoading, isPokemonTypeLoading } = useContext(PokemonContext)

    if (pokemons.length > 0 && notFound === false && isInputValueLoading === false && isPokemonTypeLoading === false) {
        return (
            <>
                {pokemons.map((pokemon, index) => {
                    return (
                        <Card key={index} theme={theme}>
                            <Link to={`/profile/${pokemon.name}`}>
                                <div>
                                    {pokemon.sprites.versions['generation-v']['black-white'].animated['front_default']
                                        ? <img src={pokemon.sprites.versions['generation-v']['black-white'].animated['front_default']} alt={pokemon.name}></img>
                                        : <img src={pokemon.sprites.front_default} alt={pokemon.name}></img>}

                                    <PokemonName theme={theme}>{pokemon.name}</PokemonName>
                                    <div>
                                        {pokemon.types.map((types, index) => {
                                            return <PokemonType key={index} style={{ backgroundColor: colorsScheme[types.type.name] }}>{types.type.name}</PokemonType>
                                        })}
                                    </div>
                                </div>
                            </Link>
                        </Card>
                    )
                })}
            </>
        )
    } else if (Array.isArray(pokemons) === false && notFound === false && isInputValueLoading === false && isPokemonTypeLoading === false) {
        return (
            <Card theme={theme}>
                <Link to={`/profile/${pokemons.name}`}>
                    <div>
                        {pokemons.sprites.versions['generation-v']['black-white'].animated['front_default']
                            ? <img src={pokemons.sprites.versions['generation-v']['black-white'].animated['front_default']} alt={pokemon.name}></img>
                            : <img src={pokemons.sprites.front_default} alt={pokemons.name}></img>}

                        <PokemonName theme={theme}>{pokemons.name}</PokemonName>
                        <div>
                            {pokemons.types.map((types, index) => {
                                return <PokemonType key={index} style={{ backgroundColor: colorsScheme[types.type.name] }}>{types.type.name}</PokemonType>
                            })}
                        </div>
                    </div>
                </Link>
            </Card>
        )
    } else if (isCardListLoading === true || isPokemonTypeLoading === true) {
        return (
            <>
                {[...Array(10)].map((index) => (
                    <Card key={index} theme={theme}>
                        <Skeleton variant="rectangular" height={150} width={100} />
                        <PokemonName theme={theme}>
                            <Skeleton variant="text" width={100} />
                        </PokemonName>
                        <PokemonType theme={theme}>
                            <Skeleton variant="text" width={100} />
                        </PokemonType>
                    </Card>
                ))}
            </>
        )
    }
     else if (isInputValueLoading) {
        return (
        <Card theme={theme}>
            <Skeleton variant="rectangular" height={150} width={100} />
            <PokemonName theme={theme}>
                <Skeleton variant="text" width={100} />
            </PokemonName>
            <PokemonType theme={theme}>
                <Skeleton variant="text" width={100} />
            </PokemonType>
        </Card>
        )
    }
    else if (notFound === true) {
        return <PokemonLoading>Not Found 😥</PokemonLoading>

    }
}

