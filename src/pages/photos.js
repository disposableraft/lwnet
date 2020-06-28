import React, { useState } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Box, Grid, Spinner } from "@chakra-ui/core"
import Layout from "../components/layout.js"
import ImageModal from "../components/image-modal"

const ImgWithSpinner = props => {
  const [showSpinner, setShowSpinner] = useState(false)
  const spinner = (
    <Spinner
      color="white"
      zIndex={10000}
      pos="absolute"
      top="40%"
      left="50%"
      size="xl"
      thickness="4px"
      speed="0.65s"
    />
  )
  return (
    <Box>
      {showSpinner ? spinner : ""}
      <Img
        onLoad={() => setShowSpinner(false)}
        onStartLoad={() => setShowSpinner(true)}
        {...props}
      />
    </Box>
  )
}

const Photos = props => {
  const data = props.data

  const thumbnails = data.allImageSharp.nodes.map(node => {
    const thumbnail = <Img fluid={node.thumb} backgroundColor={`black`} />
    const fullsize = (
      <ImgWithSpinner fluid={node.fullsize} backgroundColor={`black`} />
    )
    return (
      <Box>
        <ImageModal thumbnail={thumbnail} fullsize={fullsize} />
      </Box>
    )
  })

  return (
    <Layout>
      <Grid
        templateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(5, 1fr)"]}
        gap={6}
      >
        {thumbnails}
      </Grid>
    </Layout>
  )
}

export const query = graphql`
  query {
    allImageSharp(sort: { order: DESC, fields: fluid___originalName }) {
      totalCount
      nodes {
        id
        thumb: fluid(maxWidth: 240, maxHeight: 240, cropFocus: ATTENTION) {
          ...GatsbyImageSharpFluid
        }
        fullsize: fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default Photos
