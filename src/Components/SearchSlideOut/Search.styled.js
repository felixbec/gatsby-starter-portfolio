import styled from 'styled-components';

export const StyledSearch = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: ${({ theme }) => theme.primaryLight};
    height: 100vh;
    text-align: left;
    padding: 2rem;
    position: fixed;
    top: 0;
    right: 0;
    transition: transform 0.3s ease-in-out;
    transform: ${({ openSearch }) => openSearch ? 'translateX(0%)' : 'translateX(100%)'};
    z-index: 1;
    width: 400px;
    @media (max-width: ${({ theme }) => theme.desktop}) {
        width: 350px;
    } 
    @media (max-width: ${({ theme }) => theme.tablet}) {
        width: 100%;
    }

    a {
        font-size: 2rem;
        text-transform: uppercase;
        padding: 2rem 0;
        font-weight: bold;
        letter-spacing: 0.5rem;
        color: ${({ theme }) => theme.primaryDark};
        text-decoration: none;
        transition: color 0.3s linear;
        
        @media (max-width: ${({ theme }) => theme.mobile}) {
        font-size: 1.5rem;
        text-align: center;
        }

        &:hover {
        color: ${({ theme }) => theme.primaryHover};
        }
    }

    .ais-SearchBox input{
        background: transparent;
        border-bottom: 1px solid #d7d7d7!important;
    }
`;