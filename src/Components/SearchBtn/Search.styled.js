import styled from 'styled-components';
export const SearchBtn = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 10;
    

    &:focus {
        outline: none;
    }
`;