import React from "react"
import { graphql, useStaticQuery  } from "gatsby"
import { StyledContainer, StyledCard } from './Resume.styled';
import Fade from 'react-reveal/Fade';


const Project = () => {
    {/*
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
        */}
    return (
        <StyledContainer id="resume" className="container">
            <h1>#03;<br/>
            Years</h1>
            <Fade bottom>
                <div className="card-deck">
                    <StyledCard className="card">
                        <h3>Test</h3>
                        <p>Front End Developer</p>
                        <span>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                    </StyledCard>

                    <StyledCard className="even card">
                        <h3>Test</h3>
                        <p>Front End Developer</p>
                        <span>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                    </StyledCard>

                    <StyledCard className="card">
                        <h3>Test</h3>
                        <p>Front End Developer</p>
                        <span>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                    </StyledCard>

                    <StyledCard className="card even">
                        <h3>Test</h3>
                        <p>Front End Developer</p>
                        <span>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                    </StyledCard>
                </div>
            </Fade>

            <div className="line"></div>
        </StyledContainer>
    )
}

export default Project