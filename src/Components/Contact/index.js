import React from "react"
import { graphql, useStaticQuery  } from "gatsby"
import { StyledContact} from './Contact.styled'
import SiteConfigs from '../../SiteConfig';

const Contact = (props) => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata{
                        title
                    }
                }
                allContentfulSocialLink {
                    edges {
                        node {
                            id
                            fontAwesomeIcon
                            username
                            url
                        }
                    }
                }
                contentfulAbout {
                    email
                }
            }
        `
    )

    return (
        <StyledContact id="contact" className="container">
            <div className="contact-topbar row">
                <div className="contact-topbar__col--left col-md-6">
                    <div>
                        <ul>
                            {data.allContentfulSocialLink.edges.map(({ node }) => {
                                return (
                                    <li key={node.id}>
                                        <a href={`${node.url}`} target="_blank" rel="noopener noreferrer">
                                            <span className="col__social__icon"><i className={`${node.fontAwesomeIcon}`}></i></span>
                                            <span className="col__social__username">{node.username}</span>
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>

                <div className="contact-topbar__col--right col-md-6">
                    <div>
                        <h3>{SiteConfigs.Contact_form_title}</h3>
                        <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify={true}>
                            <label htmlFor="name">Name:</label> <input type="text" name="name" placeholder="Name" /> 
                            <label htmlFor="email">Email:</label> <input type="email" name="email" placeholder="Email" />
                            <label htmlFor="message">Message:</label> <textarea name="message" placeholder="Say Hi!"></textarea>
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </StyledContact>

    )
}

export default Contact