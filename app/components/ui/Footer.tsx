import React from 'react'

const FooterLink: React.SFC = ({ children }) => (
  <a href="#" className="no-underline text-gray-500 text-sm ml-4">
    {children}
  </a>
)

const Footer = () => (
  <footer>
    <div className="container px-4 py-4 text-gray-600 flex justify-between">
      <p className="text-gray-600 bg-gray-200 font-display font-medium py-1 px-2">
        Koala
      </p>

      <nav>
        <FooterLink>About</FooterLink>
        <FooterLink>Terms</FooterLink>
        <FooterLink>Privacy</FooterLink>
        <FooterLink>Support</FooterLink>
      </nav>
    </div>
  </footer>
)

export default Footer
