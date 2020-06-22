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
        <Heading>> NO</Heading>
        <Heading>> IDEAS</Heading>
        <Heading>> BUT </Heading>
        <Heading>
          > IN THINGS<sup>1</sup>
        </Heading>
      </Box>
    </Layout>
  )
}
