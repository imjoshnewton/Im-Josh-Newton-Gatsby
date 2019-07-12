import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Section from "../components/section"
import Connect from "../components/connect"
import Footer from "../components/footer"
import BlogIndex from "../components/blog-index"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  console.log("data", data)

  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Section
        id={data.contentfulPage.section1Title}
        sectionTitle={data.contentfulPage.section1Title}
        background="dark"
      >
        {data.contentfulPage.section1Content.childMarkdownRemark.html}
        {/*data.contentfulPage.section1.content.map((content, index, arr) => {
          return <p key={index}>{content.content[0].value}</p>
        })*/}
        {/*<p>I'm Josh Newton.</p>  
        <p>
          I work with companies and individuals to create high-performing teams
          and leaders by identifying people's unique design. I also host a
          podcast all about the importance of self-awareness and focusing on
          your strengths.
        </p>
        <p>
          The most successful and passionate people in the world have 2 things
          in common. They are self-aware and authentic. They know who they are
          and they don't try to be anything else.
        </p>
        <p>
          I believe that everyone has a purpose and a unique set of abilities
          that is their value proposition and contribution to the world. My
          passion is helping people find what that is and put their potential
          into practice.
        </p>*/}
      </Section>
      <Section
        id={data.contentfulPage.section2Title}
        sectionTitle={data.contentfulPage.section2Title}
        background="light"
      >
        {data.contentfulPage.section2Content.childMarkdownRemark.html}
        {/*<p>
          I began the journey of figuring out who I was in college. I first
          started thinking about who I was and what that ment when I found
          myself in a practice room with a saxophone in my hands, staring at a
          piece of sheet music that I could not bring my self to play. A single
          thought kept going through my head: there is something wrong with me.
          Then I started to ask questions. Why couldn't I get myself to
          practice? Why did I wait until 30 minutes before my lesson to even
          touch my instrument? Why didn't I love this? What is my problem?
        </p>
        <p>
          This was the moment that lead me to changing my major from music with
          a concentration in saxophone to computer information systmes. There
          were so many things I loved about my classes. A lot of the work was
          done in groups and it was for a purpose. There were deliverables and
          deadlines and instead of someone's subjective oppinion of how well I
          played, it was about having things done and it working a certain way.
          It was black and white. Binary. Like music, I was good at it and I
          picked it up quickly. Unlike music, I could see this being something I
          did as a career. I was on the right track!
        </p>
        <p>
          5 years later I faced another moment like the one I had in the
          practice room at college. I was sitting in my car outside of the
          client and I was disapointed. Not disapointed in myself or in anyone
          but disapointed that the day dream I was having the entire 45 minutes
          of my commute hadn't materialized. On an almost daily basis I spent my
          entire drive hoping for a car accident. Yes, a car accident. Nothing
          serious... Just a decent fender bender that would delay me
          significantly. Nothing major... Just enough that it would make sense
          for me to go to the ER and get checked out. That's when I realized how
          ridiculous my thinking was. I was HOPING to be in a car accident. Not
          because I hated myself but because I hated what I did 8-10 hours a
          day, 40-50 hours a week.
        </p>
        <p>
          My journey has primarily been figuring out what I don't want to do. I
          can easily get excited about a new opportunity or a new cance to learn
          something.
        </p>*/}
      </Section>
      <BlogIndex />
      <Connect />
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  {
    contentfulPage(pageTitle: { eq: "Home" }) {
      pageTitle
      section1Title
      section2Title
      section1Content {
        childMarkdownRemark {
          html
        }
      }
      section2Content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default IndexPage
