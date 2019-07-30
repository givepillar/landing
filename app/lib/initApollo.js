import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-unfetch'

let apolloClient = null

function create(initialState) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  const isBrowser = typeof window !== 'undefined'
  // @ts-ignore
  return new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    fetch: !isBrowser && fetch,
  })
}

export default function initApollo(initialState = {}) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (typeof window === 'undefined') {
    return create(initialState)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState)
  }

  return apolloClient
}
