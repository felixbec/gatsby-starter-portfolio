import React from "react"
import { Link, graphql, useStaticQuery  } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faPinterest } from "@fortawesome/free-brands-svg-icons"
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons"
import './styles.scss'

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
        
        <footer>
            <div className="footer-topbar">
                <div className="footer-topbar__col left">
                    <div className="col__newsletter__title">
                        <h5>Newsletter</h5>
                    </div>
                    <div className="col__newsletter__form">
                        <p>Subscribe to our weekly newsletter</p>
                        <div>
                            <form name="newsletter">
                                <input type="text" name="name" />
                                <button type="submit"><FontAwesomeIcon icon={faPaperPlane} /></button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="footer-topbar__col right">
                    <h5>Follow Us</h5>
                    <div className="row col__social">
                        <div className="col-md-6 col-sm-3 col__social__facebook"> 
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <span className="col__social__icon"><FontAwesomeIcon icon={faFacebookF} color="#f7f7f7" /></span>
                                <span className="col__social__name">Facebook</span>
                            </a>
                        </div> 
                        <div className="col-md-6 col-sm-3 col__social__twitter">
                            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                                <span className="col__social__icon"><FontAwesomeIcon icon={faTwitter}  color="#f7f7f7"/></span>
                                <span className="col__social__name">Twitter</span>
                            </a>
                        </div>
                        <div className="col-md-6 col-sm-3 col__social__instagram">
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <span className="col__social__icon"><FontAwesomeIcon icon={faInstagram} color="#f7f7f7"/></span>
                                <span className="col__social__name">Instagram</span>
                            </a>
                        </div>
                        <div className="col-md-6 col-sm-3 col__social__pinterest">
                            <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">
                                <span className="col__social__icon"><FontAwesomeIcon icon={faPinterest} color="#f7f7f7" /></span>
                                <span className="col__social__name">Pinterest</span>
                            </a>
                        </div>
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

                <div className="footer-bottombar__copyright container">
                    &copy; {getCurrentYear} {data.site.siteMetadata.title}
                </div>
                
            </div>

        </footer>

    )
}

export default Footer