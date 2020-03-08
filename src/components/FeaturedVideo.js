import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax';
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import './FeaturedVideo.scss'

const FeaturedVideo = () => {

    const data = useStaticQuery(graphql`
        query images {
            image: file(relativePath: {eq: "banner.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 3600, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <section className="frontpage-banner">
            <ParallaxBanner
                className="frontpage-banner-parallax"
                layers={[
                    {
                        children:
                            <Img 
                                fluid={data.image.childImageSharp.fluid}
                                style={{ margin: '0rem', height: '60vh' }}
                                imgStyle={{ objectFit: 'cover' }}
                            />,
                        amount: 0.5,
                    },
                ]}
                style={{ height: '15rem'}}
            >
                <div className="frontpage-banner-heading-container">
                    <div className="frontpage-banner-heading">
                        <h3>
                            Listen for yourself
                        </h3>
                    </div>
                </div>
            </ParallaxBanner>
            <div className="featured-video-section">
                <div className="featured-video-container">
                    <figure className="featured-video-wrapper image is-16by9">
                        <iframe className="has-ratio" width="1024" height="576" align="middle" src="https://www.youtube.com/embed/0y0DrwDLyZs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default FeaturedVideo