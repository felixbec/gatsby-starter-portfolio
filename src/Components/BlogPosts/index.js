import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {StyledContainer, StyledImage} from "./BlogPosts.styled"
import SiteConfigs from '../../SiteConfig';
import Fade from 'react-reveal/Fade';

const BlogPosts = ( props ) => {

    const data = useStaticQuery(
        graphql`
            query BlogPostsQuery{
                allContentfulBlogPost(sort: {fields: publishDate, order: DESC} limit: 3) {
                    edges {
                        node {
                            id
                            title
                            slug
                            publishDate(formatString: "MMMM DD,YYYY")
                            previewImage {
                                fluid {
                                    src
                                }
                            }
                        }
                    }
                }
            }
        `
    )

    return (
        <StyledContainer id="blog" className="container">
            <div>
                <h1>{SiteConfigs.BlogPosts_title}</h1>
                <p>{SiteConfigs.BlogPosts_description}</p>
                    <div className="row">
                        {data.allContentfulBlogPost.edges.map(({node}) => (
                            <Fade bottom key={node.id}>
                                <div className="col-lg-4 col-md-6 post" >
                                    <StyledImage className="post-image" src={node.previewImage.fluid.src} alt={node.previewImage.description} height="268" width="100%" />
                                    <div className="post-meta" style={{margin:`15px 0`}}>
                                        <h4 className="post-title">{node.title}</h4>
                                        <span>{node.publishDate}</span>
                                    </div>
                                    <a className="post-slug" target="_blank" rel="noopener noreferrer" href={node.slug} style={{textDecoration:`none`}}>Read More <i className="fas fa-arrow-circle-right"></i></a>
                                </div>
                            </Fade>
                        ))} 
                    </div>
            </div>
        </StyledContainer>
    )
}

export default BlogPosts;