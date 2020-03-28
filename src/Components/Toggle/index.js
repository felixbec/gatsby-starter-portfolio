import React from 'react'
import { func, string } from 'prop-types';
// Import a couple of SVG files we'll use in the design: https://www.flaticon.com
import { ToggleContainer } from './Toggle.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"

const Toggle = ({ theme, toggleTheme }) => {
    const isLight = theme === 'light';
    return (
        <ToggleContainer lightTheme={isLight} onClick={toggleTheme} >
            <FontAwesomeIcon icon={faMoon} size="1x" color="#11162B"/>
            <FontAwesomeIcon icon={faSun} size="1x" color="#FFF"/>
        </ToggleContainer>
    );
};

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle;
