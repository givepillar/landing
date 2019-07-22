import React, { Component } from 'react'
import Layout from '../app/components/Layout'
import { Categories } from '../app/mock/data'
import Highlight from '../app/components/ui/Highlight'

interface ErrorProps {
  statusCode: string
}

class Error extends React.Component<ErrorProps> {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    return (
      <Layout title="Whoops | Pillar">
        <div className="max-w-lg mx-auto">
          <h1 className="text-5xl mb-6">
            <Highlight color={Categories.health.colors.light}>
              Whoops...
            </Highlight>
          </h1>
          <p className="text-xl">
            {this.props.statusCode
              ? `An error ${this.props.statusCode} occurred on server`
              : 'Something went wrong'}
            . Sorry about that.
          </p>
        </div>
      </Layout>
    )
  }
}

export default Error
