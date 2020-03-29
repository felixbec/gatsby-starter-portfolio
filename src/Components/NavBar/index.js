import React, { useState, useRef }  from "react"
import { Link } from "gatsby"
import Burger from "../Burger"
import Menu from "../Menu"
import Headroom from "react-headroom"
import { useOnClickOutside, useOnScroll } from '../../Hooks';
import logo from "../../images/navbar-logo.png"
import { StyledContainer, StyledHeader, StyledLogo, StyledMenu, StyledHamburgerHolder } from './NavBar.styled';

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const node = useRef(); 
    //Hamburger
    useOnClickOutside(node, () => setOpen(false));
    useOnScroll(node, () => setOpen(false));

    return (
        <StyledContainer>
            <Headroom>
                <StyledHeader className="container">
                    <StyledLogo>
                        <Link to="/">
                            <img src={logo} alt="Portfolio Logo" />
                        </Link>        
                    </StyledLogo>

                    <StyledMenu>
                        <a href="#about">About Me</a>
                        <a href="#resume">Resume</a>
                        <a href="#projects">Projects</a>
                        <a href="#blog">Blog</a>
                        <a href="#contact">Contact Me</a>
                    </StyledMenu>
                    <StyledHamburgerHolder ref={node}>
                        <Burger open={open} setOpen={setOpen} />
                        <Menu open={open} setOpen={setOpen} />
                    </StyledHamburgerHolder>
                </StyledHeader>
            </Headroom>
        </StyledContainer>
    )
}

export default NavBar