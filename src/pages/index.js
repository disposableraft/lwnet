import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

export default ({ data }) => {
  const randomNode = getRandomInt(data.allImageSharp.totalCount)
  const node = data.allImageSharp.nodes[randomNode]
  return (
    <Layout>
    <SEO title="Home" />
      <div style={{display: `flex`, flexWrap: `wrap`}}>
        <div key={node.id} 
          style={{
            width: `100%`,
            paddingRight: rhythm(1),
            paddingBottom: rhythm(1),
          }}
        >
            <Img fluid={node.fluid} />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allImageSharp {
      totalCount
      nodes {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

function getRandomInt(totalCount) {
  return Math.floor(Math.random() * totalCount)
}