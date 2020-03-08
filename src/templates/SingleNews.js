import React from 'react'
import { graphql, Link } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import './SingleNews.scss'
import Layout from '../components/Layout'

export const query = graphql`
    query($slug: String!) {
        contentfulNews (slug: {eq: $slug}) {
            author
            title
            createdAt(formatString: "LL")
            childContentfulNewsContentRichTextNode {
                json
            }
        }
    }
`

const SingleNews = (props) => {

    // allows images in post to show
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title['en-US']
                const url = node.data.target.fields.file['en-US'].url
                return <img alt={alt} src={url} />
            }
        }
    }

    return (
        <Layout>
            <div className="navbar-fix">
                <section className="single-news-page-post-container">
                    <div className="single-news-page-post">
                        <header>
                            <h1>{props.data.contentfulNews.title}</h1>
                            <div className="article-meta">
                                <p className="article-author">Written by: <span>{props.data.contentfulNews.author}</span> |&nbsp;</p>
                                <p className="article-date">Posted on: {props.data.contentfulNews.createdAt}</p>
                            </div>
                        </header>
                        {documentToReactComponents(props.data.contentfulNews.childContentfulNewsContentRichTextNode.json, options)}
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default SingleNews