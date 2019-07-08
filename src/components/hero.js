import React from "react"
// import { useStaticQuery, graphql, Link } from "gatsby"
import { Link } from "gatsby"
import ScrollAnimation from "react-animate-on-scroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Div100vh from "react-div-100vh"

const Hero = () => {
  // const data = useStaticQuery(graphql`
  //   query MyQuery {
  //     unsplashPhoto {
  //       id
  //       urls {
  //         full
  //       }
  //     }
  //   }
  //   `)

  return (
    <header id="header" className="container header">
      <div className="bg"></div>
      <div className="bg"></div>
      <div className="bg"></div>
      <div className="bg"></div>
      <div className="bg"></div>

      <ScrollAnimation animateIn="bounceInLeft" animateOnce={true}>
        <Link to="/#About">
          <h1 id="name">I'M JOSH NEWTON</h1>
        </Link>
      </ScrollAnimation>
      <ScrollAnimation animateIn="bounceInLeft" animateOnce={true}>
        <div className="wrapper">
          <div className="button">
            <Link to="/#About">
              <FontAwesomeIcon icon="angle-down" />
            </Link>
          </div>
        </div>
      </ScrollAnimation>
    </header>
  )
}

export default Hero
