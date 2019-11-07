import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks'
import App, { Container } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import React from 'react'
import { ApolloProvider } from 'react-apollo'
import withApolloClient from '../app/lib/withApollo'
import '../app/styles/index.css'
import '../app/styles/nprogress.css'
import withGA from 'next-ga'

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
      <div className="flex-1 flex font-sans text-gray-900 bg-gray-50 antialiased">
        <Container>
          <ApolloHooksProvider client={apolloClient}>
            <ApolloProvider client={apolloClient}>
              <Component {...pageProps} />
            </ApolloProvider>
          </ApolloHooksProvider>
          <style jsx global>{`
            .article h2 {
              @apply font-display font-black text-5xl;
              @apply mb-12;
            }

            .article h3 {
              @apply font-bold text-xl mb-6 mt-12;
            }

            .article .wrap {
              @apply leading-loose text-lg;
            }

            .article p,
            .article .wrap > ol > li {
              @apply mb-6;
            }

            .article a {
              background: linear-gradient(
                0deg,
                theme(colors.teal.100) 50%,
                transparent 50%
              );
              @apply text-teal-900;
            }

            .article ul {
              list-style-type: disc;
              padding-left: 2em;
            }

            .article ol[type='a'] {
              list-style: lower-alpha;
            }

            .article ol[type='i'] {
              list-style: lower-roman;
            }

            .article ol > li > ol {
              padding-left: 1em;
            }

            .article ol > li > ol > li {
              @apply my-2;
            }
          `}</style>
        </Container>
      </div>
    )
  }
}

export default withGA('UA-148813695-1', Router)(withApolloClient(Base))
