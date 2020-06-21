import React from "react"
import { graphql } from "gatsby"
import { Box, Heading } from "@chakra-ui/core"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Box>
        <Heading>IMAGESIMAGESIMAGES</Heading>
        <Heading>IMAGESIMAGES</Heading>
        <Heading>IMAGES</Heading>
        <Heading>PAGESPAGESPAGES</Heading>
        <Heading>PAGESPAGES</Heading>
        <Heading>PAGES</Heading>
        <Heading>BLOGBLOGBLOG</Heading>
        <Heading>BLOGBLOG</Heading>
        <Heading>BLOG</Heading>
      </Box>
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
