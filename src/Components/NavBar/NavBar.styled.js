import styled from 'styled-components';

const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-bottom: .5px solid ${({ theme }) => theme.border};
    font-size: 16px;
    font-weight: 600;
    height: 80px;
`;

const StyledLogo = styled.div`
    display: flex;


`
const StyledMenu = styled.div`
    display: flex;
    align-items: center;
    a{
        padding: 1rem;
        color: ${({ theme }) => theme.textDisable};
        text-decoration: none;
        &:hover{
            color: ${({ theme }) => theme.textActive};
            text-decoration: none;
        }
    }
`
const StyledBlock = styled.div`
    margin: auto 0;
    a.btn{
        margin-top: 0;
        padding:.75rem 1.5rem;
        background: transparent;
        border: .5px solid ${({ theme }) => theme.border};
        color: ${({ theme }) => theme.text};
        border-radius: 20px;
        font-size: 16px;
        font-weight: 600;
        line-height: 0;
        &:hover{
            background: ${({ theme }) => theme.textActive};
            border: .5px solid ${({ theme }) => theme.textActive};
            color: #fff;
        }
    }
`





export {StyledHeader, StyledLogo, StyledMenu, StyledBlock};