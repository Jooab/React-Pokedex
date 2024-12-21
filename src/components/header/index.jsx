import { PokeHeader } from './css'
import { SearchBar } from '../search-bar'
import { SelectType } from '../select-type'
import { ThemeTogglerButton } from '../theme-toggler-button'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme-context'
import { themes } from '../../contexts/theme-context'

export const Header = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <PokeHeader>
            <SelectType></SelectType>
            <SearchBar></SearchBar>
            <ThemeTogglerButton icons={theme === themes.light ? 'imgs/moon.png' : 'imgs/sun.png'} />
        </PokeHeader>
    )
}