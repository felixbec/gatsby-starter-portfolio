import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../Components/Layout"
import { Parallax } from 'react-parallax';
import "./styles.scss"

const insideStyles = {
    background: "transparent",
    border: "2px solid #fff",
    color: "#fff",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
    };

const insideStyles2 = {
    color: "#Fff",
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%,-50%)"
};

const Page = ({ data }) => {

    const featuredImage = data.contentfulPage.featuredImage.image.fluid.src
    return (
        <Layout>
            <div className="container">
                <div className="spotlight-article row">
                    <div className="col-md-6 spotlight-article-image">
                        <img src={data.contentfulPage.spotlightArticle.heroImage.fluid.src} alt={data.contentfulPage.spotlightArticle.heroImage.description} height="auto" width="100%" />
                    </div>
                    <div className="col-md-6 spotlight-article-content">
                        <div className="spotlight-article-title"><h2>{data.contentfulPage.spotlightArticle.title}</h2></div>
                        <p className="spotlight-article-excerpt">{data.contentfulPage.spotlightArticle.description.childMarkdownRemark.excerpt}</p>
                        <Link className="spotlight-article-linkable btn" to={data.contentfulPage.spotlightArticle.slug}>Read More</Link>
                    </div>
                </div>

                <div className="content">
                    <div dangerouslySetInnerHTML={{ __html: data.contentfulPage.content.childMarkdownRemark.html }} />
                </div>
            

                <div className="popular-blog-posts">
                    <div className="col-md-12"><h5>POPULAR ARTICLES</h5></div> 
                    <div className="col-md-12">
                        <div className="row">
                            {data.contentfulPage.popularPosts.map((popularPosts) => (
                                <div key={popularPosts.id} className="col-md-6 post">
                                    <Link className="post-slug" to={popularPosts.slug} style={{textDecoration:`none`}}>
                                        <img className="post-image" src={popularPosts.heroImage.fluid.src} alt={popularPosts.heroImage.description} height="268" width="100%" />
                                        <div className="post-meta" style={{margin:`15px 0`}}>
                                            <span>{popularPosts.category}</span>
                                        </div>
                                        <h4 className="post-title">{popularPosts.title}</h4>
                                    </Link>
                                </div>
                            ))} 
                        </div>
                    </div>
                </div>
            </div>

            <div className="featured-image">
                <Parallax bgImage={featuredImage} strength={500}>
                    <div className="featured-image__parallax" >
                        <div style={insideStyles2}><h3>{data.contentfulPage.featuredImage.title}</h3></div>
                        <Link style={insideStyles} to={data.contentfulPage.featuredImage.slug}>{data.contentfulPage.featuredImage.linkableTitle}</Link>
                    </div>
                </Parallax>
            </div>

            <div className="container">
                <div className="recent-blog-posts">
                    <div className="col-md-12"><h5>LATEST ARTICLES</h5></div> 
                    {data.allContentfulBlogPost.edges.map(({node}) => (
                        <div key={node.id} className="col-md-12 post">
                            <Link className="row post-slug" to={node.slug} style={{textDecoration:`none`}}>
                                <img className="col-md-5 post-image" src={node.heroImage.fluid.src} alt={node.heroImage.description} height="268" width="100%" />
                                <div className="col-md-7 post-meta" style={{margin:`15px 0`}}>
                                    <span>{node.category}</span>
                                    <h4 className="post-title">{node.title}</h4>
                                    <span>{node.publishDate}</span>
                                </div>
                                
                            </Link>
                        </div>
                    ))} 
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query PageQuery($slug: String!){
        contentfulPage(slug: {eq: $slug}) {
            id
            slug
            pageTitle

            content {
                childMarkdownRemark {
                    html
                }
            }

            spotlightArticle {
                title
                slug
                description {
                    childMarkdownRemark {
                        excerpt
                    }
                }
                heroImage {
                    fluid {
                        src
                    }
                    description
                }
            }

            popularPosts {
                slug
                title
                category
                publishDate (formatString: "MM-DD-YYYY")
                heroImage {
                    fluid {
                        src
                    }
                    description
                }
            }

            featuredImage{
                id
                slug
                title
                linkableTitle
                linkableDescription {
                    childMarkdownRemark {
                    excerpt
                    }
                }
                image {
                    fluid {
                    src
                    }
                    description
                }
            }
        }

        allContentfulBlogPost(sort: {fields: publishDate, order: DESC} limit: 5) {
            edges {
                node {
                    heroImage {
                        description
                        fluid {
                            src
                        }
                    }
                    slug
                    title
                    publishDate(formatString: "YYYY-MM-DD")
                    id
                    category
                }
            }
        }
    }
`
export default Page;