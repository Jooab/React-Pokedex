import { createContext } from "react";
import { useState } from "react";

export const themes = {
    light: {
        background: 'url(../../imgs/light-theme-wallpaper.png) no-repeat center/cover',
        cardBackground: '#ffffff',
        textColor: '#000000'
    },

    dark: {
        background: 'url(../../imgs/dark-theme-wallpaper.png) no-repeat center/cover',
        cardBackground: '#393939',
        textColor: '#ffffff'
    }
}

export const arrows = {
    arrowUp: {
        src: '../../imgs/up-arrow.png',
    },
    arrowDown: {
        src: '../../imgs/down-arrow.png',
    }
}

export const Context = createContext({})

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(themes.light)

    const [arrow, setArrow] = useState(arrows.arrowDown)

    return (
        <Context.Provider value={{ theme, setTheme, arrow, setArrow }}>
            {children}
        </Context.Provider>
    )
}

