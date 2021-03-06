import React from "react"
import { ThemeProvider } from 'styled-components'
import {lightTheme, darkTheme } from '../../Theme'
import { useDarkMode } from '../../useDarkMode';
import { Helmet } from "react-helmet"
import Toggle from "../Toggle"
import NavBar from "../NavBar"
import Footer from "../Footer"
import Contact from "../Contact"
import 'bootstrap/dist/css/bootstrap.min.css'
import { GlobalStyles } from '../../Global';


function Layout({ children }) {
    const [theme, toggleTheme, componentMounted] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    if (!componentMounted) {
        return <div />
    };

    if (typeof window !== "undefined") {
        // eslint-disable-next-line global-require
        require("smooth-scroll")('a[href*="#"]')
    }

    return (
        <div style={{overflowX: 'hidden'}}>
            <ThemeProvider theme={themeMode}>
                <>
                    <GlobalStyles/>
                    <Helmet>
                        <script src="https://kit.fontawesome.com/e58833834b.js" crossorigin="anonymous"></script>
                    </Helmet>
                    <Toggle theme={theme} toggleTheme={toggleTheme} />
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