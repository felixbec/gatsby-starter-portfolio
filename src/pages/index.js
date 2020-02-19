import React from "react"
import Layout from "../Components/Layout"
import Header from "../Components/Header"
import Resume from "../Components/Resume"
import Projects from "../Components/Projects"

const App = () => {
    return (
        <Layout>
            <Header />
            <Resume />
            <Projects />
        </Layout>
    )
}

export default App