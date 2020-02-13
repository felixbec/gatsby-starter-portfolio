import React, { useState, useRef }  from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Burger from "../Burger"
import Menu from "../Menu"
import SearchSlideOut from "../SearchSlideOut"
import SearchBtn from "../SearchBtn"
import Headroom from "react-headroom"
import { useOnClickOutside, useOnScroll } from '../../Hooks';
import logo from "../../../static/All Things Dev.png"
import './styles.scss'

const Header = () => {
    const [open, setOpen] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const node = useRef(); 
    const node2 = useRef();
    //Hamburger
    useOnClickOutside(node, () => setOpen(false));
    useOnScroll(node, () => setOpen(false));
    //Search
    useOnClickOutside(node2, () => setOpenSearch(false));
    useOnScroll(node2, () => setOpenSearch(false));

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
    )
}


export default Header