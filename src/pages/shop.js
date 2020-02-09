import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Skus from "../components/Skus"

import Layout from '../components/Layout'
import './shop.scss'

const Shop = ({ data }) => {

    return (
        <Layout>
            <main className="navbar-fix">
                <section className="product-section">
                    <h1>Shop Page</h1>
                    <div className="products">

                      <Skus />





                          {/* {data.allContentfulProducts.edges.map( ({ node }) => (
                              <article key={node.id}>
                                  <Img 
                                    fluid={node.images[0].fluid}
                                  />
                                  <footer>
                                      <h3>{node.productName}</h3>
                                      <p>{node.price}</p>
                                      { node.promoPrice !== null &&
                                          <p>{node.promoPrice}</p> 
                                      }
                                      <p>{node.description.description}</p>
                                      <a></a>
                                  </footer>
                              </article>
                          ))} */}
                    </div>
                </section>
            </main>
        </Layout>
    )
}

// CONTENTFUL QUERY

// export const productQuery = graphql`
//   query {
//     allContentfulProducts {
//       edges {
//         node {
//           id
//           productName
//           price
//           promoPrice
//           description {
//             description
//           }
//           images {
//             fluid {
//               ...GatsbyContentfulFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `

export default Shop