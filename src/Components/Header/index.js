import React, { Fragment }  from "react"
import { graphql, useStaticQuery  } from "gatsby"
import { StyledContainer, StyledImage, StyledAuthorInfo } from './Header.styled';
import { CodeBlock, atomOneDark } from 'react-code-blocks'


const Header = (props) => {
    
    const data = useStaticQuery(
        graphql`
            query {
                contentfulAbout {
                    name
                    profile {
                        fluid {
                            src
                        }
                    }
                    aboutMe {
                        childMarkdownRemark {
                            html
                        }
                    }
                }
            }
        `
    )

    const {name, profile, aboutMe} = data.contentfulAbout;
    
    return (
        <Fragment>
            <StyledContainer id="about" className="container">
                <div className="row">
                    <div className="col-md-6">
                        <StyledImage src={profile.fluid.src} />
                    </div>
                    
                    <StyledAuthorInfo className="col-md-6">
                        <h1>HELLO</h1>
                        <h2>I'm {name}</h2>
                        <div dangerouslySetInnerHTML={{ __html: aboutMe.childMarkdownRemark.html }} />
                    </StyledAuthorInfo>
                </div>
            </StyledContainer>
        </Fragment>
    )
}

export default Header