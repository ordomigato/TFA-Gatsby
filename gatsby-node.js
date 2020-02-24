const path = require('path') //??

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const singleProductTemplate = path.resolve('./src/templates/SingleProduct.js')
    const singleNewsTemplate = path.resolve('./src/templates/SingleNews.js')
    const res = await graphql(`
        query {
            allContentfulProducts {
                edges {
                    node {
                        slug
                    }
                }
            }
            allContentfulNews {
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

    res.data.allContentfulNews.edges.forEach( edge => {
        createPage({
            component: singleNewsTemplate,
            path: `/news/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
}