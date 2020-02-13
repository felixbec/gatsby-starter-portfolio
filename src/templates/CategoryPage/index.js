import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../Components/Layout"
import "./styles.scss"



const CategoryPage = ({ data }) => {
    return (
        <Layout>
            <div className="container">
                <div className="featured-article row">
                    <div className="col-md-6 featured-article-image">
                        <img src={data.contentfulCategoryPage.featuredArticle.heroImage.fluid.src} alt={data.contentfulCategoryPage.featuredArticle.heroImage.description} height="auto" width="100%" />
                    </div>
                    <div className="col-md-6 featured-article-content">
                        <div className="featured-article-title"><h2>{data.contentfulCategoryPage.featuredArticle.title}</h2></div>
                        <p className="featured-article-excerpt">{data.contentfulCategoryPage.featuredArticle.description.childMarkdownRemark.excerpt}</p>
                        <Link className="featured-article-linkable btn" to={data.contentfulCategoryPage.featuredArticle.slug}>Read More</Link>
                    </div>
                </div>

                <div className="lastest-blog-posts">
                    <div className="col-md-12"><h5>LASTEST ARTICLES</h5></div> 
                    <div className="row">
                        {data.contentfulCategoryPage.blogPosts.map((blogPosts) => (
                            <div key={blogPosts.id} className="col-md-4 post">
                                <Link className="post-slug" key={blogPosts.id} to={blogPosts.slug} style={{textDecoration:`none`}}>
                                    <img className="post-image" src={blogPosts.heroImage.fluid.src} alt={blogPosts.heroImage.description} height="268" width="100%" />
                                    <div className="post-meta" style={{margin:`15px 0`}}>
                                        <span>{blogPosts.category}</span>
                                        <span>{blogPosts.publishDate}</span>
                                    </div>
                                    <h4>{blogPosts.title}</h4>
                                </Link>
                            </div>
                        ))} 
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query CategoryPageQuery($slug: String!){
        contentfulCategoryPage(slug: {eq: $slug}) {
            id
            slug
            categoryName

            blogPosts {
                id
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

            featuredArticle {
                title
                description {
                    childMarkdownRemark {
                        excerpt
                    }
                }
                slug
                heroImage {
                    fluid {
                        src
                    }
                    description
                }
            }
        }
    }
`
export default CategoryPage;