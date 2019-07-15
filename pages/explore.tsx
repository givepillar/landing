import React from 'react'
import Layout from '../app/components/Layout'
import Link from 'next/link'
import classnames from 'classnames'
import SuggestionCarousel from '../app/components/SuggestionCarousel'
import Container from '../app/components/ui/Container'

const SubnavLink = ({ children, href }) => (
  <Link href={href}>
    <a className={classnames('py-3 inline-block')}>{children}</a>
  </Link>
)

const Explore = () => (
  <Layout nav={true} title="Explore" padContent={false}>
    <Container>
      <SuggestionCarousel />
    </Container>
  </Layout>
)

export default Explore
