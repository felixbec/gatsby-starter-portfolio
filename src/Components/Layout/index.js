import React from "react"
import { ThemeProvider } from 'styled-components'
import { theme } from '../../Theme'
import { Helmet } from "react-helmet"
import Header from "../Header"
import Footer from "../Footer"
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.scss'

function Layout({ children }) {
    return (
        <div style={{overflowX: 'hidden'}}>
            <ThemeProvider theme={theme}>
                <Helmet>
                    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/instantsearch.js@2.10.4/dist/instantsearch.min.css" />
                    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/instantsearch.js@2.10.4/dist/instantsearch-theme-algolia.min.css"/>
                </Helmet>
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            </ThemeProvider>
        </div>
    )
}

export default Layout;