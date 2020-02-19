import React, { Fragment }  from "react"
import { Link, graphql, useStaticQuery  } from "gatsby"
import { StyledContainer, StyledImage, StyledAuthorInfo, StyledCodeBlock } from './Header.styled';
import AuthorImage from "../../images/portfolio-carlos.png"
import { CodeBlock, atomOneDark } from 'react-code-blocks'


const Header = () => {
    const data = useStaticQuery(
        graphql`
            query {
                allContentfulCategoryPage {
                    edges {
                        node {
                            slug
                            id
                            categoryName
                        }
                    }
                }
            }
        `
    )
    return (
        <Fragment>
            <StyledContainer className="container">
                <div className="col-md-6">
                    <StyledImage src={AuthorImage} />
                </div>
                
                <StyledAuthorInfo className="col-md-6">
                    <h1>HELLO</h1>
                    <h2>I'm Carlos</h2>

<CodeBlock
text={`<!--Code Block -->
<div class="col-md-6 codeblock">
    <h1 class="codeblock__heading">HELLO</h1>
    <p class="codeblock__paragraph">I'm Carlos</h2>
</div>`}
language="html"
theme={atomOneDark}
showLineNumbers = {false}
wrapLines={true}
codeBlock
/>
<StyledCodeBlock
text={`<!--Code Block -->
<div class="col-md-6 codeblock">
    <h1 class="codeblock__heading">HELLO</h1>
    <p class="codeblock__paragraph">I'm Carlos</h2>
</div>`}
language="html"
theme={atomOneDark}
showLineNumbers = {false}
wrapLines={true}
codeBlock
/>

                </StyledAuthorInfo>
            </StyledContainer>
        </Fragment>
    )
}

export default Header