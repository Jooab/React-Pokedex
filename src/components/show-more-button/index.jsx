import { Button } from "./css"
import { useContext } from 'react'
import PokemonContext from '../../contexts/pokemon-context'
import { CircularLoading } from "../circular-loading"

export const ShowMoreButton = () => {

    const { pokemons, addPokemons, endIndex, paginationOffset, isCardListLoading, notFound, isInputValueLoading } = useContext(PokemonContext)

    if( isCardListLoading === true || isInputValueLoading === true ) {
        return (
            <CircularLoading></CircularLoading>
        )
    } else if(Array.isArray(pokemons) && notFound === false && (endIndex === pokemons.length || paginationOffset > 0))  {
        return (
            <Button onClick={addPokemons}>Show More</Button>
        )
    }
}

