import React from 'react';
import { Link, graphql, useStaticQuery } from "gatsby"
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open }) => {
    {/*
    const data = useStaticQuery(
        graphql`
            query {
                allContentfulPage {
                    edges {
                        node {
                            slug
                            id
                            pageTitle
                        }
                    }
                }
            }
        `
        )*/}

    return (
        <StyledMenu open={open}>
            {/*
            {data.allContentfulPage.edges.map(({ node }) => {
                return (
                    <Link className="list__link" key={node.slug} to={node.slug}>{node.pageTitle}</Link>
                )
            })}
            */}
            <Link className="list__link" to="/categories/">Categories</Link>
            <Link className="list__link" to="/tags/">Tags</Link>
        </StyledMenu>

        
        
    )
}

Menu.propTypes = {
    open: bool.isRequired,
    }

export default Menu;