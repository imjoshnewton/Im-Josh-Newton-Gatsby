import React, { Component } from "react"
import ScrollAnimation from "react-animate-on-scroll"

class Footer extends Component {
  render() {
    return (
      <footer id="footer" className="container footer">
      <div className="fifty-rect"></div>
  		<h1 className="wow fadeInRight">SOCIAL</h1>
  		<div className="wrapper wow fadeIn">
  			<a href="https://facebook.com/newtonjd1" target="_blank"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
  			<a href="https://twitter.com/imjoshnewton" target="_blank"><i className="fa fa-twitter-square" aria-hidden="true"></i></a>
  			<a href="https://www.linkedin.com/in/newtonjosh" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
        <a href="https://instagram.com/imjoshnewton" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a>
  			<a href="https://unsplash.com/@imjoshnewton" target="_blank"><i className="fa fa-camera" aria-hidden="true"></i></a>
  		</div>
    </footer>
    )
  }
}

export default Footer