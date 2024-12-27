import styled from "styled-components"

export const ThemeButton = styled.button`
        background-color: #ffffff;
        width : 40px;
        height : 40px;
        padding: 0;
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

    @media (max-width: 670px) {
        position: absolute;
        top: 30px;
        right: 10px;
        width : 35px;
        height : 35px;
    }

}
`

export const Icon = styled.img`
    width : 40px;
    height : 40px;

`