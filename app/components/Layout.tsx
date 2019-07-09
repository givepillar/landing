import React from 'react'
import Head from './Head'
import Nav from './ui/Nav'
import Footer from './ui/Footer'
import Container from './ui/Container'

interface LayoutProps {
  title?: string
  nav?: boolean
  padContent?: boolean
}
const Layout: React.FC<LayoutProps> = ({
  title,
  children,
  nav = true,
  padContent = true,
}) => (
  <div className="flex-1 flex flex-col bg-white">
    <Head title={title} />
    <div className="bg-white">{nav && <Nav />}</div>
    {padContent ? (
      <Container className="flex-1 py-4">{children}</Container>
    ) : (
      <div className="flex-1">{children}</div>
    )}
    <div className="mt-24">
      <Footer />
    </div>
  </div>
)

export default Layout
