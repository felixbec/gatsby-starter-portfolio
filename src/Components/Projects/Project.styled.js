import styled from 'styled-components';
import Popup from 'reactjs-popup';

const StyledContainer = styled.div`
    margin: 5rem 0;
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
        z-index:1;
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
const StyledPopup = styled(Popup)`
    /* use your custom style for ".popup-overlay"
    &-overlay {
    background-color: red;
    }*/
    /* use your custom style for ".popup-content"*/

    &-content {
        @media (max-width: 992px){
            width: 75%!important;
        }
        @media (max-width: 768px){
            width: 100%!important;
            height: 100%!important;
        }

        .modal__holder{
            .close{
                text-align: right;
                color: ${({ theme }) => theme.textActive};
            }
        
            .modal__content{
                padding: 1rem;
                h2{
                color: ${({ theme }) => theme.textDisable};
                }
                span{
                    color: ${({ theme }) => theme.textDark};
                }
                hr{
                    background: ${({ theme }) => theme.textActive};
                }
                p{
                    font-size: ${({ theme }) => theme.textMedium};
                    color: ${({ theme }) => theme.textDark};
                }
                .modal__content__links{
                    flex-direction: row;
                    justify-content:space-between;

                    a.btn{
                        background: ${({ theme }) => theme.textActive};
                        svg{
                            padding-right: 5px;
                        }
                    }
                }
            }
            .modal__carousel{
                .modal__carousel__links{
                    flex-direction: row;
                    justify-content: space-between;
                    position: relative;
                    bottom: 50%;

                    button{
                        background: transparent;
                        border: none;
                    }
                }
                .carousel__dot-group{
                    flex-direction:row;
                    .carousel__dot{
                        margin: 0 5px;
                    }
                    .carousel__dot--selected{
                        background: ${({ theme }) => theme.textActive};
                    }
                }
            }
        }
    }
    
`


export {StyledContainer, StyledProject, StyledImage, StyledImageAlt, StyledContent, StyledContentAlt, StyledLinkable, StyledPopup};