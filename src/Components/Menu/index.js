import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open }) => {
    
    return (
        <StyledMenu open={open}>
            <a href="#about">About Me</a>
            <a href="#resume">Resume</a>
            <a href="#projects">Projects</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact Me</a>
        </StyledMenu>  
    )
}

Menu.propTypes = {
    open: bool.isRequired,
    }

export default Menu;