import styled from 'styled-components';

const StyledContact = styled.footer`
    margin: 3rem 0;
    h1 {
        color: ${({ theme }) => theme.textActive};
    }
    h2, h3, h4, h5, h6{
        color: ${({ theme }) => theme.accentText};
    }
    
    .contact-topbar__col--left{
        .right{
            display: flex;
            justify-content: flex-end;
        }
        ul{
            margin:0;
            list-style:none;
            li{
                a{
                    color: #A7BFD3;
                    .col__social__username{
                        margin-left: 1rem;
                    }

                    :hover{
                        color: ${({ theme }) => theme.textActive};
                        text-decoration: none;
                    }
                }
                
            }
            
        }
    }

    .contact-topbar__col--right{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        h3{color: ${({ theme }) => theme.textActive};}
        span{color: #A7BFD3;}
    }

    .contact-bottombar{
        display: flex;
        justify-content: space-between;
        margin: 1rem 0;
        border-top: 1 solid #A7BFD3;
        .contact-bottombar__linkables{
            ul{
                margin: 0;
                .linkable{
                    margin: 1rem;
                }
            }
        }
    }
`

export {StyledContact};