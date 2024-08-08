import styled from 'styled-components'

export const LoadMoreButton = ({increaseLimitButton}) => {
    return (
        <Button onClick={increaseLimitButton}>Load More</Button>
    )
}

const Button = styled.button`
    background-color: #ffffff;
    color: #000000;
    margin-top: 30px;

    &:hover {
        transform: scale(1.1);
        transition: 0.2s;
        background-color: #5099f5;
        color: #ffffff;
    }

    &:focus {
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
    }
`