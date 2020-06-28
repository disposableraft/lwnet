import React from "react"
import {
  Box,
  Code as ChakraCode,
  Heading as ChakraHeading,
  Link as ChakraLink,
  Text as ChakraText,
} from "@chakra-ui/core"

export const Code = props => {
  return <ChakraCode mb={4} mt={2} {...props} />
}

export const BlockQuote = props => {
  return (
    <Box
      borderLeft="8px solid"
      borderColor="gray.100"
      pl={4}
      as="blockquote"
      ml={12}
      mb={6}
      {...props}
    />
  )
}

export const Text = props => {
  return <ChakraText mb={3} {...props} />
}

export const Heading3 = props => {
  return <ChakraHeading as="h3" size="lg" my={4} {...props} />
}

export const Link = props => {
  return <ChakraLink color="red.500" {...props} />
}
