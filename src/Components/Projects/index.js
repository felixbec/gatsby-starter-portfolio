import React from "react"
import { graphql, useStaticQuery  } from "gatsby"
import { StyledContainer, StyledProject, StyledImage, StyledImageAlt, StyledContent, StyledContentAlt, StyledLinkable, StyledPopup } from './Project.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faArrowAltCircleRight, faArrowAltCircleLeft, faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons"
import SlideAnimation from 'react-reveal/Slide';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';



const Modal = (props) => {
    return(
        <StyledPopup
        trigger={
            <StyledLinkable>
                <span className="linkable__title">View Work</span>
                <span><FontAwesomeIcon icon={faArrowAltCircleRight} color="#72D8FE" size="2x" /></span>
            </StyledLinkable> 
        }
        modal
        closeOnDocumentClick
        >
        {close => (
            <div className="modal__holder">
                <button className="close" onClick={close}>&times;</button>
                <div className="modal__content">
                    
                    <h2>{props.name}</h2>
                    <span>{props.type}</span>
                    <hr/>
                    <p>{props.description}</p>
                    <div className="modal__content__links">
                        <a className="btn" target="_blank" rel="noopener noreferrer" href={props.link}><FontAwesomeIcon icon={faExternalLinkSquareAlt} />View Site</a>
                        <a target="_blank" rel="noopener noreferrer" href={props.git}><FontAwesomeIcon icon={faGithub}  size="2x" color="#0EE6B8"/></a>
                    </div>
                </div>
                <div className="modal__carousel">
                    <CarouselProvider
                        naturalSlideWidth={50}
                        naturalSlideHeight={25}
                        totalSlides={3}
                        >
                            <Slider>
                                <Slide index={0}><img src={props.images} alt="candy" /></Slide>
                                <Slide index={1}><img src={props.images} alt="candy" /></Slide>
                                <Slide index={2}><img src={props.images} alt="candy" /></Slide>
                            </Slider>
                            <div className="modal__carousel__links">
                                <ButtonBack><FontAwesomeIcon icon={faArrowAltCircleLeft} color="#72D8FE" size="2x" /></ButtonBack>
                                <ButtonNext><FontAwesomeIcon icon={faArrowAltCircleRight} color="#72D8FE" size="2x" /></ButtonNext>
                            </div>
                            <DotGroup />
                    </CarouselProvider>
                </div>
            </div>
        )}
        </StyledPopup>
    )
}

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
                        <div className="project-holder">
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
                        <div className="project-holder">
                            <StyledProject className="row">
                                <StyledImageAlt background={`${node.logo.fluid.src}`} className="col-md-8" />
                                <StyledContentAlt className="col-md-4">
                                    <div className="information">
                                        <h3>#{node.name}</h3>
                                        <p>&mdash; {node.type}</p>
                                    </div>
                                    <div className="linkable">
                                        <Modal name={node.name} type={node.type} description={node.description} link={node.slug} git={node.repositoryUrl} images={node.logo.fluid.src} />
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