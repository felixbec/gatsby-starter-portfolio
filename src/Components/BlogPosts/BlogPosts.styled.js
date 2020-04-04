import styled from 'styled-components';

const StyledContainer = styled.div`
    background: color: ${({ theme }) => theme.textActive};
    display: flex;
    margin-top: 3rem;
    h1, h2, h3, h4, h5, h6{
        color: ${({ theme }) => theme.textActive};
    }
    p{color: ${({ theme }) => theme.accentText}; font-size: 1.5rem;}
    .post{
        @media (max-width:992px) and (min-width: 768px) {
            &:last-child{
                display:none;
            }
        }
        
        display: flex;
        flex-direction: column;
        margin: 30px 0;
        .post-meta{
            margin: 0!important;
            padding: 2rem 1rem;
            border-left: 1px solid ${({ theme }) => theme.border};
            border-right: 1px solid ${({ theme }) => theme.border};
        }
        
        .post-slug{
            background: #A7BFD3;
            transition: .15s ease-in-out all;
            padding: .5rem;
            text-align: center;
            :hover{
                background: ${({ theme }) => theme.textActive};
            }
            i{
                margin-left: 5px;
                color: ${({ theme }) => theme.body};
            }
        }
        
        span{
                font-size: ${({ theme }) => theme.textSmall};
                color: ${({ theme }) => theme.textDark};
            }
        a{
            color: ${({ theme }) => theme.text}; 
        }
    }
`
const StyledImage = styled.img`
    margin-bottom: 0;
`

export {StyledContainer, StyledImage};