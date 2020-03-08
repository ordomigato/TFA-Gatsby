import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

import './ProductCard.scss'

const ProductCard = ({productInfo}) => {
    return (
            <article className="product">
                <div className="product-thumbnail">
                    <Link to={`/shop/${productInfo.slug}`}>
                        <Img
                            fluid={productInfo.images[0].fluid}
                            objectPosition="50% 50%"
                            objectFit="cover"
                        />

                        { productInfo.promoPrice === null ? (
                        <div className="price-tag">
                            <div className="price-wrapper">
                                <p className="price"> ${productInfo.price} </p>
                            </div>
                        </div>
                        ):(
                        <div className="price-tag promo">
                            <div className="price-wrapper">
                                <p className="price"> ${productInfo.price} </p>
                                <p className="promo-price"> ${productInfo.promoPrice} </p>
                            </div>
                        </div>
                        )}

                        <div className="short-description">
                            <div className="short-description-wrapper">
                                <h3>{productInfo.productName}</h3>
                                <p>{productInfo.description.description}</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="product-view-button">
                <Link to={`/shop/${productInfo.slug}`}>
                    View Product
                </Link>
                </div>
            </article>
    )
}

export default ProductCard