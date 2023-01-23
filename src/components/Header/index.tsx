import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Logo } from './style'

const Header = () => {
    return (
        <Container>
            <Logo><p>Pokedex</p></Logo>

            <div>
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <input type="text" />
            </div>
        </Container>
    )
}

export default Header