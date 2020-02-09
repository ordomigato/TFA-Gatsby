import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax';
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import './Hero.scss'

const Hero = () => {

    const data = useStaticQuery(graphql`
        query heroImages {
            image: file(relativePath: {eq: "hero.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 3600, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (

        <section className="hero">
            <ParallaxBanner
                className="hero-parallax"
                layers={[
                    {
                        children:
                            <Img 
                                fluid={data.image.childImageSharp.fluid}
                                style={{ margin: '0rem', height: '150vh' }}
                                imgStyle={{ objectFit: 'cover' }}
                            />,
                        amount: 0.5,
                    },
                ]}
                style={{ height: '100vh'}}
            >
                <div className="site-title-container">
                    <div className="site-title">
                        <h1>
                            <span>Tom</span>
                            <span>Freeman</span>
                            <span>Audio</span>
                            <span>Effects</span>
                        </h1>
                        <p className="site-subtitle">Guitar Pedal Manufacturer</p>
                    </div>
                </div>
            </ParallaxBanner>
            <div className="intro-container">
                <div className="text-wrapper">
                    <h2>OUR MISSION</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Hero