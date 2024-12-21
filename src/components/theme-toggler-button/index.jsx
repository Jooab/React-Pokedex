import { useContext } from "react"
import { themes } from '../../contexts/theme-context'
import { ThemeContext } from "../../contexts/theme-context"
import { ThemeButton, Icon } from "./css"

export const ThemeTogglerButton = ({ icons, style }) => {

    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <ThemeButton
            onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}
            style={{ ...style }}>
            <Icon src={icons} alt="Icon" />
        </ThemeButton>
    )
}