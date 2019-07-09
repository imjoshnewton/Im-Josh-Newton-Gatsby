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
        <ScrollAnimation animateIn="fadeInRight">
          <div className="wrapper fadeIn">
            <a href="https://facebook.com/newtonjd1" target="_blank">
              <i className="fa fa-facebook-square" aria-hidden="true"></i>
            </a>
            <a href="https://twitter.com/imjoshnewton" target="_blank">
              <i className="fa fa-twitter-square" aria-hidden="true"></i>
            </a>
            <a href="https://www.linkedin.com/in/newtonjosh" target="_blank">
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
            <a href="https://instagram.com/imjoshnewton" target="_blank">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a href="https://unsplash.com/@imjoshnewton" target="_blank">
              <i className="fa fa-camera" aria-hidden="true"></i>
            </a>
          </div>
        </ScrollAnimation>
      </footer>
    )
  }
}

export default Footer
