import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import Head from '../components/Head';
const { INLINES, BLOCKS, MARKS } = require('@contentful/rich-text-types');

export const data= graphql`
query($slug:String!) {
  contentfulBlogPost(
      slug:{
        eq:$slug
        }
  ){
    title
    publishedDate(formatString: "YYYY MMMM DD")
    body{
      json
    }
  }
}
`

const Blog = ({data})=>{
const options={
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: ({data}) =>{
      const alt= data.target.fields.title['en-US'];
      const url = data.target.fields.file['en-US'].url;
      return <img alt={alt} src={url}></img>
   
    }
      
},
  
};
    return (
      <Layout>
      <Head title={data.contentfulBlogPost.title}/>
      <h2>{data.contentfulBlogPost.title}</h2>
      <p>{data.contentfulBlogPost.publishedDate}</p>
      {
        documentToReactComponents(data.contentfulBlogPost.body.json,options)
      }
      </Layout>

    )
}

export default Blog;