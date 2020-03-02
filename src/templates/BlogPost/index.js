import React from "react"
import { graphql } from "gatsby"
import Layout from "../../Components/Layout"
import SEO from "../../Components/SEO"
import "./styles.scss"

export default ({ data }) => {
    const post = data.contentfulBlogPost;
    
    return (
        
        <Layout>
            <SEO title={post.title} />
            <div className="post-header container">
                <div className="post-header__image">
                    <img src={post.headerImage.fluid.src} alt="Header" />
                </div>

                <div className="post-header__content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 content">
                                <h1>{post.title}</h1>
                                <div className="post-meta">
                                    <span className="post-date">{post.publishDate}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="line container"></div>

            <div className="container post-body">
                <div dangerouslySetInnerHTML={{ __html: post.excerpt.childMarkdownRemark.html }} />
            </div>
        </Layout>
        
    ) 
}


    export const query = graphql`
    query blogPostQuery($slug: String!) {
        contentfulBlogPost (slug: {eq: $slug}) {
            title
            publishDate(formatString: "MMMM DD YYYY")
            slug
            excerpt {
                childMarkdownRemark {
                    html
                }
            }
            headerImage {
                fluid {
                    src
                }
            }
        }
    }
`
