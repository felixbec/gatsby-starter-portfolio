import styled from 'styled-components';

const StyledContainer = styled.div`
    margin: 5rem auto;
    h1{color: ${({ theme }) => theme.textActive};}
    p{color: ${({ theme }) => theme.accentText}; font-size: 1.5rem;}

    /*@media (min-width: 768px) {
        .project-holder:nth-child(2n){
            .row{
                .col-md-8{
                    order: 2;
                    background: ${({ theme }) => theme.bgGradientRight}, url(${props => props.background});
                }
                .col-md-4{
                    .information{
                        margin-left: 0;
                        margin-right: -50%;
                    }
                    div{
                        align-items: flex-end;
                    }
                }
            }
        }
    }*/
`

const StyledProject = styled.div`
    width: 100%;
    margin: 5rem 0!important;
`

const StyledImage = styled.div`
    background: ${({ theme }) => theme.bgGradient}, url(${props => props.background});
    height: 400px;
    background-size: contain;
    @media (max-width: 768px) {
        height: 250px;
    }
    @media (max-width: 992px) and (min-width: 768px) {
        height: 350px;
    }
`
const StyledImageAlt = styled(StyledImage)`
    order:2;
    background: ${({ theme }) => theme.bgGradientRight}, url(${props => props.background});
    background-size: contain;
    @media (max-width: 768px) {
            order: 0;
        }
`

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        text-align: right;
        padding: 10px;
    }

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;

        @media (max-width: 768px) {
                height: auto;
            }
    }
    div.popup-overlay{
        height: auto;
    }
    .information{
        margin-left:-50%;
        height: 50%;
        @media (max-width: 768px) {
                margin-left: 0;
            }
        h3{color: ${({ theme }) => theme.textActive};}
        p{color: ${({ theme }) => theme.accentText};}
    }
    
`

const StyledContentAlt = styled(StyledContent)`
    .information{
        margin-left: 0;
        margin-right: -50%;
        height: 50%;
        align-items: flex-end;
        @media (max-width: 768px) {
            margin: 0;
        }
    }
    .linkable{
        align-items: flex-end;
    }

`

export {StyledContainer, StyledProject, StyledImage, StyledImageAlt, StyledContent, StyledContentAlt};