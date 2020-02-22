import styled from 'styled-components';

const StyledContainer = styled.div`
    margin-top: 3rem;
    
    .card-deck{
        margin:5rem 0;
        .card{
            padding: 0 1rem;
        }
        .even{
            margin-top: 3rem;
        }
    }

    .line{
        width: 100%;
        height: 2px;
        background: linear-gradient(to right, rgba(1, 254, 228, 0) 0%, rgba(14, 230, 184) 20%, rgba(14, 230, 184) 80%, rgba(1, 254, 228, 0) 100%);
    }
`

const StyledCard = styled.div`
    background: ${({ theme }) => theme.gradient};
    border: 0!important;
    border-radius: 0!important;

    h3{
        padding-top: 1.5rem;
        color: ${({ theme }) => theme.textActive};
        font-size: ${({ theme }) => theme.textXLarge};
    }
    p{
        color: ${({ theme }) => theme.accentText};
        font-size: ${({ theme }) => theme.textMedium};
    }
    span{
        color: ${({ theme }) => theme.text};
        font-size: ${({ theme }) => theme.textSmall};
    }
`

export {StyledContainer, StyledCard};