import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import './news.scss'
import Layout from '../components/Layout'
import NewsList from '../components/NewsList'

const News = ({data}) => {
    return (
        <Layout>
            <div className="navbar-fix">
                <main className="news-main-section">
                    <h1 className="news-headline">Recent News</h1>

                        <section>
                        {data.allContentfulNews.edges.map(({node}) => (

                            <NewsList article={node} />

                        ))}
                        </section>

                </main>
            </div>
        </Layout>
    )
}

export const newsQuery = graphql`
  query {
    allContentfulNews {
        edges {
          node {
            author
            id
            slug
            createdAt(formatString: "LL")
            title
            coverImage {
                fixed(width: 300) {
                    ...GatsbyContentfulFixed
                }
            }
          }
        }
      }
  }
`

export default News