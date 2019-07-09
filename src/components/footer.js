import React, { Component } from "react"
import ScrollAnimation from "react-animate-on-scroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class Footer extends Component {
  render() {
    return (
      <footer id="footer" className="container footer">
        <div className="fifty-rect"></div>
        <ScrollAnimation animateIn="fadeInRight">
          <h1 className="fadeInRight">SOCIAL</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" offset={1000}>
          <div className="wrapper">
            <a href="https://facebook.com/newtonjd1" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={["fab", "facebook-square"]} />
              <i className="fa fa-facebook-square" aria-hidden="true"></i>
            </a>
            <a href="https://twitter.com/imjoshnewton" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={["fab", "twitter-square"]} />
              <i className="fa fa-twitter-square" aria-hidden="true"></i>
            </a>
            <a href="https://www.linkedin.com/in/newtonjosh" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
            <a href="https://instagram.com/imjoshnewton" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={["fab", "instagram"]} />
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a href="https://unsplash.com/@imjoshnewton" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon="camera" />
              <i className="fa fa-camera" aria-hidden="true"></i>
            </a>
          </div>
        </ScrollAnimation>
      </footer>
    )
  }
}

export default Footer
