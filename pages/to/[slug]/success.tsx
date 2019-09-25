import Link from 'next/link'
import React from 'react'
import Layout from '../../../app/components/Layout'

const Success = () => {
  return (
    <Layout title="Thanks for Giving | Pillar">
      <div className="max-w-lg bg-white rounded shadow p-12  container">
        <h1 className="text-2xl mb-8">Thanks for giving!</h1>
        <p className="text-lg mb-6">Your donation has been processed.</p>

        <Link href="/home">
          <a className="link text-lg">
            Browse more bundles <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </Link>
      </div>
    </Layout>
  )
}

export default Success
