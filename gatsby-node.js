const path = require('path') //??

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const singleProductTemplate = path.resolve('./src/templates/SingleProduct.js')
    const res = await graphql(`
        query {
            allContentfulProducts {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)
    
    res.data.allContentfulProducts.edges.forEach( edge => {
        createPage({
            component: singleProductTemplate,
            path: `/shop/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
}