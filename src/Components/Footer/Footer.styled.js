import styled from 'styled-components';

const StyledFooter = styled.footer`
    padding-top: 3rem;
    border-top: 1px solid ${({ theme }) => theme.border};
    h1 {
        color: ${({ theme }) => theme.textActive};

    }
    h2, h3, h4, h5, h6{
        color: ${({ theme }) => theme.accentText};
    }
    .footer-topbar{
        border-bottom: 1px solid ${({ theme }) => theme.border};
        padding-bottom: 1rem;
        .col-md-6{padding: 0;}
        .footer-topbar__col--left{
            img{
                height: 75px;
                margin: 0;
            }
        }
        .footer-topbar__col--right{
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
            ul{
                margin:0;
                list-style:none;
                .footer-topbar__item{
                    display: inline;
                    margin: .5rem;
                    a span svg{
                        
                        :hover{
                            color: ${({ theme }) => theme.textActive};
                            text-decoration: none;
                        }
                    }
                    
                }
                
            }
        }
    }

    .footer-bottombar{
        display: flex;
        justify-content: space-between;
        margin: 2rem auto;
        padding:0;
        

        .footer-bottombar__linkables{
            ul{
                margin: 0;
                .linkable{
                    color: ${({ theme }) => theme.textDark};
                    margin: 0 1rem;
                    text-transform: uppercase;
                    text-decoration: none;
                    font-size: ${({ theme }) => theme.textSmall};
                    &.first{margin-left:0;}
                }
            }
        }
        .footer-bottombar__copyright{
            font-size: ${({ theme }) => theme.textSmall};
            color: ${({ theme }) => theme.textDark};
        }
    }
`

export {StyledFooter};