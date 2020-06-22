import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Box, Heading, Flex, Text } from "@chakra-ui/core"

const MenuItems = ({ children }) => (
  <Text mt={4} mr={6} display="block">
    {children}
  </Text>
)

const Header = props => {
  const [show, setShow] = React.useState(false)
  const handleToggle = () => setShow(!show)

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="white"
      color="black"
      borderBottom="1px"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg">
          <Link to="/">{props.siteTitle}</Link>
        </Heading>
      </Flex>

      <Box
        display={{ base: "block", md: "none" }}
        onClick={handleToggle}
        cursor="pointer"
      >
        <svg
          fill="black"
          width="16px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "flex" }}
        width="100%"
        alignItems="center"
      >
        <MenuItems>
          <Link to="/about">About</Link>
        </MenuItems>
        <MenuItems>
          <Link to="/photos">Photos</Link>
        </MenuItems>
      </Box>
    </Flex>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
