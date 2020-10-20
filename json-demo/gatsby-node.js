/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// create pages from json
exports.createPages = async ({
  actions: { createPage },
  reporter,
  graphql,
}) => {
  const result = await graphql(`
    {
      allMyJsonDataJson {
        edges {
          node {
            id
            description
            title
            content
            date_created
          }
        }
      }
    }
  `)

  const pages = result.data.allMyJsonDataJson.edges

  pages.forEach((page, index) => {
    let slug = page.node.title
    slug = slug.replace(/[^a-z0-9+]+/gi, "-").toLowerCase()
    createPage({
      path: `/${slug}/`,
      component: require.resolve("./src/templates/jsonTemplate.js"),
      context: { page },
    })
  })
}
