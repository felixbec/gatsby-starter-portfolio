import React from "react"
import { graphql, useStaticQuery  } from "gatsby"
import { StyledContainer, StyledCard } from './Resume.styled';
import Fade from 'react-reveal/Fade';


const Resume = (props) => {
    const data = useStaticQuery(
        graphql`
            query {
                allContentfulExperience(limit: 4) {
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
            <h1>#{data.contentfulAbout.yearsOfExperience};<br/>Years</h1>
            <Fade bottom>
                <div className="card-deck">
                    {data.allContentfulExperience.edges.map(({ node }) => {
                        return (
                            <StyledCard className="card" key={node.id}>
                                <h3>{node.year}</h3>
                                <p>{node.jobTitle}</p>
                                <span>{node.jobShortDescription.childMarkdownRemark.excerpt}</span>
                            </StyledCard>
                        )
                    })}
                </div>
            </Fade>

            <div className="line"></div>
        </StyledContainer>
    )
}

export default Resume