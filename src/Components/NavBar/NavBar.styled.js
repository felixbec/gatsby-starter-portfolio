import styled from 'styled-components';

const StyledContainer = styled.div`
    border-bottom: .5px solid ${({ theme }) => theme.border};
    /*background: ${({ theme }) => theme.angleBG};*/
    .headroom--pinned {
        /*background: ${({ theme }) => theme.angleBG};*/
        background: ${({ theme }) => theme.body};
        border-bottom: .5px solid ${({ theme }) => theme.border};
    }
`

const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: transparent;
    font-size: ${({ theme }) => theme.textSmall};
    font-weight: 600;
    height: 80px;
`;

const StyledLogo = styled.div`
    display: flex;
    align-items: center;
    img{height: 50px; margin: 0;}

`
const StyledMenu = styled.div`
    display: none;
    @media (min-width: ${({ theme }) => theme.desktop}) {
        display: flex;
        justify-content: center;
    }
    align-items: center;
    a{
        padding: 1rem;
        color: ${({ theme }) => theme.textDisable};
        text-decoration: none;
        text-transform: uppercase;
        &:hover{
            color: ${({ theme }) => theme.textActive};
            text-decoration: none;
        }
    }
`

const StyledHamburgerHolder = styled.div`
    display: none;
    align-items: center;
    @media (max-width: ${({ theme }) => theme.desktop}) {
        display: flex;
    }
`

export {StyledContainer, StyledHeader, StyledLogo, StyledMenu, StyledHamburgerHolder};