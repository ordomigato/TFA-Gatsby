import React from 'react'
import { Link } from 'gatsby';
import Img from 'gatsby-image'

import './NewsList.scss'

const NewsList = ({article}) => {
    return (
        <article className="news-article">
            <div className="article-image-container">
                <Img
                    fixed={article.coverImage.fixed}
                    style={{height: '200px',}}
                />
            </div>
            <div>
                <h2 className="article-title">{article.title}</h2>
                <p className="article-excerpt"></p>  
            </div>
            <Link to={`/news/${article.slug}`}>Link to Article</Link>
        </article>
    )
}

export default NewsList