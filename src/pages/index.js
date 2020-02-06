import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

export default ({ data }) => {
  return (
    <Layout>
    <SEO title="Home" />
      <div style={{display: `flex`, flexWrap: `wrap`}}>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} 
            style={{
              width: `33%`, 
              paddingRight: rhythm(1),
              paddingBottom: rhythm(1),
            }}
          >
              <Link to={node.fields.slug}>
                <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
              </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 200, maxHeight: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
          fields {
              slug
          }
        }
      }
    }
  }
`
