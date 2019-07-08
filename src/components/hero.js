import React, { Component } from "react"
// import { useStaticQuery, graphql, Link } from "gatsby"
import { Link } from "gatsby"
import ScrollAnimation from "react-animate-on-scroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class Hero extends Component {
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
  constructor(props) {
    super(props);
    this.state = {height: props.height};
  }

  componentDidMount(){
    this.setState({height: (window.innerHeight+50) + 'px'});
  }

  render() {
  
  const styles = {
    header: {
      minHeight: this.state.height
    },
    bg: {
      minHeight: this.state.height,
      maxHeight: this.state.height
    },
  }

  return (
    <header id="header" style={styles.header} className="container header">
      <div style={styles.bg} className="bg"></div>
      <div style={styles.bg} className="bg"></div>
      <div style={styles.bg} className="bg"></div>
      <div style={styles.bg} className="bg"></div>
      <div style={styles.bg} className="bg"></div>

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
  )}
}

// Hero.propTypes = {
//  height:React.PropTypes.string
// };

Hero.defaultProps = {
 height:'800px'
};

export default Hero
