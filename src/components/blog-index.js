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
          const post = node.node;
          
          return (
            <div key={index}>
              <Link to={"/blog" + {post.slug}}><h3>{post.title}</h3></Link>
              <small>{post.publishDate}</small>
            <p>{post.description.description}</p>
            </div>
          )
        })}
      </div>
      {/*<Img fluid={data.placeholderImage.childImageSharp.fluid} />*/}
    </section>
  )
}

export default BlogIndex

