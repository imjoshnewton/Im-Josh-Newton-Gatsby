import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({location}) => (
  <Layout location={location}>
    <SEO title="404: Not found" />
    <section className="container body">
    <h1>NOT FOUND</h1>
    <div className="wrapper">
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
    </section>
  </Layout>
)

export default NotFoundPage
