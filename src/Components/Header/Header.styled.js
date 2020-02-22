import styled from 'styled-components';

const StyledContainer = styled.div`
    display: flex;
    margin-top: 3rem;
    h1 {
        color: ${({ theme }) => theme.textActive};
    }
    h2, h3, h4, h5, h6{
        color: ${({ theme }) => theme.accentText};
    }
`
const StyledImage = styled.img`

`
const StyledAuthorInfo = styled.div`
    h1{
        font-size: 80px;
    }
    span{
        margin-top: 1rem;
    }
` 

const StyledCodeBlock = styled.div`
    background: ${({ theme }) => theme.gradient};
`

export {StyledContainer, StyledImage, StyledAuthorInfo, StyledCodeBlock};