import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { StyledFooter} from './Footer.styled';
import logo from "../../images/navbar-logo.png"

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
                        <img src={logo} alt="Portfolio Logo" />
                    </div>
                    
                    <div className="footer-topbar__col--right col-md-6">
                        <ul>
                            {data.contentfulAbout.socialMedia.map(( socialMedia ) => {
                                return (
                                    <li className="footer-topbar__item">
                                        <a href={`${socialMedia.url}`} target="_blank" rel="noopener noreferrer">
                                            <span className="col__social__icon"><i className={`${socialMedia.fontAwesomeIcon}`}></i></span>
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottombar container">
                <div className="footer-bottombar__copyright">
                    <span>&copy; {getCurrentYear} {data.site.siteMetadata.title}. All Rights Reserved.</span>
                </div>
            </div>
        </StyledFooter>

    )
}

export default Footer