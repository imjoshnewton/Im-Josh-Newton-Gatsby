import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import ScrollAnimation from "react-animate-on-scroll"
// import Img from "gatsby-image"

const BlogIndex = () => {
  const data = useStaticQuery(graphql`
    query last10Posts {
      allContentfulBlogPost(
        limit: 10
        sort: { fields: [publishDate], order: DESC }
      ) {
        totalCount
        edges {
          node {
            description {
              description
            }
            title
            publishDate(formatString: "MMMM Do, YYYY")
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
  const posts = data.allContentfulBlogPost.edges
  console.log("posts", posts)

  return (
    <section id="Blog" className="container body">
      <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
        <h1>Blog</h1>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <div className="wrapper">
          {posts.map((node, index) => {
            const post = node.node

            return (
              <div key={index}>
                <Link to={`/blog/${post.slug}`}>
                  <h3>{post.title}</h3>
                </Link>
                <small>{post.publishDate}</small>
                <p>{post.description.description}</p>
              </div>
            )
          })}
        </div>
      </ScrollAnimation>
      {/*<Img fluid={data.placeholderImage.childImageSharp.fluid} />*/}
    </section>
  )
}

export default BlogIndex
