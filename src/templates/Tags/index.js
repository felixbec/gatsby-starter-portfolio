import React from "react"
import PropTypes from "prop-types"
import Layout from "../../Components/Layout"
import './styles.scss'

// Components
import { Link, graphql } from "gatsby"

const Tags = ({ pageContext, data }) => {
    const { tag } = pageContext
    const { edges, totalCount } = data.allContentfulBlogPost
    const tagHeader = `${totalCount} post${
        totalCount === 1 ? "" : "s"
    } tagged with "${tag}"`

    return (
        <Layout>
            <div className="container">
                <h2>{tagHeader}</h2>
                <Link className="btn" to="/tags">All tags</Link>

                <div className="tagged-posts">
                    {edges.map(({ node }) => {
                    const { slug, title, publishDate, description, author } = node
                    return (
                        <div className="tagged-posts--item" key={slug}>
                            <Link to={slug}>
                                <h4>{title}</h4>
                                <p>{description.description}</p>
                            </Link>
                                <div className="tagged-posts--item__meta">
                                    <img alt="Author Profile" src={author.image.fluid.src} />
                                    <span>{author.name} on {publishDate}</span>
                                </div>
                            
                        </div>
                    )
                    })}
                </div>
                
            </div>
        </Layout>
    )
}

Tags.propTypes = {
    pageContext: PropTypes.shape({
        tag: PropTypes.string.isRequired,
    }),
    data: PropTypes.shape({
        allContentfulBlogPost: PropTypes.shape({
        totalCount: PropTypes.number.isRequired,
        edges: PropTypes.arrayOf(
            PropTypes.shape({
            node: PropTypes.shape({
                title: PropTypes.string.isRequired,
                slug: PropTypes.string.isRequired,
            }),
            }).isRequired
        ),
        }),
    }),
}

export default Tags

export const pageQuery = graphql`
    query($tag: String) {
        allContentfulBlogPost(
        limit: 2000
        filter:  { tags: { in: [$tag] } } 
        ) {
            totalCount
            edges {
                node {
                    slug
                    title
                    description {
                        description
                    }
                    author {
                        name
                        image {
                            fluid {
                                src
                            }
                        }
                    }
                    publishDate(formatString: "MMMM DD, YYYY")
                }
            }
        }
    }
`