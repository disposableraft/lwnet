import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { rhythm } from "../utils/typography"
import SEO from "../components/seo"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <div>
        <h1 style={{ paddingTop: rhythm(1), }} >
          {post.frontmatter.title}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: post.html}} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`