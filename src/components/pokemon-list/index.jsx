
import { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { LoadMoreButton } from '../load-more-button'
import { Link } from 'react-router-dom'
import { colorsScheme } from '../../assets/colorsScheme'
import { useContext } from 'react'
import { Context } from '../../contexts/theme-context'
import './index.css'

export async function getPokemonList(limitQuantity) {

    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limitQuantity}`)
    const data = response.data.results.map(pokemon => pokemon.name)
    return data
}

async function getPokemonData(pokemonName) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    return response.data
}

export const PokemonList = () => {

    const [pokemonList, setPokemonList] = useState([])
    const [limit, setLimit] = useState(10)

    const { theme } = useContext(Context)

    useEffect(() => {
        const fetchData = async () => {
            const pokemonListNames = await getPokemonList(limit)

            const pokemonDataPromises = pokemonListNames.map(async (pokemon) => {
                let pokemonData = await getPokemonData(pokemon)
                return pokemonData
            })

            const pokemonData = await Promise.all(pokemonDataPromises)

            setPokemonList(pokemonData)
        }

        fetchData()
    }, [limit])

    const increaseLimit = () => {
        setLimit(limit + 10)
    }


    return (
        <>
            <ul className='list'>

                {pokemonList.map((pokemon, index) => {

                    const pokemonTypes = pokemon.types.map(type => type.type.name)

                    return (

                        <Link key={index} to={`/profile-details/${pokemon.name}`}>

                            <li key={index} className='card' style={{ backgroundColor: theme.cardBackground, color: theme.textColor }}>
                                <img src={pokemon.sprites.front_default} alt={pokemon.name} />

                                <p className='pokemon-name'>{pokemon.name}</p>

                                <p style={{ backgroundColor: colorsScheme[pokemonTypes[0]] }} className='pokemon-type'>{pokemonTypes[0]}</p>

                                {pokemonTypes[1] ? <p style={{ backgroundColor: colorsScheme[pokemonTypes[1]] }} className='pokemon-type'>{pokemonTypes[1]}</p> : null}
                            </li>

                        </Link>
                    )
                })}

            </ul>

            <LoadMoreButton increaseLimitButton={increaseLimit} />
        </>
    )
}
