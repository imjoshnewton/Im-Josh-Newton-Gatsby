import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"

const BlogIndex = () => {
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
  console.log("posts", posts);

  return (
    <section className="container body">
      <h1>Blog</h1>
      <div className="wrapper">
        {posts.map((node, index) => {
          return (
            <div key={index}>
              <Link to={node.slug}><h3>node.title</h3></Link>
              <small>node.publishDate</small>
            <p>node.description.description</p>
            </div>
          )
        })}
      </div>
      {/*<Img fluid={data.placeholderImage.childImageSharp.fluid} />*/}
    </section>
  )
}

export default BlogIndex

