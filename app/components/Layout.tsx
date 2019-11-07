import React from 'react'
import Head from './Head'
import Nav from './ui/Nav'
import Footer from './ui/Footer'
import Container from './ui/Container'
import Base from './Base'

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
  <Base title={title}>
    <div className="flex-1 flex flex-col ">
      <main className="pb-24 flex-1">
        <div className="">{nav && <Nav />}</div>
        {padContent ? (
          <Container className="flex-1 py-4">{children}</Container>
        ) : (
          <div className="flex-1">{children}</div>
        )}
      </main>
      <Footer></Footer>
    </div>
  </Base>
)

export default Layout
