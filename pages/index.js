import React from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'next/router';
import {startClock, serverRenderClock} from '../store'
import Examples from '../components/examples'

class Index extends React.Component {
  static getInitialProps ({ reduxStore, req }) {
    const isServer = !!req
    reduxStore.dispatch(serverRenderClock(isServer))

    return {}
  }

  componentDidMount () {
    const {dispatch} = this.props
    this.timer = startClock(dispatch)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <Examples />
    )
  }
}

export default withRouter(connect()(Index));
