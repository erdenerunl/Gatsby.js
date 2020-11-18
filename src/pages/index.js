import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import '../styles/index.scss'

const IndexPage = () => {
  return (
    <Layout>
      <h2> SElaaaaaaaaaaam </h2>
      <Link to="/products"> go to products</Link>
      <Link to="/about"> about us</Link>
      <Link to="/contact"> contact us</Link>
    </Layout>
  )
}

export default IndexPage
