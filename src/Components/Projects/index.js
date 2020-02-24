import React from "react"
import { graphql, useStaticQuery  } from "gatsby"
import { StyledContainer, StyledProject, StyledImage, StyledContent, StyledLinkable } from './Project.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons"
import Fade from 'react-reveal/Fade';

const Projects = (props) => {
    const data = useStaticQuery(
        graphql`
            query {
                allContentfulProject(limit: 4) {
                    edges {
                        node {
                            id
                            name
                            type
                            projectUrl
                            repositoryUrl
                            logo {
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
        <StyledContainer id="projects" className="container">
            <h1>#Lastest Work</h1>
            <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            {data.allContentfulProject.edges.map(({ node }) => {
                return (
                    <Fade left key={node.id}>
                        <StyledProject className="row">
                            <StyledImage background={`${node.logo.fluid.src}`} className="col-md-8" />
                            <StyledContent className="col-md-4">
                                <div className="information">
                                    <h3>#{node.name}</h3>
                                    <p>&mdash; {node.type}</p>
                                </div>

                                <div className="linkable">
                                    <StyledLinkable href={`${node.projectUrl}`}>
                                        <span className="linkable__title">View Work</span>
                                        <span><FontAwesomeIcon icon={faArrowAltCircleRight} color="#72D8FE" size="2x" /></span>
                                    </StyledLinkable>
                                </div>
                            </StyledContent>
                        </StyledProject>
                    </Fade>
                )
            })}
        </StyledContainer>
    )
}

export default Projects