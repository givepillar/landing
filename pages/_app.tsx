import React from 'react'
import App from 'next/app'
import { AppProps, Container, DefaultAppIProps } from 'next/app'
import Router from 'next/router'
import '../app/styles/index.css'
import '../app/styles/nprogress.css'
import NProgress from 'nprogress'
import withApolloClient, { IApolloProps } from '../app/lib/withApollo'
import { ApolloProvider } from 'react-apollo'

class Base extends React.Component<IApolloProps & DefaultAppIProps & AppProps> {
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
    const { Component, pageProps, apolloClient } = this.props

    return (
      <div className="flex-1 flex font-sans text-gray-900 antialiased">
        <Container>
          <ApolloProvider client={apolloClient}>
            <Component {...pageProps} />
          </ApolloProvider>
        </Container>
      </div>
    )
  }
}

export default withApolloClient(Base)
