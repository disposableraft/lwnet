import React from "react"
import { Box, Text } from "@chakra-ui/core"

const Footer = () => {
  return (
    <Box my="8">
      <Text fontSize="xs" textAlign="center">
        <p>© {new Date().getFullYear()} Lance Wakeling</p>
        <p>
          <a href="https://instagram.com/disposableraft">Instagram</a> —{" "}
          <a href="https://github.com/disposableraft">Github</a>
        </p>
      </Text>
    </Box>
  )
}

export default Footer
