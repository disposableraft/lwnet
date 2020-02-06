import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { rhythm } from "../utils/typography"
import SEO from "../components/seo"

export default ({ data }) => {
  const post = data.markdownRemark
  const featuredImgFluid = post.frontmatter.featuredImage?.childImageSharp.fluid
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <div>
        <Img 
          fluid={featuredImgFluid}
        />
        <h3 style={{ paddingTop: rhythm(1), }} >
          {post.frontmatter.featuredCaption}
        </h3> 
      </div>
    </Layout>
  )
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        featuredCaption
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 960, maxHeight: 800, fit: CONTAIN, background: "rgba(248, 248, 255, 0.875)") {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`