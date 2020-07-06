import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Box, Flex } from "@chakra-ui/core"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Box>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Flex justifyContent="center">
        <Box
          mt={["6", "8", "10", "12"]}
          mx={["6", "8", "10"]}
          px={[4, null]}
          width={["100%", "480px", "960px"]}
          lineHeight="tall"
        >
          {children}
        </Box>
      </Flex>
      <Footer />
    </Box>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
