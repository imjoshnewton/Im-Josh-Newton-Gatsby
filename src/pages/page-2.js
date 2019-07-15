import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({ data, location }) => {
  console.log("data", data)

  return (
    <Layout location={location}>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Img fluid={data.bgImage1.localFile.childImageSharp.fluid} />
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage

export const query = graphql`
  {
    bgImage1: unsplashImagesYaml(title: { eq: "Chicago Skyline" }) {
      title
      credit
      localFile {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`
