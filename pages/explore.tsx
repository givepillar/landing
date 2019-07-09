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
  <Layout nav={true} title="Explore" padContent={false}>
    {/* <div className="bg-white border-b border-gray-200">
      <div className="container">
        <SubnavLink href="#">Explore</SubnavLink>
      </div>
    </div> */}
  </Layout>
)

export default Explore
