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
                            <li className="footer-topbar__item">
                                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                    <span className="col__social__icon"><FontAwesomeIcon icon={faFacebookF} color="#858585" /></span>
                                </a>
                            </li>
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

            <div className="footer-bottombar container">
                <div className="footer-bottombar__linkables">
                    <ul className="linkables__navigation-list">
                        <Link className="linkable first" to="/contact">Contact</Link>
                        <Link className="linkable" to="/filter">Filter</Link>
                        <Link className="linkable" to="/">Privacy Policy</Link>
                        <Link className="linkable" to="/">Site Map</Link>
                    </ul>
                </div>

                <div className="footer-bottombar__copyright">
                    <span>&copy; {getCurrentYear} {data.site.siteMetadata.title}. All Rights Reserved.</span>
                </div>
                
            </div>

        </StyledFooter>

    )
}

export default Footer