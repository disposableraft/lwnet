import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Heading, Text, Box, SimpleGrid } from "@chakra-ui/core"
import { graphql, Link } from "gatsby"
import Tags from "../components/tags"

const BlogPost = props => {
  return (
    <Box mb={8}>
      <Heading as="h3" size="md" mb={4}>
        <Link to={props.fields.slug}>{props.frontmatter.title}</Link>
      </Heading>
      <Text mb={2}>{props.excerpt}</Text>
      <Tags mt={2}>{props.frontmatter.tags}</Tags>
    </Box>
  )
}

const BlogPosts = ({ children }) => {
  return children
}

const Blog = ({ data }) => {
  const posts = data.allFile.nodes.map(({ childMdx }) => {
    return <BlogPost {...childMdx} />
  })
  return (
    <Layout>
      <SEO title="Blog" />
      <SimpleGrid columns={[1, null, 2, 3]} spacingX={[null, null, 6]}>
        <BlogPosts>{posts}</BlogPosts>
      </SimpleGrid>
    </Layout>
  )
}

export const query = graphql`
  {
    allFile(
      filter: { sourceInstanceName: { eq: "blog" } }
      sort: { fields: childMdx___frontmatter___date, order: DESC }
    ) {
      totalCount
      nodes {
        childMdx {
          frontmatter {
            title
            tags
            date
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default Blog
