import React, { Component } from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import ScrollAnimation from "react-animate-on-scroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class Hero extends Component {
  constructor(props) {
    super(props)
    this.state = { height1: props.height, height2: props.height + 100 }
  }

  componentDidMount() {
    this.setState({
      height1: window.innerHeight + "px",
      height2: window.innerHeight + 100 + "px",
    })
  }

  render() {
    // console.log("props", this.props)
    const styles = {
      header: {
        height: this.state.height1,
      },
      bg: {
        height: this.state.height2,
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
          "linear-gradient(rgba(21, 21, 21, 0.6), rgba(21, 21, 21, 0.6))",
      },
    }
    // const bgImage1 = this.props.data.bgImage1.localFile.childImageSharp.fluid,
    //   bgImage2 = this.props.data.bgImage2.localFile.childImageSharp.fluid,
    //   bgImage3 = this.props.data.bgImage3.localFile.childImageSharp.fluid,
    //   bgImage4 = this.props.data.bgImage4.localFile.childImageSharp.fluid,
    //   bgImage5 = this.props.data.bgImage5.localFile.childImageSharp.fluid

    // For slow internet connections
    const bgImage1 = this.props.data.bgImage1.childImageSharp.fluid,
      bgImage2 = this.props.data.bgImage2.childImageSharp.fluid,
      bgImage3 = this.props.data.bgImage3.childImageSharp.fluid,
      bgImage4 = this.props.data.bgImage4.childImageSharp.fluid,
      bgImage5 = this.props.data.bgImage5.childImageSharp.fluid

    // const bgImage1 = this.props.heroImages[0].fluid,
    //   bgImage2 = this.props.heroImages[1].fluid,
    //   bgImage3 = this.props.heroImages[2].fluid,
    //   bgImage4 = this.props.heroImages[3].fluid,
    //   bgImage5 = this.props.heroImages[4].fluid

    return (
      <header id="header" style={styles.header} className="container header">
        <Img fluid={bgImage1} style={styles.bg} className="bg" />
        <Img fluid={bgImage2} style={styles.bg} className="bg" />
        <Img fluid={bgImage3} style={styles.bg} className="bg" />
        <Img fluid={bgImage4} style={styles.bg} className="bg" />
        <Img fluid={bgImage5} style={styles.bg} className="bg" />

        <div style={styles.overlayContainer}>
          <div className="animated fadeInUp header__title-wrapper">
            <p className="header___title-pre">Hi,</p>
            <h1 className="header__title">I'M JOSH NEWTON</h1>

            <p className="header__sub-title">
              <Link to="/#About" className="header__link">
                About
              </Link>
              <span>&nbsp;-&nbsp;</span>
              <Link to="/#More" className="header__link">
                More
              </Link>
              <span>&nbsp;-&nbsp;</span>
              <Link to="/#Blog" className="header__link">
                Blog
              </Link>
              <span>&nbsp;-&nbsp;</span>
              <Link to="/#Connect" className="header__link">
                Connect
              </Link>
            </p>
          </div>
          {/* <div className="animated fadeInUp wrapper">
            <div className="button">
              <Link to="/#About">
                <FontAwesomeIcon icon="angle-down" />
              </Link>
            </div>
          </div> */}
        </div>
      </header>
    )
  }
}

Hero.defaultProps = {
  height: "95vh",
}

// export default Hero

// For faster internet and deployment
// export default props => (
//   <StaticQuery
//     query={graphql`
//       {
//         bgImage1: unsplashImagesYaml(title: { eq: "Chicago Skyline" }) {
//           title
//           credit
//           localFile {
//             childImageSharp {
//               fluid(maxWidth: 1080) {
//                 ...GatsbyImageSharpFluid_withWebp
//               }
//             }
//           }
//         }
//         bgImage2: unsplashImagesYaml(title: { eq: "Parking Meeters" }) {
//           title
//           credit
//           localFile {
//             childImageSharp {
//               fluid(maxWidth: 1080) {
//                 ...GatsbyImageSharpFluid_withWebp
//               }
//             }
//           }
//         }
//         bgImage3: unsplashImagesYaml(title: { eq: "Golden Sunrise" }) {
//           title
//           credit
//           localFile {
//             childImageSharp {
//               fluid(maxWidth: 1080) {
//                 ...GatsbyImageSharpFluid_withWebp
//               }
//             }
//           }
//         }
//         bgImage4: unsplashImagesYaml(title: { eq: "Black and White Windows" }) {
//           title
//           credit
//           localFile {
//             childImageSharp {
//               fluid(maxWidth: 1080) {
//                 ...GatsbyImageSharpFluid_withWebp
//               }
//             }
//           }
//         }
//         bgImage5: unsplashImagesYaml(title: { eq: "Canon Film Camera" }) {
//           title
//           credit
//           localFile {
//             childImageSharp {
//               fluid(maxWidth: 1080) {
//                 ...GatsbyImageSharpFluid_withWebp
//               }
//             }
//           }
//         }
//       }
//     `}
//     render={data => <Hero data={data} {...props} />}
//   />
// )

// For slow internet connections
export default props => (
  <StaticQuery
    query={graphql`
      {
        bgImage1: file(relativePath: { eq: "chicago-skyline.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 1180) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        bgImage2: file(relativePath: { eq: "parking-meeters.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 1180) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        bgImage3: file(relativePath: { eq: "golden-sunrise.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 1180) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        bgImage4: file(relativePath: { eq: "black-and-white-windows.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 1180) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        bgImage5: file(relativePath: { eq: "canon-film-camera.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 1180) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => <Hero data={data} {...props} />}
  />
)
