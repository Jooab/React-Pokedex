import { useContext } from 'react'
import { Header } from '../components/header'
import { ThemeContext } from '../contexts/theme-context'
import PokemonContext from '../contexts/pokemon-context'
import { Container, Div} from './css'
import PokeLogo from '../components/poke-logo'
import { CardsList } from '../components/cardsList'
import { ShowMoreButton } from '../components/show-more-button'

export const Home = () => {

    const { theme } = useContext(ThemeContext)

    const { pokemons } = useContext(PokemonContext)

    return (
        <Container style={{ background: theme.background }}>
            <PokeLogo></PokeLogo>
            <Header />
            <Div>
                <CardsList pokemon={pokemons}></CardsList>
            </Div>
            <ShowMoreButton></ShowMoreButton>
        </Container>
    )
}



