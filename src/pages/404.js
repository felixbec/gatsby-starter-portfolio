import React from "react"
import Layout from "../Components/Layout"
import styled from 'styled-components'

const CenteredHeader = styled.h2`
    padding: 5rem 0;
    text-align: center;
`

const ErrorPage = () => {
    return (
        <Layout>
            <CenteredHeader>Oh No! Page Not Found</CenteredHeader>
        </Layout>
    )
}

export default ErrorPage