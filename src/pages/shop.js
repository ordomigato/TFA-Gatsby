import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import ProductCard from '../components/ProductCard'
import './shop.scss'

const Shop = ({ data }) => {

    return (
        <Layout>
            <main className="navbar-fix">
                <section className="product-section shop-page">
                    <h1>Products</h1>
                    <p className="product-section-notice">All orders are processed online through <a href="https://reverb.com/shop/tom-freeman-audio-effects" target="_blank" rel="noopener noreferrer">Reverb</a> or by contacting us directly.</p>
                    <div className="products">

                        {data.allContentfulProducts.edges.map(({ node }) => (

                        <ProductCard productInfo={node} />

                        ))}

                    </div>
                </section>
            </main>
        </Layout>
    )
}

export const productQuery = graphql`
  query {
    allContentfulProducts {
      edges {
        node {
          id
          productName
          price
          promoPrice
          slug
          description {
            description
          }
          images {
            fluid(maxWidth: 400, maxHeight: 400) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default Shop