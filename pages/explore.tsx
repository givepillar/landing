import React from 'react'
import Layout from '../app/components/Layout'
import Link from 'next/link'
import classnames from 'classnames'

const SubnavLink = ({ children, href }) => (
  <Link href={href}>
    <a className={classnames('py-3 inline-block')}>{children}</a>
  </Link>
)

const Explore = () => (
  <Layout title="Explore" padContent={false}>
    <div className="bg-white border-b border-gray-200">
      <div className="container">
        <SubnavLink href="#">Explore</SubnavLink>
      </div>
    </div>

    <h1>Explore</h1>
  </Layout>
)

export default Explore