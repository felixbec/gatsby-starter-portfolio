import React from "react"
import { Link, graphql, useStaticQuery  } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { StyledFooter} from './Footer.styled';
import signature from '../../images/sign.png';

const Footer = (props) => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata{
                        title
                    }
                }
                contentfulAbout {
                    socialMedia {
                        id
                        name
                        fontAwesomeIcon
                        url
                    }
                }
            }
        `
    )

    let getDate = new Date();
    let getCurrentYear = getDate.getFullYear();
    return (
        <StyledFooter>
            <div className="footer-topbar container">
                <div className="row">
                    <div className="footer-topbar__col--left col-md-6">
                        <img src={signature} alt="Signaure Logo" />
                    </div>
                    
                    <div className="footer-topbar__col--right col-md-6">
                        <ul>
                        {/*
                            {data.contentfulAbout.socialMedia.map(({ socialMedia }) => {
                                return (
                                    <li className="footer-topbar__item">
                                        <a href={`${socialMedia.url}`} target="_blank" rel="noopener noreferrer">
                                            <span className="col__social__icon"><i className={`${socialMedia.fontAwesomeIcon}`}></i></span>
                                        </a>
                                    </li>
                                )
                            })}
                        */}

                            <li className="footer-topbar__item">
                                <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                                    <span className="col__social__icon"><FontAwesomeIcon icon={faTwitter}  color="#858585"/></span>
                                </a>
                            </li>
                            <li className="footer-topbar__item">
                                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                    <span className="col__social__icon"><FontAwesomeIcon icon={faInstagram} color="#858585"/></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottombar container row">
                <div className="footer-bottombar__linkables col-lg-6">
                    <ul className="linkables__navigation-list">
                        <Link className="linkable first" to="/contact">Contact</Link>
                        <Link className="linkable" to="/filter">Filter</Link>
                        <Link className="linkable" to="/">Privacy Policy</Link>
                        <Link className="linkable" to="/">Site Map</Link>
                    </ul>
                </div>

                <div className="footer-bottombar__copyright col-lg-6">
                    <span>&copy; {getCurrentYear} {data.site.siteMetadata.title}. All Rights Reserved.</span>
                </div>
                
            </div>

        </StyledFooter>

    )
}

export default Footer