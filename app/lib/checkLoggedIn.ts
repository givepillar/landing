import gql from 'graphql-tag'

export default apolloClient =>
  apolloClient
    .query({
      query: gql`
        query getUser {
          viewer {
            id
            firstName
            lastName
            email
          }
        }
      `,
    })
    .then(({ data }) => {
      return { user: data.viewer }
    })
    .catch(() => {
      // Fail gracefully
      return { user: {} }
    })
