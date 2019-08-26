import React from 'react'
import Layout from '../app/components/Layout'
import gql from 'graphql-tag'
import { useQuery, useApolloClient } from 'react-apollo'
import Spinner from '../app/components/ui/Spinner'
import { signOut } from '../app/lib/auth'

const GET_USER_INFO_FOR_SETTINGS = gql`
  query getUserInfoForSettings {
    viewer {
      id
      firstName
      lastName
      email
    }
  }
`

const SettingsPage = () => {
  const { data, loading, error } = useQuery(GET_USER_INFO_FOR_SETTINGS)
  const client = useApolloClient()

  if (loading)
    return (
      <Layout title="Settings | Pillar">
        <Spinner />
      </Layout>
    )

  if (!data || !data.viewer || error)
    return <Layout title="Settings | Pillar">An error occurred</Layout>

  const { viewer } = data

  return (
    <Layout title="Settings | Pillar">
      <h1>
        Signed in as {viewer.firstName} {viewer.lastName}
      </h1>

      <button className="link" onClick={() => signOut(client)}>
        Sign out
      </button>
    </Layout>
  )
}

export default SettingsPage
