import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ExpandableImage from "../components/expandable-image"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <div style={{ display: `flex`, flexWrap: `wrap` }}>
        <div>
          {data.allImageSharp.nodes.map(node => {
            return (
              <ExpandableImage
                key={node.id}
                banner={node.banner}
                fullsize={node.fullsize}
              />
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allImageSharp(sort: { order: DESC, fields: fluid___originalName }) {
      totalCount
      nodes {
        id
        banner: fluid(maxWidth: 960, maxHeight: 120, cropFocus: ATTENTION) {
          ...GatsbyImageSharpFluid
        }
        fullsize: fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
