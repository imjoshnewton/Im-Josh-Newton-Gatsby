import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Section from "../components/section"
import Connect from "../components/connect"
import Footer from "../components/footer"
import BlogIndex from "../components/blog-index"
import SEO from "../components/seo"

const IndexPage = ({ data, location }) => {
  // console.log("location", location)

  return (
    <Layout
      siteTitle={data.site.siteMetadata.title}
      location={location}
      showTitle={false}
    >
      <SEO title="Home" />
      <Hero />
      <Section
        id={data.contentfulPage.section1Title}
        sectionTitle={data.contentfulPage.section1Title}
        background="dark"
      >
        {data.contentfulPage.section1Content.childMarkdownRemark.html}
      </Section>
      <Section
        id={data.contentfulPage.section2Title}
        sectionTitle={data.contentfulPage.section2Title}
        background="light"
      >
        {data.contentfulPage.section2Content.childMarkdownRemark.html}
      </Section>
      <BlogIndex />
      <Connect />
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPage(pageTitle: { eq: "Home" }) {
      pageTitle
      section1Title
      section2Title
      section1Content {
        childMarkdownRemark {
          html
        }
      }
      section2Content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default IndexPage
