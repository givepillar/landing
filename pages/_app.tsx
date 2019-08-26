import App, { Container } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import React from 'react'
import withApolloClient from '../app/lib/withApollo'
import '../app/styles/index.css'
import '../app/styles/nprogress.css'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks'

export interface ApolloProps {
  apolloClient: any
}

class Base extends App<ApolloProps> {
  constructor(props) {
    super(props)
    NProgress.configure({
      showSpinner: false,
    })

    Router.events.on('routeChangeStart', NProgress.start)
    Router.events.on('routeChangeComplete', NProgress.done)
    Router.events.on('routeChangeError', () => NProgress.done(true))
  }

  render() {
    const { Component, pageProps, apolloClient } = this.props

    return (
      <div className="flex-1 flex font-sans text-gray-900 antialiased">
        <Container>
          <ApolloHooksProvider client={apolloClient}>
            <ApolloProvider client={apolloClient}>
              <Component {...pageProps} />
            </ApolloProvider>
          </ApolloHooksProvider>
        </Container>
      </div>
    )
  }
}

export default withApolloClient(Base)
