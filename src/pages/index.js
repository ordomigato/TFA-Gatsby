import React from "react"
import { ParallaxProvider } from 'react-scroll-parallax';

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import FeaturedVideo from '../components/FeaturedVideo'
import ShopNow from '../components/ShopNow'
import Testimonials from '../components/Testimonials'
import SocialMedia from '../components/SocialMedia'


const IndexPage = () => {
    return (
        <Layout>
            <ParallaxProvider>
            <main>
                <Hero />
                <FeaturedProducts />
                <FeaturedVideo />
                <ShopNow />
                <Testimonials />
                <SocialMedia />
            </main>
            </ParallaxProvider>
        </Layout>
    )
}

export default IndexPage