import React from 'react'
import Head from './Head'
import Nav from './ui/Nav'
import Footer from './ui/Footer'

interface LayoutProps {
  title?: string
  padContent?: boolean
}
const Layout: React.FC<LayoutProps> = ({
  title,
  children,
  padContent = true,
}) => (
  <div className="flex-1 flex flex-col bg-gray-100">
    <Head title={title} />
    <div className="bg-white  border-b border-gray-200">
      <div className="container px-4">
        <Nav />
      </div>
    </div>
    {padContent ? (
      <div className="flex-1 container px-4 py-4">{children}</div>
    ) : (
      <div className="flex-1">{children}</div>
    )}
    <Footer />
  </div>
)

export default Layout
