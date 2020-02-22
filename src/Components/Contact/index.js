import React from "react"
import { graphql, useStaticQuery  } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { StyledContact} from './Contact.styled';

const Contact = (props) => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata{
                        title
                    }
                }
            }
        `
    )

    return (
        <StyledContact className="container">
            <div className="contact-topbar row">
                <div className="contact-topbar__col--left col-md-6 row">
                    <div className="col-md-6 left">
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                    <span className="col__social__icon"><FontAwesomeIcon icon={faFacebookF} color="#A7BFD3" /></span>
                                    <span className="col__social__username">/cfbeltranIT</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                                    <span className="col__social__icon"><FontAwesomeIcon icon={faTwitter}  color="#A7BFD3"/></span>
                                    <span className="col__social__username">@cfbeltranIT</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                    <span className="col__social__icon"><FontAwesomeIcon icon={faInstagram} color="#A7BFD3"/></span>
                                    <span className="col__social__username">@cfbeltranIT</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-6 right">
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                    <span className="col__social__icon"><FontAwesomeIcon icon={faFacebookF} color="#A7BFD3" /></span>
                                    <span className="col__social__username">/cfbeltranIT</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                                    <span className="col__social__icon"><FontAwesomeIcon icon={faTwitter}  color="#A7BFD3"/></span>
                                    <span className="col__social__username">@cfbeltranIT</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                    <span className="col__social__icon"><FontAwesomeIcon icon={faInstagram} color="#A7BFD3"/></span>
                                    <span className="col__social__username">@cfbeltranIT</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="contact-topbar__col--right col-md-6">
                    <div>
                        <h3>Start a project?</h3>
                        <span>cfbeltranIT@gmail.com</span>
                    </div>
                </div>
            </div>
        </StyledContact>

    )
}

export default Contact