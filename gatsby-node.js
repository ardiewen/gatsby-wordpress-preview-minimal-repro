/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const TEMPLATES = {
  WpPage: require.resolve("./src/templates/page.jsx"),
  WpPost: require.resolve("./src/templates/post.jsx"),
}

const getTemplate = typename => TEMPLATES[typename]

exports.createPages = async methods => {
  const {
    data: {
      allWpContentNode: { nodes },
    },
  } = await methods.graphql(`
  fragment PageFields on WpPage {
    id
    title
    uri
  }
  
  fragment PostFields on WpPost {
    id
    title
    uri
    date
  }

  query GetAllContentNodes {
    allWpContentNode {
      nodes {
          __typename
          ...PageFields
          ...PostFields
        
      }
    }
  }`)

  nodes.map(node => {
    methods.actions.createPage({
      path: node.uri,
      component: getTemplate(node.__typename),
      context: {
        id: node.id,
      },
    })
  })
}
