import { Logo } from "./css"
import { Link } from 'react-router-dom'

const PokeLogo = () => {

    return (
        <Link to="/">
            <Logo src="../../imgs/pokemon-logo.png" onClick={() => window.location.reload()}></Logo>
        </Link>
    )
}

export default PokeLogo
