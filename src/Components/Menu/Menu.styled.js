import styled from 'styled-components';

export const StyledMenu = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${({ theme }) => theme.textActive};
    height: 100vh;
    text-align: left;
    padding: 2rem;
    position: fixed;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    z-index: 1;
    width: 400px;
    
    @media (max-width: ${({ theme }) => theme.desktop}) {
        width: 100%;
    }

    a {
        font-size: ${({ theme }) => theme.textXLarge};
        text-transform: uppercase;
        padding: 2rem 0;
        font-weight: bold;
        letter-spacing: 0.5rem;
        color: ${({ theme }) => theme.text};
        text-decoration: none;
        transition: color 0.3s linear;
        
        @media (max-width: ${({ theme }) => theme.desktop}) {
        font-size: ${({ theme }) => theme.textLarge};
        text-align: center;
        }

        &:hover {
        color: ${({ theme }) => theme.body};
        text-decoration: none;
        }
    }
`;