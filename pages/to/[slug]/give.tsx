import React, { Component } from 'react'
import Layout from '../../../app/components/Layout'

import { NextPageContext, NextComponentType } from 'next'
import { Nonprofit, Bundle } from '../../../app/types'
import { nonprofits, bundles } from '../../../app/mock/data'
import NonprofitCard from '../../../app/components/NonprofitCard'

interface GiveProps extends NextPageContext {
  bundle: Bundle
  amount?: number
}

class Give extends Component<GiveProps> {
  static async getInitialProps(ctx: NextPageContext) {
    const { slug } = ctx.query
    const bundle: Nonprofit = Object.values(bundles).find(b => b.slug === slug)

    return { bundle }
  }

  render() {
    return (
      <Layout title="Support">Give to this {this.props.bundle.name}</Layout>
    )
  }
}

export default Give
