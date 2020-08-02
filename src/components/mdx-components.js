import React from "react"
import {
  Box,
  Code as ChakraCode,
  Heading as ChakraHeading,
  Link as ChakraLink,
  Text as ChakraText,
  Image as ChakraImage,
} from "@chakra-ui/core"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/nightOwl"

export const Code = props => {
  // mdx sends 'language-python', but prism expects just 'python'
  const language = props.className && props.className.split("-")[1]
  const codeStyle = {
    width: "100%",
    padding: "1rem 1rem 0",
  }

  return (
    <Highlight
      {...defaultProps}
      code={props.children}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <ChakraCode
          rounded="lg"
          className={className}
          my={4}
          style={Object.assign(codeStyle, style)}
        >
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </ChakraCode>
      )}
    </Highlight>
  )
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

export const Image = props => {
  return <ChakraImage pt={4} {...props} />
}

export const Text = props => {
  return <ChakraText mb={3} {...props} />
}

export const Heading2 = props => {
  return <ChakraHeading as="h2" size="lg" my={4} {...props} />
}

export const Heading3 = props => {
  return <ChakraHeading as="h3" size="lg" my={4} {...props} />
}

export const Link = props => {
  return <ChakraLink color="red.500" {...props} />
}

export const Caption = props => {
  return <ChakraText fontSize="xs" mt={2} mb={8} {...props} />
}
