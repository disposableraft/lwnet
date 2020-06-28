import React from "react"
import { graphql } from "gatsby"
import { Box, Heading } from "@chakra-ui/core"
import * as DesignSystem from "./mdx-components"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Tags from "./tags"

import Layout from "./layout"
import SEO from "./seo"

export default function PageTemplate({ data: { mdx } }) {
  const tags = mdx.frontmatter.tags && <Tags>{mdx.frontmatter.tags}</Tags>
  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} />
      <Box>
        {tags}
        <Heading as="h2" pb="8">
          {mdx.frontmatter.title}
        </Heading>
        <MDXProvider
          components={{
            a: DesignSystem.Link,
            code: DesignSystem.Code,
            blockquote: DesignSystem.BlockQuote,
            p: DesignSystem.Text,
            h3: DesignSystem.Heading3,
          }}
        >
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date
        tags
      }
    }
  }
`
