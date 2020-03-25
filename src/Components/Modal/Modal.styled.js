import styled from 'styled-components';
import Popup from 'reactjs-popup';

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

export {StyledLinkable, StyledPopup};