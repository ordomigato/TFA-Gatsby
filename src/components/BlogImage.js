import React from 'react'
import Img from "gatsby-image"


const BlogImage = ( {image} ) => {
    return (
        <div>
            <Img 
                fluid={image}
            />
        </div>
    )
}

export default BlogImage