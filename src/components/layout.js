import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import { rhythm } from "../utils/typography"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div
      style={{
          maxWidth: 960,
          paddingRight: rhythm(2),
          paddingBottom: rhythm(2),
          paddingLeft: rhythm(2),
          paddingTop: rhythm(1),
          margin: `${rhythm(0)} auto`,
        }}
      >
      <div>
        <main>
          {children}
        </main>
        <footer>
          <div 
            style={{ 
              color: `#ccc`,
              textAlign: `center`,
            }}
          >
            <Header siteTitle={data.site.siteMetadata.title} />
            © {new Date().getFullYear()} Lance Wakeling — <a href="https://instagram.com/disposableraft">Instagram</a> — <a href="https://github.com/disposableraft">Github</a>
          </div>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
