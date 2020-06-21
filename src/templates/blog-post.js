import React from "react"
import { graphql } from "gatsby"
import { Box, Heading } from "@chakra-ui/core"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <Box>
        <Heading as="h2" pb="8">
          {post.frontmatter.title}
        </Heading>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Box>
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
