import styled from "styled-components"

export const Logo = styled.img`
    width: 450px;
    height: 180px;
    margin-left: 50px;

    &:hover {
        cursor: pointer;
        transform: scale(1.05);
        transition: 0.3s;
    }

    @media (max-width: 768px) {
        width: 250px;
        height: 120px;
        margin-left: 0px;
    }
}
`