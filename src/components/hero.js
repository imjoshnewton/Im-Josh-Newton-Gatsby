import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import ScrollAnimation from 'react-animate-on-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Hero = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      unsplashPhoto {
        id
        urls {
          full
        }
      }
    }
    `)

  return (
    <header id="header" className="container header">
      <div className="bg" >

      </div>
      <div className="bg" >

      </div>
      <div className="bg" >

      </div>
      <div className="bg" >

      </div>
      <div className="bg" >

      </div>

      <ScrollAnimation animateIn="bounceInLeft">
    	<Link to="/#About"><h1 id="name" >I'M JOSH NEWTON</h1></Link>
      </ScrollAnimation>
      <ScrollAnimation animateIn="bounceInLeft">
    	<div className="wrapper">
    		<div className="button">
    			<Link to="/#About"><FontAwesomeIcon icon='angle-down' /></Link>
    		</div>
    	</div>
      </ScrollAnimation>
    </header>
  )
}

export default Hero
