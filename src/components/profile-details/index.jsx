import { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router'
import { colorsScheme } from '../../assets/colorsScheme'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme-context'
import './index.css'
import { ThemeTogglerButton } from '../theme-toggler-button'
import { themes } from '../../contexts/theme-context'
import { arrows } from '../../contexts/theme-context'
import { getPokemon, getPokemonAbilities } from '../../services/requestApi'
import { Container, PokemonProfile, PokemonImage, ProfilePokemonName, PokemonTypes, PokemonType, MovesSection, MovesTitle, MovesList, Move, AbilitiesSection, AbilitiesTitle, AbilityName, AbilityDescription, StyledLink, Arrow } from './css'

export const ProfileDetails = () => {

    const [pokemonData, setPokemonData] = useState({})
    const [abilities, setAbilities] = useState([])
    const [abilitiesInfo, setAbilitiesInfo] = useState([])
    const [moves, setMoves] = useState([])
    const [types, setTypes] = useState([])

    const { pokemon } = useParams()
    const { theme, arrow, setArrow } = useContext(ThemeContext)
    const movesRef = useRef()

    useEffect(() => {
        async function fetchData() {
            const data = await getPokemon(pokemon)
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
        if (movesRef.current.classList.contains('hidden') === false) {
            movesRef.current.style.display = 'flex';
        } else {
            movesRef.current.style.display = 'none';
        }
        movesRef.current && movesRef.current.classList.contains('hidden') ? setArrow(arrows.arrowDown) : setArrow(arrows.arrowUp)
    };

    return (

        <Container theme={theme}>

            <StyledLink to='/'>Back to Homepage</StyledLink>

            <ThemeTogglerButton
                icons={theme === themes.light ? '../../imgs/moon.png' : '../../imgs/sun.png'}
                style={{
                    position: 'absolute',
                    top: '30px',
                    right: '20px'
                }}
            />

            <PokemonProfile theme={theme}>

                {pokemonData.sprites && pokemonData.sprites.versions && pokemonData.sprites.versions['generation-v'] && (
                    pokemonData.sprites.versions['generation-v']['black-white'].animated && pokemonData.sprites.versions['generation-v']['black-white'].animated['front_default']
                        ? <PokemonImage src={pokemonData.sprites.versions['generation-v']['black-white'].animated['front_default']} alt={pokemonData.name} />
                        : <PokemonImage src={pokemonData.sprites.front_default} alt={pokemonData.name} />
                )}


                <ProfilePokemonName theme={theme}>{pokemonData.name}</ProfilePokemonName>

                <PokemonTypes>

                    {types.map((type, index) => {
                        return (
                            <PokemonType key={index} style={{ backgroundColor: colorsScheme[type] }}>{type}</PokemonType>
                        )
                    })}


                </PokemonTypes>

                <MovesSection>

                    <MovesTitle theme={theme}>Moves <Arrow src={arrow.src} alt='arrow' onClick={() => handleShowMoves()} /></MovesTitle>

                    <MovesList className='hidden' ref={movesRef}>

                        {moves.map((move, index) => {
                            return (
                                <Move key={index}>{move}</Move>
                            )
                        })}
                    </MovesList>

                </MovesSection>

                <AbilitiesSection theme={theme}>

                    <AbilitiesTitle>Abilities</AbilitiesTitle>

                    {abilities.map((ability, index) => {
                        if (abilitiesInfo.length === 0) {
                            return (
                                <AbilityDescription key={index}>
                                    <AbilityName key={index}>{ability}</AbilityName>
                                    <p>No information for this ability</p>
                                </AbilityDescription>
                            )
                        } else {
                            return (
                                <AbilityDescription key={index}>
                                    <AbilityName key={index}>{ability}</AbilityName>
                                    <p>{abilitiesInfo[index]}</p>
                                </AbilityDescription>
                            )
                        }
                    })}

                </AbilitiesSection>

            </PokemonProfile>
        </Container>
    )


}