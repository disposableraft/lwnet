const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    const date = node.frontmatter.date
    createNodeField({
      node,
      name: `slug`,
      value: formatDateSlug(date, slug),
    })
  }
}
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}

/**
 * Format a slug `{date}-{slug}`
 * @param {String} date
 * @param {String} slug
 * @returns string with a leading slug and words separated by dashes
 */
function formatDateSlug(date, slug) {
  const newSlug = slug.split("/").filter(e => e)
  return [date].concat(newSlug).join("-")
}
