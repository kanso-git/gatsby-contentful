import React from "react";
import {graphql,useStaticQuery} from 'gatsby';
import footerStyles from './footer.module.scss';


const Footer = ()=>{
  const data = useStaticQuery(graphql`
  {
     site{
        siteMetadata{
           author
        }
     }
  }
`)
    return(
        <footer className={footerStyles.footer}>
          Created by {data.site.siteMetadata.author}
        </footer>
    )
}

export default Footer;