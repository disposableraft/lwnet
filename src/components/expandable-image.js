import React from "react"
import Img from "gatsby-image"

class ExpandableImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: false,
    }
  }

  expand() {
    this.setState(state => {
      return {
        expanded: true,
      }
    })
  }

  render() {
    return (
      <div
        role="presentation"
        onClick={() => this.expand()}
      >
        {this.state.expanded ? (
          <Img fluid={this.props.fullsize} />
        ) : (
          <Img style={{cursor:'pointer'}} fluid={this.props.banner} />
        )}
      </div>
    )
  }
}

export default ExpandableImage
