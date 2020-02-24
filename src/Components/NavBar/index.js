import React, { Fragment }  from "react"
import { Link } from "gatsby"
import Headroom from "react-headroom"
import logo from "../../images/navbar-logo.png"
import { StyledHeader, StyledLogo, StyledMenu, StyledBlock } from './NavBar.styled';


const NavBar = () => {
        {/*MIGHT USE FOR MOBILE NAVBAR
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
                    <StyledLogo><img src={logo} alt="Portfolio Logo" /></StyledLogo>
                    <StyledMenu>
                        <a href="#about">About Me</a>
                        <a href="#resume">Resume</a>
                        <a href="#projects">Projects</a>
                        <a href="#blog">Blog</a>
                        <a href="#contact">Contact Me</a>
                    </StyledMenu>
                    <StyledBlock>
                        <Link to="/" className="btn">Get In Touch</Link>
                    </StyledBlock>
                </StyledHeader>
            </Headroom>
        </Fragment>
    )
}

export default NavBar