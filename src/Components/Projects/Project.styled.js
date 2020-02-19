import styled from 'styled-components';
import blockchain from "../../images/blockchain.png"

const StyledContainer = styled.div`
    margin: 5rem 0;
    h1{color: ${({ theme }) => theme.textActive};}
    p{color: ${({ theme }) => theme.accentText}; font-size: 1.5rem;}
`

const StyledProject = styled.div`
    width: 100%;
    margin: 5rem 0;
    
`

const StyledImage = styled.div`
    background: ${({ theme }) => theme.bgGradient}, url(${blockchain});
    height: 400px;
    background-size: contain;
`

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;

    div{
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .information{
        margin-left:-50%;
        h3{color: ${({ theme }) => theme.textActive};}
        p{color: ${({ theme }) => theme.accentText};}

    }
    
`

const StyledLinkable = styled.a`
    color: ${({ theme }) => theme.text};
    :hover{
        text-decoration: none; 
        color: ${({ theme }) => theme.text};
        span svg{
            color: ${({ theme }) => theme.textActive};
        }
    }

    span{
        svg{
            vertical-align: middle;
            margin-left: 1rem;
            }
    }
`

export {StyledContainer, StyledProject, StyledImage, StyledContent, StyledLinkable};