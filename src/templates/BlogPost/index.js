import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../Components/Layout"
import SEO from "../../Components/SEO"
import "./styles.scss"

export default ({ data }) => {
    {/*
    const post = data.contentfulBlogPost;
    
    const tags = post.tags;
    
    return (
        
        <Layout>
            <SEO title={post.title} description={post.description.description} />
            <div className="post-header">
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
                                    <div className="post-tags">
                                        {tags.map((item , index) => (
                                            <Link className="tags" to={`/tags/${item.toLowerCase()}/`} key={index}>{item}</Link>
                                        ))}
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container post-body">
                <div dangerouslySetInnerHTML={{ __html: post.body.childMarkdownRemark.html }} />
                <div className="post-body__image">
                    <img src={post.heroImage.fluid.src} alt={post.heroImage.description}/>
                </div>
            </div>
        </Layout>
        
    ) */}
}

{/*
    export const query = graphql`
    query blogPostQuery($slug: String!) {
        contentfulBlogPost (slug: {eq: $slug}) {
            title
            slug
            tags
            publishDate(formatString: "MMMM DD YYYY")
            body {
                childMarkdownRemark {
                    html
                }
            }
            description {
                description
            }
            heroImage {
                id
                description
                fluid {
                    src
                }
            }
            headerImage {
                id
                description
                fluid {
                    src
                }
            }
        }
    }
`
*/}