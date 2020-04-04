import React from 'react'
import { func, string } from 'prop-types';
import { StyledContainer, ToggleContainer } from './Toggle.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"

const Toggle = ({ theme, toggleTheme }) => {
    const isLight = theme === 'light';
    return (
        <StyledContainer>
            <ToggleContainer lightTheme={isLight} onClick={toggleTheme} >
                <FontAwesomeIcon icon={faMoon} />
                <FontAwesomeIcon icon={faSun} />
            </ToggleContainer>
        </StyledContainer>
    );
};

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle;
