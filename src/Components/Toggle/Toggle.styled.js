import styled from 'styled-components';

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content:flex-end;
    padding-top: 10px;
    padding-right: 10px;
    /*background: ${({ theme }) => theme.angleBG};*/
`

const ToggleContainer = styled.button`
    background: transparent;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    display: flex;
    overflow: hidden;
    position: relative;
    width: 4rem;
    height: 2rem;
    :focus{outline:none;}

    svg {
        height: auto;
        margin: auto;
        width: 2.5rem;
        transition: all 0.3s linear;
        
        // sun icon
        &:first-child {
        transform: ${({ lightTheme }) => lightTheme ? 'translateX(0)' : 'translateX(100px)'};
        display: ${({ lightTheme }) => lightTheme ? 'block' : 'none'};
        }
        
        // moon icon
        &:nth-child(2) {
        transform: ${({ lightTheme }) => lightTheme ? 'translateX(100px)' : 'translateX(0)'};
        display: ${({ lightTheme }) => lightTheme ? 'none' : 'block'};
        }
    }
`;

export {StyledContainer, ToggleContainer};