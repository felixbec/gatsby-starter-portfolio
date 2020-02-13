import React, {Fragment} from "react"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../Components/Layout"
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components"

const Holder = styled.div`
    background: #fff;
    padding: 3rem 0;
`

const Catergory = styled.div`
    .category__icon-holder{
        text-align: center;
        i{
            font-size: 8rem;
            color: #FFDE59;
        }
        i:hover{color:#000}
    }
    p{text-align:center; margin-top: .5rem; color:#000;}
`

const Categories = ({ data }) => {
    return (
        <Fragment>
        <Helmet>
            <script src="https://kit.fontawesome.com/e58833834b.js" crossorigin="anonymous"></script>
        </Helmet>
        <Layout>
        <h2 className="text-center">Categories</h2>
        <Holder>
            <div className="container">
                <div className="row">
                    {data.allContentfulCategoryPage.edges.map(({ node }) => {
                    return (
                        <Catergory key={node.id} className="col-md-3">
                            <Link to={`/categories/${node.slug}/`} style={{textDecoration:`none`}}>
                                <div className="category__icon-holder">
                                    <i className={`${node.fontAwesomeIcon}`}></i>
                                </div>
                                <p>{node.categoryName}</p>
                            </Link>
                        </Catergory>
                    )
                    })}
                </div>
            </div>
        </Holder>
        </Layout>
        </Fragment>
    )
}

export const query = graphql`
    query {
        allContentfulCategoryPage {
            edges {
                node {
                    slug
                    id
                    categoryName
                    fontAwesomeIcon
                }
            }
        }
    }
`

export default Categories