import React from "react"
import { graphql } from "gatsby"
import { Box, Heading } from "@chakra-ui/core"
import * as DesignSystem from "./mdx-components"
import { Caption } from "./mdx-components"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Tags from "./tags"

import Layout from "./layout"
import SEO from "./seo"

export default function PageTemplate({ data: { mdx } }) {
  const tags = mdx.frontmatter.tags && (
    <Tags mb={4}>{mdx.frontmatter.tags}</Tags>
  )
  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} />
      <Box margin="auto" maxWidth="700px">
        {tags}
        <Heading as="h2">{mdx.frontmatter.title}</Heading>
        <MDXProvider
          shortcodes={Caption}
          components={{
            Caption,
            a: DesignSystem.Link,
            code: DesignSystem.Code,
            blockquote: DesignSystem.BlockQuote,
            p: DesignSystem.Text,
            h2: DesignSystem.Heading2,
            h3: DesignSystem.Heading3,
            img: DesignSystem.Image,
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
