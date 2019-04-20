import React from 'react';
import Layout from '../components/layout';
import {graphql, useStaticQuery, Link} from 'gatsby'

import blogStyles from './blog.module.scss';
import Head from '../components/Head';



const BlogPage = () => {

  const data = useStaticQuery(graphql `
      {
        allContentfulBlogPost(
          sort:{
            fields:publishedDate,
            order:DESC
          }
        ){
          edges{
            node{
              contentful_id
              title
              publishedDate(formatString:"MMMM Do, YYYY")
              slug
            }
          }
        }
      }
    `);

  return (
    <Layout>
      <Head title="Blog"/>
      <ol className={blogStyles.posts}>
      <h1>Blog</h1>
        {data
          .allContentfulBlogPost
          .edges
          .map(e => (
            <li key={e.node.title} className={blogStyles.post}>
              <h2><Link to={`/blog/${e.node.slug}`}>{e.node.title}</Link></h2>
              <p>{e.node.publishedDate}</p>
            </li>
          ))}
      </ol>
    </Layout>
  )
}

export default BlogPage;