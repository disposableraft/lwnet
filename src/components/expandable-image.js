import React from "react"
import Img from "gatsby-image"

class ExpandableImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: false,
      error: false,
    }
  }

  expand() {
    this.setState(state => {
      state.expanded = true
      return state
    })
  }

  handleError(error) {
    this.setState(state => {
      state.error = true
      state.expanded = false
      return state
    })
  }

  render() {
    let content
    if (!this.state.error) {
      content = this.state.expanded ? (
        <Img
          fluid={this.props.fullsize}
          onError={error => {
            this.handleError(error)
          }}
          backgroundColor={`black`}
        />
      ) : (
        <Img
          style={{ cursor: "pointer" }}
          fluid={this.props.banner}
          backgroundColor={`black`}
        />
      )
    } else {
      content = (
        <div className="ExpandableImageError" style={{ position: "relative" }}>
          <Img fluid={this.props.banner} backgroundColor={`black`}></Img>
          <div
            style={{
              position: "absolute",
              top: "40%",
              left: "50%",
              color: "ghostwhite",
              textShadow: "0.05em 0.05em 0.25em black",
              textAlign: "center",
              verticalAlign: "middle",
            }}
          >
            Error :/
          </div>
        </div>
      )
    }
    return (
      <div role="presentation" onClick={() => this.expand()}>
        {content}
      </div>
    )
  }
}

export default ExpandableImage
