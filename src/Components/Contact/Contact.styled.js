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
        align-items: center;
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
        form{
            display: flex;
            flex-direction:column;
            label{
                border: 0; 
                clip: rect(0 0 0 0); 
                height: 1px; 
                margin: -1px;
                overflow: hidden;
                padding: 0;
                position: absolute;
                width: 1px;
            }
            input, textarea {
                background:transparent;
                margin: 5px 0;
                border: 1px solid ${({ theme }) => theme.border};;
                color: #A7BFD3;
                min-width:300px;

                &::placeholder {
                    color: #A7BFD3;
                    opacity: 1;
                }
            }
            button{
                background: #A7BFD3;
                border-color: background: ${({ theme }) => theme.border};;
                &:hover{
                    background: ${({ theme }) => theme.textActive};
                    border-color: ${({ theme }) => theme.textActive};
                    color: ${({ theme }) => theme.text};
                }
            }
        }
    }

    .contact-bottombar{
        display: flex;
        justify-content: space-between;
        margin: 1rem 0;
        border-top: 1px solid #A7BFD3;
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