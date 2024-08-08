import { useContext } from 'react'
import { Header } from '../components/header'
import { PokemonList } from '../components/pokemon-list'
import { Context } from '../contexts/theme-context'
import styled from 'styled-components'
import { ThemeTogglerButton } from '../components/theme-toggler-button'
import { themes } from '../contexts/theme-context'


export const Home = () => {

const { theme } = useContext(Context)

    return (
        <Div style={{background: theme.background}}>
            <Header />
            <PokemonList />
            <ThemeTogglerButton icons={theme === themes.light ? 'imgs/moon.png' : 'imgs/sun.png'}/>
        </Div>
    )
}

const Div = styled.div`
padding : 2rem;
min-height: 100vh;
`