import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Text, Heading, Stack, Box, Link, Icon } from "@chakra-ui/core"

export default ({ data }) => {
  const issues = data.allFile.nodes.map(issue => {
    return (
      <Box
        p={5}
        shadow="md"
        borderWidth="1px"
        textAlign="center"
        border="1px solid"
        borderColor="gray.200"
      >
        <Link href={issue.publicURL} isExternal={true}>
          {issue.name}
          <Icon name="external-link" mx="2" color="red.500" />
        </Link>
      </Box>
    )
  })
  return (
    <Layout>
      <SEO title="Private Circulation" />
      <Heading>Private Circulation</Heading>
      <Text>
        "The premier issue ..." begins page one, "has been emailed to you — that
        much is evident."
        <em>Private Circulation</em>, a monthly PDF journal published from
        January 2008 to June 2010, was a white lie based on a fantasy based on a
        sincere desire to exhibit and publish. Issues ran the gamut from
        inspired, to interesting, to irrational. We appologize in advance for
        the many broken links, but this is the world we live in.
      </Text>
      <Text>
        <em>
          Sincerely,
          <br />
          The Editors
        </em>
      </Text>
      <Stack mt="5">{issues}</Stack>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(
      sort: { fields: name }
      filter: { sourceInstanceName: { eq: "privateCirculation" } }
    ) {
      totalCount
      nodes {
        name
        publicURL
        relativePath
      }
    }
  }
`
