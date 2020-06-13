import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

// NOTE: So, this approach taught me about sourceInstanceName, but it's not that useful as is. That's because I'd like each issue to have: a title, a link and a description. Since there are only a handful of issues, and there won't be more in the future, it's more efficient to just use static assets.

export default ({ data }) => {
  const issues = data.allFile.nodes.map(issue => {
    return (
      <li>
        <a href={issue.publicURL}>{issue.name}</a>
      </li>
    )
  })
  return (
    <Layout>
      <SEO title="Private Circulation" />
      <h1>Private Circulation</h1>
      <p>
        "The premier issue ..." begins page one, "has been emailed to you — that
        much is evident."
        <em>Private Circulation</em>, a monthly PDF journal published from
        January 2008 to June 2010, was a white lie based on a fantasy based on a
        sincere desire to exhibit and publish. Issues ran the gamut from
        inspired, to interesting, to irrational. We appologize in advance for
        the many broken links, but this is the world we live in.
      </p>
      <p>
        <em>
          Sincerely,
          <br />
          The Editors
        </em>
      </p>
      <ul>{issues}</ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(
      sort: { fields: name }
      filter: { sourceInstanceName: { eq: "privateCirculation" } }
    ) {
      totalCount
      nodes {
        name
        publicURL
        relativePath
      }
    }
  }
`
