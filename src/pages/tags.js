import React from "react"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../Components/Layout"
import styled from 'styled-components'


const TagButton = styled.a`
    border: 1px solid black;
    justify-content: center;
    text-align:center;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 15px;
    color: #000;

    :hover{
        background: #000;
        color: #fff;
    }
`
const TagHolder = styled.div`
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;

    @media (min-width: 750px) {
        grid-template-columns: repeat(5, 1fr);
    }
`

const TagsPage = ({
    data: {
        allContentfulBlogPost: { group, edges },
        site: {
        siteMetadata: { title },
        },
    },
}) => (
    <div>
        <Helmet title={title} />
        <Layout>
            <div className="container">
                <h2 style={{marginBottom:`2rem`, borderBottom: `1px solid #f7f7f7`, paddingBottom:`1rem`}}>Tags</h2>
                    <TagHolder>
                        {group.map(tag => (
                            <TagButton key={tag.fieldValue} href={`/tags/${kebabCase(tag.fieldValue)}/`}>
                                {tag.fieldValue} ({tag.totalCount})
                            </TagButton>
                        ))}
                    </TagHolder>
            </div>
        </Layout>
    </div>
    )

    TagsPage.propTypes = {
    data: PropTypes.shape({
        allContentfulBlogPost: PropTypes.shape({
        group: PropTypes.arrayOf(
            PropTypes.shape({
            fieldValue: PropTypes.string.isRequired,
            totalCount: PropTypes.number.isRequired,
            }).isRequired
        ),
        }),
        site: PropTypes.shape({
        siteMetadata: PropTypes.shape({
            title: PropTypes.string.isRequired,
        }),
        }),
    }),
    }

    export default TagsPage

    export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allContentfulBlogPost(limit: 2000) {
            group(field: tags) {
                fieldValue
                totalCount
            }
            edges {
                node {
                    title
                    id
                    heroImage {
                        fluid {
                            src
                        }
                    }
                    slug
                    tags
                }
            }
        }
    }
`