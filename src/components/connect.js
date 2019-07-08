import React, { Component } from "react"
import ScrollAnimation from "react-animate-on-scroll"

class Connect extends Component {
  render() {
    return (
      <section id="contact" className="container body">
      <div className="right-triangle"></div>
  		<h1 className="wow fadeInRight">CONTACT</h1>
  		<div className="wrapper wow fadeIn">
  			<a href="mailto:josh@imjoshnewton.me?Subject=From%20imjoshnewton.me" target="_top"><i className="fa fa-envelope" aria-hidden="true"></i></a>
  			<a href="tel:412-5674755"><i className="fa fa-phone" aria-hidden="true"></i></a>
  		</div>
    </section>
    )
  }
}

export default Connect
