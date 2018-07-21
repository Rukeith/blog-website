import React from 'react';
import {withRouter} from 'next/router'
import Layout from '../components/App.js'

const Page = withRouter((props) => (
  <Layout>
    <h1>{props.router.query.title}</h1>
  </Layout>
))

export default Page