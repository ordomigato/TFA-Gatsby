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
                    style={{minHeight: '300px', width: '100%', minWidth: '300px'}}
                />
            </div>
            <div className="article-body-container">
                <header>
                    <h2 className="article-title">{article.title}</h2>
                    <p>Posted: {article.createdAt}</p>
                </header>
                <TextTruncate 
                     line={4}
                     element="p"
                     truncateText=" …"
                     text={article.excerpt.excerpt}
                    //  textTruncateChild={<a href="#">Read on</a>}
                />
                <div className="article-button">
                    <Link to={`/news/${article.slug}`}>READ MORE</Link>
                </div>
            </div>
        </article>
    )
}

export default NewsCard