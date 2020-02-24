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
            <StyledContainer className="container">
                <div className="col-md-6">
                    <StyledImage src={profile.fluid.src} />
                </div>
                
                <StyledAuthorInfo className="col-md-6">
                    <h1>HELLO</h1>
                    <h2>I'm {name}</h2>
                    <CodeBlock
                    text={`${aboutMe.childMarkdownRemark.html}`}
                    language="html"
                    theme={atomOneDark}
                    showLineNumbers = {false}
                    wrapLines={false}
                    codeBlock
                    />

                </StyledAuthorInfo>
            </StyledContainer>
        </Fragment>
    )
}

export default Header