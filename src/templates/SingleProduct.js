import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import './SingleProduct.scss'
import Layout from '../components/Layout'

export const query = graphql`
    query($slug: String!) {
        contentfulProducts (slug: {eq: $slug}) {
            productName
            price
            promoPrice
            stock
            description {
                description
            }
            images {
                fluid(maxWidth: 600, maxHeight: 600) {
                  ...GatsbyContentfulFluid
                }
            }
        }
    }
`

const SingleProduct = (props) => {
    return (
        <Layout>
            <main className="navbar-fix">
                <section className="single-product-section">
                    <div className="single-product-images">
                        <Img 
                            fluid={props.data.contentfulProducts.images[0].fluid}
                            objectPosition="50% 50%"
                            objectFit="cover"
                        />
                    </div>
                    <div className="single-product-content">
                        <h1>{props.data.contentfulProducts.productName}</h1>

                        { props.data.contentfulProducts.promoPrice === null ? (
                        <div className="price-tag">
                            <div className="price-wrapper">
                                <p className="price"> ${props.data.contentfulProducts.price} </p>
                            </div>
                        </div>
                        ):(
                        <div className="price-tag promo">
                            <div className="price-wrapper">
                                <p className="price"> ${props.data.contentfulProducts.price} </p>
                                <p className="promo-price"> ${props.data.contentfulProducts.promoPrice} </p>
                            </div>
                        </div>
                        )}

                        <Link to='/shop' className="cta-button">Purchase</Link>
                        <p className="product-description">{props.data.contentfulProducts.description.description}</p>
                    </div>
                </section>
            </main>
        </Layout>
    )
}

export default SingleProduct