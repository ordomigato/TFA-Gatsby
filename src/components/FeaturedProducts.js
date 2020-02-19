import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import './FeaturedProducts.scss'
import ProductCard from './ProductCard'

const FeaturedProducts = () => {
    const data = useStaticQuery(graphql`
    query {
      allContentfulProducts(limit: 3, filter: {featured: {eq: true}}) {
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
  `)
    return (
        <section id="featured-products">
            <div className="featured-products-container">
                <div className="">
                    <h2 className="">Featured Products</h2>
                    <div className="products">

                    {data.allContentfulProducts.edges.map(({ node }) => (
                        <ProductCard productInfo={node} />
                    ))}

                    </div>

                </div>
            </div>
        </section>
    )
}

export default FeaturedProducts