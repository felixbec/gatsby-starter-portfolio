import React from "react"
import { ThemeProvider } from 'styled-components'
import {lightTheme, darkTheme } from '../../Theme'
import { useDarkMode } from '../../useDarkMode';
import { GlobalStyles } from '../../Global';
import { Helmet } from "react-helmet"
//import Toggle from "../Toggle"
import NavBar from "../NavBar"
import Footer from "../Footer"
import Contact from "../Contact"
import 'bootstrap/dist/css/bootstrap.min.css'



function Layout({ children }) {
    // App.js
    const [theme, toggleTheme, componentMounted] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    if (!componentMounted) {
        return <div />
    };

    return (
        <div style={{overflowX: 'hidden'}}>
            <ThemeProvider theme={themeMode}>
                <>
                    <GlobalStyles/>
                    <button  onClick={toggleTheme}>Toggle theme</button>
                    <Helmet>
                        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/instantsearch.js@2.10.4/dist/instantsearch.min.css" />
                        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/instantsearch.js@2.10.4/dist/instantsearch-theme-algolia.min.css"/>
                    </Helmet>
                    <NavBar />
                    <main>
                        {children}
                    </main>
                    
                    <Contact />
                    <Footer />
                </>
            </ThemeProvider>
        </div>
    )
}

export default Layout;