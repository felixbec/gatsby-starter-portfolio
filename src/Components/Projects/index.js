import React from "react"
import { graphql, useStaticQuery  } from "gatsby"
import { StyledContainer, StyledProject, StyledImage, StyledImageAlt, StyledContent, StyledContentAlt } from './Project.styled'
import SlideAnimation from 'react-reveal/Slide';


import Modal from '../Modal'

const Projects = (props) => {
    let counter = 0;
    const data = useStaticQuery(
        graphql`
            query allProjects {
                allContentfulProject(limit: 4) {
                    edges {
                        node {
                            id
                            name
                            type
                            description
                            slug
                            repositoryUrl
                            logo {
                                fluid {
                                    src
                                }
                            }
                            slideshow {
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
            <SlideAnimation bottom>
            {data.allContentfulProject.edges.map(({ node }) => {
                counter++;
                if(counter%2 === 0){
                    return (
                        <div key={node.id} className="project-holder">
                            <StyledProject className="row">
                                <StyledImage background={`${node.logo.fluid.src}`} className="col-md-8" />
                                <StyledContent className="col-md-4">
                                    <div className="information">
                                        <h3>#{node.name}</h3>
                                        <p>&mdash; {node.type}</p>
                                    </div>
                                    <div className="linkable">
                                        <Modal name={node.name} type={node.type} description={node.description} link={node.slug} git={node.repositoryUrl} images={node.logo.fluid.src} />
                                    </div>
                                    {/*{node.slideshow.map((value, index ) => {
                                        return <img src={value.fluid.src} alt="map" />
                                    })}*/}
                                </StyledContent>
                            </StyledProject>
                        </div>
                    )
                } else {
                    return(
                        <div key={node.id} className="project-holder">
                            <StyledProject className="row">
                                <StyledImageAlt background={`${node.logo.fluid.src}`} className="col-md-8" />
                                <StyledContentAlt className="col-md-4">
                                    <div className="information">
                                        <h3>#{node.name}</h3>
                                        <p>&mdash; {node.type}</p>
                                    </div>
                                    <div className="linkable">
                                        <Modal name={node.name} type={node.type} description={node.description} link={node.slug} git={node.repositoryUrl} />
                                    </div>
                                </StyledContentAlt>
                                
                            </StyledProject>
                        </div>
                    )
                }
            })}
            </SlideAnimation>
        </StyledContainer>
    )
}

export default Projects