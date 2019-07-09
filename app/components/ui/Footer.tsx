import React from 'react'
import { LogoMasked as Logo } from './Logo'

const FooterLink: React.SFC = ({ children }) => (
  <a href="#" className="no-underline text-blue-800 font-medium text-sm ml-4">
    {children}
  </a>
)

const Footer = () => (
  <footer className="bg-white py-8 bg-gray-50">
    <div className="container px-4 text-gray-600 flex items-center justify-between">
      <div className="w-24">
        <Logo />
      </div>
      <nav>
        <FooterLink>About</FooterLink>
        <FooterLink>Terms</FooterLink>
        <FooterLink>Privacy</FooterLink>
        <FooterLink>Support</FooterLink>
      </nav>
    </div>

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
