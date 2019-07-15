import React, { Component } from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import ScrollAnimation from "react-animate-on-scroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class Hero extends Component {
  constructor(props) {
    super(props)
    this.state = { height: props.height }
  }

  componentDidMount() {
    this.setState({ height: window.innerHeight + 50 + "px" })
  }

  render() {
    // console.log("data", this.props.data)
    const styles = {
      header: {
        minHeight: this.state.height,
      },
      bg: {
        minHeight: this.state.height,
        maxHeight: this.state.height,
        position: "fixed",
        opacity: "0",
        willChange: "opacity",
      },
      overlayContainer: {
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        background:
          "linear-gradient(rgba(21, 21, 21, 0.5), rgba(21, 21, 21, 0.5))",
      },
    }
    const bgImage1 = this.props.data.bgImage1.localFile.childImageSharp.fluid,
      bgImage2 = this.props.data.bgImage2.localFile.childImageSharp.fluid,
      bgImage3 = this.props.data.bgImage3.localFile.childImageSharp.fluid,
      bgImage4 = this.props.data.bgImage4.localFile.childImageSharp.fluid,
      bgImage5 = this.props.data.bgImage5.localFile.childImageSharp.fluid

    return (
      <header id="header" style={styles.header} className="container header">
        <Img fluid={bgImage1} style={styles.bg} className="bg" />
        <Img fluid={bgImage2} style={styles.bg} className="bg" />
        <Img fluid={bgImage3} style={styles.bg} className="bg" />
        <Img fluid={bgImage4} style={styles.bg} className="bg" />
        <Img fluid={bgImage5} style={styles.bg} className="bg" />

        <div style={styles.overlayContainer}>
          <ScrollAnimation animateIn="bounceInLeft" animateOnce={true}>
            <Link to="/#About">
              <h1 id="name">I'M JOSH NEWTON</h1>
            </Link>
            <div className="wrapper">
              <div className="button">
                <Link to="/#About">
                  <FontAwesomeIcon icon="angle-down" />
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </header>
    )
  }
}

Hero.defaultProps = {
  height: "800px",
}

export default props => (
  <StaticQuery
    query={graphql`
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
        bgImage2: unsplashImagesYaml(title: { eq: "Parking Meeters" }) {
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
        bgImage3: unsplashImagesYaml(title: { eq: "Golden Sunrise" }) {
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
        bgImage4: unsplashImagesYaml(title: { eq: "Black and White Windows" }) {
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
        bgImage5: unsplashImagesYaml(title: { eq: "Canon Film Camera" }) {
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
    `}
    render={data => <Hero data={data} {...props} />}
  />
)
