module.exports ={
    siteMetadata:{
        title:'Gatsby Bootcamp',
        author:'Abdallah Kanso'
    },
    plugins:[
        'gatsby-plugin-sass',
        {
          resolve:'gatsby-source-filesystem' , 
          options: {
              name: 'src',
              path: `${__dirname}/src/`
          }
        },
        'gatsby-plugin-sharp',
        {
            resolve:'gatsby-transformer-remark',
            options:{
               plugins:[
                   'gatsby-remark-relative-images',
                   {
                       resolve:'gatsby-remark-images',
                       options:{
                           maxWidth:750,
                           linkImagesToOriginal:false
                       }
                   }
               ]
            }
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
              spaceId:  process.env.CONTENTFUL_SPACE_ID,
              // Learn about environment variables: https://gatsby.dev/env-vars
              accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
          },
          `gatsby-plugin-react-helmet`
    ]
}