import React from 'react'
import './navbar.css'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './NavbarElements'

const Navbar = (props) => {
    return (
        <>
            <Nav>
                <NavLink to='/'>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to='/' exact>
                        About me
                    </NavLink>
                    <NavLink to='/whatILike'>
                        What I like
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar