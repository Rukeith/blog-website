import React from 'react';
import {withRouter} from 'next/router'
// import Layout from '../components/MyLayout.js'

const Page = withRouter((props) => (
  <h1>{props.router.query.title}</h1>
))

export default Page