import React from 'react'

import './FeaturedProducts.scss'

import Varmint from '../images/Varmint.jpg'
import Bolero from '../images/Bolero.jpg'
import MegaDistortion from '../images/MegaDistortion.jpg'

const FeaturedProducts = () => {

    const data = [
        {
            name: "Varmint",
            img: Varmint,
            shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
            // url:,
            regPrice: 160,
            promoPrice: 120,
        },
        {
            name: "Bolero",
            img: Bolero,
            shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
            // url:,
            regPrice: 180,
            promoPrice: null,
        },
        {
            name: "Mega Distortion",
            img: MegaDistortion,
            shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
            // url:,
            regPrice: 200,
            promoPrice: 120,
        },
    ]

    return (
        <section id="featured-products">
            <div className="featured-products-container">
                <div className="">
                    <h2 className="">Featured Products</h2>
                    <div className="product-wrapper columns">
                        {data.map( product => (
                            <article className="product column">
                                <figure className="image is-square">
                                    <img src={product.img} className=""/>
                                </figure>

                                { product.promoPrice === null ? (
                                    <div className="price-tag">
                                        <div className="price-wrapper">
                                            <p className="price"> ${product.regPrice} </p>
                                        </div>
                                    </div>
                                ):(
                                    <div className="price-tag promo">
                                        <div className="price-wrapper">
                                            <p className="price"> ${product.regPrice} </p>
                                            <p className="promo-price"> ${product.promoPrice} </p>
                                        </div>
                                    </div>
                                )}

                                <div className="short-description">
                                    <div className="short-description-wrapper">
                                        <h3>{product.name}</h3>
                                        <p>{product.shortDescription}</p>
                                    </div>
                                </div>
                                <button className="view-details-btn">
                                    View Details
                                </button>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedProducts