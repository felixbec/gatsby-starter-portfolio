import styled from 'styled-components';

const ToggleContainer = styled.button`
    background: #0EE6B8;
    border: 2px solid ${({ theme }) => theme.toggleBorder};
    border-radius: 30px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    overflow: hidden;
    padding: 0.5rem;
    position: relative;
    width: 4rem;
    height: 2rem;

    svg {
        height: auto;
        width: 2.5rem;
        transition: all 0.3s linear;
        
        // sun icon
        &:first-child {
        transform: ${({ lightTheme }) => lightTheme ? 'translateX(0)' : 'translateX(100px)'};
        }
        
        // moon icon
        &:nth-child(2) {
        transform: ${({ lightTheme }) => lightTheme ? 'translateX(-100px)' : 'translateX(0)'};
        }
    }
`;

export {ToggleContainer};