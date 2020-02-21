import React, { Fragment }  from "react"
import { Link, graphql, useStaticQuery  } from "gatsby"
import { StyledContainer, StyledCard } from './Resume.styled';



const Project = () => {
    return (
        <StyledContainer className="container">
            <h1>#03;<br/>
            Years</h1>
            <div className="card-deck">
            
                <StyledCard className="card">
                    <h3>Test</h3>
                    <p>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </StyledCard>


                <StyledCard className="even card">
                <h3>Test</h3>
                    <p>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </StyledCard>

                <StyledCard className="card">
                <h3>Test</h3>
                    <p>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </StyledCard>

                <StyledCard className="card even">
                <h3>Test</h3>
                    <p>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </StyledCard>
                
            </div>

            <div className="line"></div>
        </StyledContainer>
    )
}

export default Project