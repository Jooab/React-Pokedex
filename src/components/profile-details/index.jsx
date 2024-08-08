import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import { colorsScheme } from '../../assets/colorsScheme'
import { useContext } from 'react'
import { Context } from '../../contexts/theme-context'
import { Link } from 'react-router-dom'
import './index.css'
import styled from 'styled-components'
import { ThemeTogglerButton } from '../theme-toggler-button'
import { themes } from '../../contexts/theme-context'
import { arrows } from '../../contexts/theme-context'

async function getPokemonData(pokemon) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    if (response) {
        return response.data
    }
}

async function getPokemonAbilities(abilities) {
    const response = await axios.get(`https://pokeapi.co/api/v2/ability/${abilities}/`)
    if (response) {
        return response.data.effect_entries.find(entry => entry.language.name === 'en').effect
    }
}

export const ProfileDetails = () => {

    const [pokemonData, setPokemonData] = useState({})
    const [abilities, setAbilities] = useState([])
    const [abilitiesInfo, setAbilitiesInfo] = useState([])
    const [moves, setMoves] = useState([])
    const [types, setTypes] = useState([])

    const { pokemon } = useParams()
    const { theme, arrow, setArrow } = useContext(Context)

    const movesRef = useRef()

    useEffect(() => {
        async function fetchData() {
            const data = await getPokemonData(pokemon)
            setPokemonData(data)
            setMoves(data.moves.map(moves => moves.move.name))
            setAbilities(data.abilities.map(abilities => abilities.ability.name))
            setTypes(data.types.map(types => types.type.name))
        }

        fetchData()
    }, [pokemon])

    useEffect(() => {
        const fetchAbilitiesInfo = async () => {
            const abilitiesInfo = await Promise.all(abilities.map(ability => getPokemonAbilities(ability)))
            setAbilitiesInfo(abilitiesInfo)
        }

        fetchAbilitiesInfo()
    }, [abilities])

    const handleShowMoves = () => {
        movesRef.current.classList.toggle('hidden');
        movesRef.current && movesRef.current.classList.contains('hidden') ? setArrow(arrows.arrowDown) : setArrow(arrows.arrowUp)
    };

    return (

        <div style={{ background: theme.background }} className='container'>

            <StyledLink to='/'>Back to Homepage</StyledLink>

            <ThemeTogglerButton icons={theme === themes.light ? '../../src/imgs/moon.png' : '../../src/imgs/sun.png'} />

            <div className='pokemon-profile' style={{ backgroundColor: theme.cardBackground }}>

                {pokemonData.sprites && <img className='pokemon-image' src={pokemonData.sprites.front_default} alt={pokemonData.name} />}

                <p className='profile-pokemon-name' style={{ color: theme.textColor }}>{pokemonData.name}</p>

                <div className='types'>

                    {types[0] && <span style={{ backgroundColor: colorsScheme[types[0]] }} className='type'>{types[0]}</span>}

                    {types[1] && <span style={{ backgroundColor: colorsScheme[types[1]] }} className='type'>{types[1]}</span>}

                </div>

                <div className='moves-section'>

                    <p className='moves-title' style={{ color: theme.textColor }}>Moves <img className='arrow' src={arrow.src} alt='arrow' onClick={() => handleShowMoves()} /></p>

                    <ul className='move-list hidden' ref={movesRef}>

                        {moves.map((move, index) => {
                            return (
                                <li key={index}>{move}</li>
                            )
                        })}
                    </ul>

                </div>

                <ul className='abilities' style={{ color: theme.textColor }}>

                    <p className='abilities-title'>Abilities</p>

                    <div className='ability-description'>
                        <li className='ability-name'>{abilities[0]}</li>
                        <p>{abilitiesInfo[0]}</p>
                    </div>

                    <div className='ability-description'>
                        <li className='ability-name'>{abilities[1]}</li>
                        <p>{abilitiesInfo[1]}</p>
                    </div>

                </ul>


            </div>
        </div>
    )
}

const StyledLink = styled(Link)`
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
        background-color: #000000;
    }
`