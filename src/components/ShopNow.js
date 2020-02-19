import React from 'react'
import './ShopNow.scss'
import { Link } from 'gatsby'

const ShopNow = () => {
    return (
        <section className="frontpage-cta-banner">
            <div className="cta-banner-container">
                <Link to='/shop' className="cta-button">Shop Now</Link>
            </div>
        </section>
    )
}

export default ShopNow