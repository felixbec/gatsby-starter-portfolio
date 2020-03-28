import React from "react"
import { graphql, useStaticQuery  } from "gatsby"
import { StyledContainer, StyledCard } from './Resume.styled';
import Fade from 'react-reveal/Fade';


const Resume = (props) => {
    const data = useStaticQuery(
        graphql`
            query {
                allContentfulExperience(sort: {fields: year, order: DESC}, limit: 4) {
                    edges {
                        node {
                            id
                            jobTitle
                            year
                            jobShortDescription {
                                childMarkdownRemark {
                                    excerpt
                                }
                            }
                        }
                    }
                }
                contentfulAbout {
                    yearsOfExperience
                }
            }
        `
    )
    return (
        <StyledContainer id="resume" className="container">
            <div className="card-deck row">
                {data.allContentfulExperience.edges.map(({ node }) => {
                    return (
                        <Fade bottom key={node.id}>
                            <div className="col-xl-3 col-lg-4 col-md-6 card-holder" >
                                <StyledCard className="card" key={node.id}>
                                    <h3>{node.year}</h3>
                                    <p>{node.jobTitle}</p>
                                    <span>{node.jobShortDescription.childMarkdownRemark.excerpt}</span>
                                </StyledCard>
                            </div>
                        </Fade>
                    )
                })}
            </div>

            <div className="line"></div>
        </StyledContainer>
    )
}

export default Resume