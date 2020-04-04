import styled from 'styled-components';

const StyledContainer = styled.div`
    display: flex;
    padding-top: 3rem;
    h1 {
        color: ${({ theme }) => theme.textActive};
    }
    h2, h3, h4, h5, h6{
        color: ${({ theme }) => theme.accentText};
    }
    /*clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 100px));
    background: ${({ theme }) => theme.angleBG};*/
`
const StyledImage = styled.img`
`
const StyledAuthorInfo = styled.div`
    h1{
        font-size: ${({ theme }) => theme.textXXLarge};
    }
    span{
        margin-top: 1rem;
    }
` 

const StyledCodeBlock = styled.div`
    background: ${({ theme }) => theme.gradient};
`

export {StyledContainer, StyledImage, StyledAuthorInfo, StyledCodeBlock};