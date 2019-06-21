import React from 'react'
import App, { Container } from 'next/app'
import Router from 'next/router'
import '../app/styles/index.css'
import '../app/styles/nprogress.css'
import NProgress from 'nprogress'

class Base extends App {
  constructor(props) {
    super(props)
    NProgress.configure({
      showSpinner: false,
    })

    Router.onRouteChangeStart = () => NProgress.start()
    Router.onRouteChangeComplete = () => NProgress.done()
    Router.onRouteChangeError = () => NProgress.done(true)
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <div className="flex-1 flex font-sans text-gray-900 antialiased">
        <Container>
          <Component {...pageProps} />
        </Container>
      </div>
    )
  }
}

export default Base
