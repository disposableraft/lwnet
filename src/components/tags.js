import React from "react"
import { Tag } from "@chakra-ui/core"

const Tags = props => {
  const tags = props.children.split(",")
  return tags.map(tag => {
    return (
      <Tag size="sm" mr={2} {...props}>
        {tag}
      </Tag>
    )
  })
}

export default Tags
