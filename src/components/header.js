import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { scale, rhythm } from "../utils/typography"

const Header = ({ siteTitle }) => (
  <header >
    <div
      style={{
        maxWidth: 960,
        paddingTop: rhythm(1),
      }}
    >
      <h1 style={{ ...scale(1.625) }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
            background: `-webkit-linear-gradient(#eee, ghostwhite)`,
            WebkitBackgroundClip: `text`,
            WebkitTextFillColor: `transparent`
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
