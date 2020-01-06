/*this method allowed us to hook into the build into the build process when Gatsby would go through our files and build
out the individual node representations of them and then we were specifically looking for nodes of the type of markdown
remark, we then added this new node field on it equal to slug and the slug pointed to the new file path that we made 
Now we have the slug value that we can access
*/
const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  //console.log(node)
  const { createNodeField } = actions 
  if(node.internal.type === `MarkdownRemark`) {
    //creating a route
    const slug = createFilePath({ node, getNode})
    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
}

/*return graphql query that gives back all markdown remarks then iterate over it and call create page on each 
of those markdown notes.
*/
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  //node js you need to add () around backticks, no es6
  /*create a page, it'll call graphql returns the result in a promise, loop through all markdown file we have
  manually creating a new page using blog-post template.
  */
  return graphql(`
  {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
        }
      }
    }
  }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({node}) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          slug: node.fields.slug
        }
      })
    })
  })
}

//