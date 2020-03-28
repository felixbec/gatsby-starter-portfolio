import React, { Fragment, useState, useRef }  from "react"
import { Link } from "gatsby"
import Burger from "../Burger"
import Menu from "../Menu"
import Headroom from "react-headroom"
import { useOnClickOutside, useOnScroll } from '../../Hooks';
import logo from "../../images/navbar-logo.png"
import { StyledHeader, StyledLogo, StyledMenu, StyledBlock, StyledHamburgerHolder } from './NavBar.styled';


const NavBar = () => {
    const [open, setOpen] = useState(false);
    const node = useRef(); 
    //Hamburger
    useOnClickOutside(node, () => setOpen(false));
    useOnScroll(node, () => setOpen(false));

    return (
        <Fragment>
            <Headroom>
                <StyledHeader>
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

                    {/* TODO - Replace with DarkMode Toggle
                    <StyledBlock>
                        <Link to="/" className="btn">Get In Touch</Link>
                    </StyledBlock>
                    */}

                    <StyledHamburgerHolder ref={node}>
                        <Burger open={open} setOpen={setOpen} />
                        <Menu open={open} setOpen={setOpen} />
                    </StyledHamburgerHolder>
                </StyledHeader>
            </Headroom>

            
            
        </Fragment>
    )
}

export default NavBar