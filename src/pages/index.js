import React from "react";
import {Link} from "gatsby";

import Layout from "../components/layout";
import '../styles/index.scss';
import Head from "../components/Head";

const IndexPage = () => {

  return (
    <Layout>
      <Head title="Home"/>
      <h1>Hello Gatsby!!</h1>
      <p>
         Need a developer ?
        <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}

export default IndexPage;
