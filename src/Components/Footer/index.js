import React from "react"
import { Link, graphql, useStaticQuery  } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faPinterest } from "@fortawesome/free-brands-svg-icons"
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons"
import { StyledFooter} from './Footer.styled';

const Footer = (props) => {
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

    let getDate = new Date();
    let getCurrentYear = getDate.getFullYear();
    return (
        <StyledFooter>
            <div className="">
                <div className="footer-topbar row">
                    <div className="footer-topbar__col--left col-md-6 row">

                    </div>

                    <div className="footer-topbar__col--right col-md-6">
                        <ul>
                            <li className="footer-topbar__item">
                                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                    <span className="col__social__icon"><FontAwesomeIcon icon={faFacebookF} color="#A7BFD3" /></span>
                                </a>
                            </li>
                            <li className="footer-topbar__item">
                                <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                                    <span className="col__social__icon"><FontAwesomeIcon icon={faTwitter}  color="#A7BFD3"/></span>
                                </a>
                            </li>
                            <li className="footer-topbar__item">
                                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                    <span className="col__social__icon"><FontAwesomeIcon icon={faInstagram} color="#A7BFD3"/></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottombar">
                <div className="footer-bottombar__linkables">
                    <ul className="linkables__navigation-list">
                        <Link className="linkable" to="/contact">Contact</Link>
                        <Link className="linkable" to="/filter">Filter</Link>
                        <Link className="linkable" to="/">Privacy Policy</Link>
                        <Link className="linkable" to="/">Site Map</Link>
                    </ul>
                </div>

                <div className="footer-bottombar__copyright">
                    <span>&copy; {getCurrentYear} {data.site.siteMetadata.title}</span>
                </div>
                
            </div>

        </StyledFooter>

    )
}

export default Footer