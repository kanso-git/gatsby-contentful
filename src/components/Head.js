import React from 'react';
import {Helmet} from "react-helmet";
import {useStaticQuery, graphql} from 'gatsby';


const Head =(props)=>{
    const data = useStaticQuery(graphql`
    query{

        site{
            siteMetadata{
                title
            }
        }
    }
    
    `)

    return(
        <Helmet title={`${data.site.siteMetadata.title} | ${props.title}`} />
    )
}

export default Head;