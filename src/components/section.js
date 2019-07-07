import React, { Component } from "react"
import ScrollAnimation from "react-animate-on-scroll"

class Section extends Component {
  render() {
    return (
      <section id={this.props.id} className="container body">
        <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
          <h1>{this.props.sectionTitle}</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <div className="wrapper">{this.props.children}</div>
        </ScrollAnimation>
      </section>
    )
  }
}

export default Section
