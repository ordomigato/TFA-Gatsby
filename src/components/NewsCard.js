import React from 'react'
import { Link } from 'gatsby';
import Img from 'gatsby-image'
import TextTruncate from 'react-text-truncate';


import './NewsCard.scss'

const NewsCard = ({article}) => {
    return (
        <article className="news-article">
            <div className="article-image-container">
                <Img
                    fixed={article.coverImage.fixed}
                    style={{height: '300px', width: '100%'}}
                />
            </div>
            <div className="article-body-container">
                <header>
                    <h2 className="article-title">{article.title}</h2>
                    <p>Posted: {article.createdAt}</p>
                </header>
                <TextTruncate 
                     line={5}
                     element="p"
                     truncateText=" …"
                     text={article.excerpt.excerpt}
                    //  textTruncateChild={<a href="#">Read on</a>}
                />
            </div>
            <Link to={`/news/${article.slug}`}>Link to Article</Link>
        </article>
    )
}

export default NewsCard