import React from "react"
import { graphql, useStaticQuery  } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faArrowAltCircleRight, faArrowAltCircleLeft, faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons"
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import { StyledLinkable, StyledPopup } from './Modal.styled'

import 'pure-react-carousel/dist/react-carousel.es.css';

const Modal = (props) => {
    const data = useStaticQuery(
        graphql`
            query singleProjects {
                contentfulProject(name: {eq: "Google"}) {
                    slideshow {
                        fluid {
                            src
                        }
                    }
                }
            }
        `
    )
    return(
        <StyledPopup
        trigger={
            <StyledLinkable>
                <span className="linkable__title">View Work</span>
                <span><FontAwesomeIcon icon={faArrowAltCircleRight} size="2x" /></span>
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
                        <a className="icon" target="_blank" rel="noopener noreferrer" href={props.git}><FontAwesomeIcon icon={faGithub}  size="2x"/></a>
                    </div>
                </div>
                <div className="modal__carousel">
                    <CarouselProvider
                        naturalSlideWidth={50}
                        naturalSlideHeight={25}
                        totalSlides={3}
                        >
                            <Slider>
                                {data.contentfulProject.slideshow.map((node) => {
                                    return(
                                        <Slide><img src={node.fluid.src} alt="candy" /></Slide>
                                    )
                                })}
                            </Slider>
                            <div className="modal__carousel__links">
                                <ButtonBack><FontAwesomeIcon icon={faArrowAltCircleLeft} size="2x" /></ButtonBack>
                                <ButtonNext><FontAwesomeIcon icon={faArrowAltCircleRight} size="2x" /></ButtonNext>
                            </div>
                            <DotGroup />
                    </CarouselProvider>
                </div>
            </div>
        )}
        </StyledPopup>
    )
}

export default Modal