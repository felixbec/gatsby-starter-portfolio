import React from "react"
import Layout from "../Components/Layout"
import { Parallax } from 'react-parallax';
import Form from '../Components/Form'

const insideStyles = {
  marginTop: "2rem",
  textAlign: "center",
};
const displayNone = {
  display: 'none'
}


export default () => (
  <Layout>

  <Parallax bgImage={'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80'} strength={500}>
    <div style={{ height: '50vh' }}>
    </div>
  </Parallax>
  <div className="container" id="Form_1">
    <h3 style={insideStyles} id="Form_1-Heading">Drop Us A Line</h3>
    <Form />
    <p id="success"style={displayNone}>We appreciate that you’ve taken the time to write us. We’ll get back to you very soon. Please come back and see us often.</p>
  </div>
  </Layout>
)
