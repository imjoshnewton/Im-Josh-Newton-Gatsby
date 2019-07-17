import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
// import ScrollAnimation from "react-animate-on-scroll"
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
  console.log("Loaded following posts: ", posts)
  const styles = {
    container: {},
    title: {
      color: "#f2ebea",
      textTransform: "uppercase",
    },
    date: {},
    description: {},
  }

  return (
    <section id="Blog" className="container body">
      {/* <ScrollAnimation
        animateIn="fadeInRight"
        animatePreScroll={false}
        animateOnce={true}
      > */}
      <h1>Blog</h1>
      {/* </ScrollAnimation>
      <ScrollAnimation
        animateIn="fadeIn"
        animatePreScroll={false}
        animateOnce={true}
      > */}
      <div className="wrapper">
        {posts.map((node, index) => {
          const post = node.node

          return (
            <div key={index} style={styles.container}>
              <Link to={`/blog/${post.slug}`}>
                <h3 style={styles.title}>{post.title}</h3>
              </Link>
              <small style={styles.data}>{post.publishDate}</small>
              <p style={styles.description}>{post.description.description}</p>
            </div>
          )
        })}
      </div>
      {/* </ScrollAnimation> */}
      {/*<Img fluid={data.placeholderImage.childImageSharp.fluid} />*/}
    </section>
  )
}

export default BlogIndex
