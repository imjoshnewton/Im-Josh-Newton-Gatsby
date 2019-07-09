import React, { Component } from "react"
import ScrollAnimation from "react-animate-on-scroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class Connect extends Component {
  render() {
    return (
      <section id="Connect" className="container body">
        <div className="right-triangle"></div>
        <ScrollAnimation animateIn="fadeInRight">
          <h1 className=" fadeInRight">CONTACT</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" offset={150}>
          <div className="wrapper">
            <a
              href="mailto:josh@imjoshnewton.me?Subject=From%20imjoshnewton.me"
              target="_top"
            >
              {" "}
              <FontAwesomeIcon icon="envelope" />
            </a>
            <a href="tel:412-5674755">
              {" "}
              <FontAwesomeIcon icon="phone" />
            </a>
          </div>
        </ScrollAnimation>
      </section>
    )
  }
}

export default Connect
