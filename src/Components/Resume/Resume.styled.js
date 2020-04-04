import styled from 'styled-components';

const StyledContainer = styled.div`
    margin-top: 3rem;
    
    .card-deck{
        margin:5rem 0;
        .card-holder{
            @media (max-width:1200px) and (min-width: 992px) {
                &:last-child{
                    display:none;
                }
            }
            @media (min-width: 1200px) {
                &:nth-child(2n){
                    margin-top: 2rem;
                }
            }
            .card{padding: 1.5rem 1rem; margin: 2rem 0;}
        }
        
    }

    .line{
        width: 100%;
        height: 2px;
        background: linear-gradient(to right, rgba(1, 254, 228, 0) 0%, rgba(14, 230, 184) 20%, rgba(14, 230, 184) 80%, rgba(1, 254, 228, 0) 100%);
    }
`

const StyledCard = styled.div`
    /*background: ${({ theme }) => theme.gradient};*/
    background: transparent!important;
    border: 1px solid ${({ theme }) => theme.border}!important;
    border-radius: 0!important;

    h3{
        color: ${({ theme }) => theme.textActive};
        font-size: ${({ theme }) => theme.textLarge};
    }
    p{
        color: ${({ theme }) => theme.accentText};
        font-size: ${({ theme }) => theme.textSmall};
    }
    span{
        color: ${({ theme }) => theme.text};
        font-size: ${({ theme }) => theme.textXSmall};
    }
`

export {StyledContainer, StyledCard};