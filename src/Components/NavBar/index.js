import React, { Fragment }  from "react"
import { Link, graphql, useStaticQuery  } from "gatsby"
import Headroom from "react-headroom"
import logo from "../../images/logo.svg"
import { StyledHeader, StyledLogo, StyledMenu, StyledBlock } from './NavBar.styled';


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
        {/*
            <nav>
                <div className="navigation-topbar container-fluid">
                    <div ref={node} className="navigation-topbar__left container">
                        <Burger open={open} setOpen={setOpen} />
                        <Menu open={open} setOpen={setOpen} />
                    </div>
                    <div className="navigation-topbar__center"><Link to="/"><img src={logo} alt="Default Logo" /></Link></div>
                    <div ref={node2} className="navigation-topbar__right container">
                        <SearchBtn openSearch={openSearch} setOpenSearch={setOpenSearch} />
                        <SearchSlideOut openSearch={openSearch} setOpenSearch={setOpenSearch} />
                    </div>
                </div>
                <Headroom style={{transition: 'all .5s ease-in-out'}}>
                    <div className="navigation-bottombar">
                        <ul className="navigation-bottombar-list">
                            {data.allContentfulCategoryPage.edges.map(({ node }) => (
                                <Link className="list__link" key={node.slug} to={`/categories/${node.slug}/`}>{node.categoryName}</Link>
                            ))} 
                        </ul>
                    </div>
                </Headroom>
            </nav>
        */}
    return (
        <Fragment>
            <Headroom>
                <StyledHeader>
                    <StyledLogo></StyledLogo>
                    <StyledMenu>
                        <Link to="/">About Me</Link>
                        <Link to="/">About Me</Link>
                        <Link to="/">About Me</Link>
                        <Link to="/">About Me</Link>
                        <Link to="/">About Me</Link>
                    </StyledMenu>
                    <StyledBlock>
                        <Link to="/" className="btn">Get In Touch</Link>
                    </StyledBlock>
                </StyledHeader>
            </Headroom>
        </Fragment>
    )
}


export default Header