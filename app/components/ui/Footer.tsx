import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import Container from './Container'

interface LinkProps {
  href?: string
}
const FooterLink: React.SFC<LinkProps> = ({ children, href = '/' }) => (
  <Link href={href}>
    <a className="no-underline text-gray-800 font-medium text-sm ml-4">
      {children}
    </a>
  </Link>
)

const Footer = () => (
  <footer className="bg-white bg-gray-50">
    <Container>
      <div className=" mx-auto border-t pt-8 pb-16 border-gray-100 text-gray-600 flex items-center justify-between">
        <div className="max-w-xs">
          <div className="w-20 mb-6">
            <Logo />
          </div>
          <p className="text-gray-500 block max-w-sm">
            The new way to make a difference in the causes that matter most.
          </p>
        </div>

        {/* <div className="">
          <nav>
            <FooterLink>About</FooterLink>
            <FooterLink href="/terms">Terms</FooterLink>
            <FooterLink href="/privacy">Privacy</FooterLink>
            <FooterLink>Support</FooterLink>
          </nav>
        </div> */}

        <div className="">
          <nav>
            <FooterLink>About</FooterLink>
            <FooterLink href="/terms">Terms</FooterLink>
            <FooterLink href="/privacy">Privacy</FooterLink>
            <FooterLink>Support</FooterLink>
          </nav>
        </div>
      </div>
    </Container>

    <style jsx>{`
      footer {
         {
          /* background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
          url('/static/footerbg.svg'); */
        }
        @apply bg-cover;
        background-position: center;
      }
    `}</style>
  </footer>
)

export default Footer
