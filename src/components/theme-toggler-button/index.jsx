import { useContext } from "react"
import { themes } from '../../contexts/theme-context'
import { Context } from "../../contexts/theme-context"
import styled from "styled-components"

export const ThemeTogglerButton = ({ icons }) => {

    const { theme, setTheme } = useContext(Context)

    return (
        <ThemeButton onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>
            <Icon src={icons} alt="Icon" />
        </ThemeButton>
    )
}

const ThemeButton = styled.button`
        background-color: #ffffff;
        width : 50px;
        height : 50px;
        padding: 0;
        position: absolute;
        top : 20px;
        right: 10%;
        display: flex;
        align-items : center;
        justify-content : center;

    &:focus {
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
    }

    &:hover {
        transform: scale(1.05);
        transition: 0.2s;
    }

    @media (max-width: 430px) {
        top: 30px;
        right: 10px;
        width : 35px;
        height : 35px;
    }
}
`

const Icon = styled.img`
    @media (max-width: 430px) {
    width : 40px;
    height : 40px;
}
`