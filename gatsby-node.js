const path = require('path');

/*
module.exports.onCreateNode  = ({ node, actions }) => {
    const { createNode, createNodeField } = actions
    // Transform the new node here and create a new node or
    // create a new node field.
    if(node.internal.type === 'MarkdownRemark'){
        const slug = path.basename(node.fileAbsolutePath,'.md');
        console.log(slug);
        // console.log(JSON.stringify(node,null,4));
        createNodeField({
            node,
            name:'slug',
            value: slug
        })
    }
   
  }
  */
module.exports.createPages = async({ graphql, actions }) => {
    const { createPage } = actions;
    const blogTemplate = path.resolve('./src/templates/blog.js');
   const res= await graphql(`
      {
        allContentfulBlogPost{
          edges{
            node{
                slug
            }
          }
        }
      }
    `);

 /*
        {
          "node": {
            "fields": {
              "slug": "gatsby"
            }
          }
        }
 */

 res.data.allContentfulBlogPost.edges.forEach((edge)=>{
     createPage({
         component: blogTemplate,
         path:`/blog/${edge.node.slug}`,
         context:{
             slug:edge.node.slug,
         }
     })
 })
}