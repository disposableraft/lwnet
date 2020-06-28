import React from "react"
import { Tag } from "@chakra-ui/core"

const Tags = ({ children }) => {
  const tags = children.split(",")
  return tags.map(tag => {
    return (
      <Tag size="sm" mr={4} mb={6}>
        {tag}
      </Tag>
    )
  })
}

export default Tags
