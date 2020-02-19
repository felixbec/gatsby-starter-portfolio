// global.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box;
    }
    body {
        background-color: ${({ theme }) => theme.body}!important;
        color: ${({ theme }) => theme.text}!important;
        height: 100vh;
        margin: 0;
        padding: 0;
        font-family: Roboto, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif!important;
        transition: all 0.25s linear;
    }

    h1, h2, h3, h4, h5 , h6{
        color: ${({ theme }) => theme.text};
        font-family: Roboto, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif;
    }
`