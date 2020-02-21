import styled from 'styled-components';

const StyledFooter = styled.footer`
    padding: 3rem 0;
    border-top: 1px solid ${({ theme }) => theme.accentText};
    h1 {
        color: ${({ theme }) => theme.textActive};

    }
    h2, h3, h4, h5, h6{
        color: ${({ theme }) => theme.accentText};
    }
    .footer-topbar{
        .footer-topbar__col--right{
            display: flex;
            justify-content: flex-end;
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
        margin: 1rem 0;
        .footer-bottombar__linkables{
            ul{
                margin: 0;
                .linkable{
                    margin: 1rem;
                }
            }
        }
    }
`

export {StyledFooter};