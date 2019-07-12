import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BloxIndex = () => {
  const data = useStaticQuery(graphql`
    query last10Posts {
  allContentfulBlogPost(limit: 10) {
    totalCount
    edges {
      node {
        description {
          description
        }
        title
        publishDate
        slug
        body {
          childMarkdownRemark {
            html
          }
        }
        heroImage {
          fluid {
            tracedSVG
          }
        }
      }
    }
  }
}
  `)
  const posts = data.allContentfulBlogPost.edges;
  const postCount = data.allContentfulBlogPost.totalCount;

  return (
    <section className="">
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    </section>
  )
}

export default BlogIndex

