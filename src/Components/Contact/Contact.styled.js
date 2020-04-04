import styled from 'styled-components';

const StyledContact = styled.footer`
    margin: 3rem auto;
    h1 {
        color: ${({ theme }) => theme.textActive};
    }
    h2, h3, h4, h5, h6{
        color: ${({ theme }) => theme.accentText};
    }
    
    .contact-topbar__col--left{
        display: flex;
        align-items: center;
        @media (max-width: 992px){
                justify-content: center;
            }
            @media (max-width: 768px){
                padding-bottom: 2rem;
            }
        & > div{
            columns: 2;
            @media (max-width: 992px){
                columns: unset;
            }
            
        }
        ul{
            margin:0;
            list-style:none;
            li{
                a{
                    color: ${({ theme }) => theme.accentButton};
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
                margin: 10px 0;
                border:none;
                border-bottom: 1px solid ${({ theme }) => theme.border};
                color: ${({ theme }) => theme.accentButton};
                min-width:300px;

                &::placeholder {
                    color: ${({ theme }) => theme.accentButton};
                    opacity: 1;
                }
            }
            button{
                background: transparent;
                color: ${({ theme }) => theme.accentButton};
                border-color: ${({ theme }) => theme.border};
                border-radius: 50px;
                margin-top:10px;
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
        border-top: 1px solid ${({ theme }) => theme.accentButton};
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