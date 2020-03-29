import React from 'react'
import { func, string } from 'prop-types';
// Import a couple of SVG files we'll use in the design: https://www.flaticon.com
import { StyledContainer, ToggleContainer } from './Toggle.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"

const Toggle = ({ theme, toggleTheme }) => {
    const isLight = theme === 'light';
    return (
        <StyledContainer>
            <ToggleContainer lightTheme={isLight} onClick={toggleTheme} >
                <FontAwesomeIcon icon={faMoon} color="#0EE6B8"/>
                <FontAwesomeIcon icon={faSun} color="#A7BFD3"/>
            </ToggleContainer>
        </StyledContainer>
    );
};

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle;
