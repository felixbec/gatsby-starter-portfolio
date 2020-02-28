import React from "react"
import Layout from "../Components/Layout"
import Header from "../Components/Header"
import Resume from "../Components/Resume"
import Projects from "../Components/Projects"
import BlogPosts from "../Components/BlogPosts"

const App = () => {
    return (
        <Layout>
            <Header />
            <Resume />
            <Projects />
            <BlogPosts />
        </Layout>
    )
}

export default App