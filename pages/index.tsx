import React from 'react'
import Head from '../app/components/Head'
import classnames from 'classnames'

const NavLink = ({ children, href = '/', bold = false }) => (
  <li className={classnames('ml-4', { 'font-medium': bold })}>
    <a href={href}>{children}</a>
  </li>
)

const Nav = () => (
  <nav className="py-3">
    <div className="flex justify-between items-baseline">
      <p className="logo font-display text-5xl">Pillar</p>

      <ul className="flex">
        <NavLink href="#">For Nonprofits</NavLink>
        <NavLink href="#">Sign in</NavLink>
        <NavLink href="#" bold>
          Get early access
        </NavLink>
      </ul>
    </div>

    <style jsx>{`
      .logo {
        opacity: 0.9;
      }
    `}</style>
  </nav>
)

const Hero = () => (
  <div className="hero">
    <div className="container px-6 pb-16">
      <Nav />
      <div className="max-w-4xl mx-auto mt-12">
        <h1 className="text-6xl font-black">Impact. Easy.</h1>
        <p className="font-light text-4xl leading-normal max-w-2xl antialiased">
          Pillar is an all new way to support the causes that matter to you.
        </p>

        <div className="rounded overflow-hidden my-12 max-w-xl flex shadow-float">
          <input
            type="text"
            placeholder="Your email"
            className="flex-1 px-4 text-lg email-input"
          />
          <button className="bg-teal-200 text-teal-800 font-bold px-8 py-3 text-lg">
            Get early access
          </button>
        </div>
      </div>
    </div>
    <style jsx>
      {`
        .hero {
          background-image: linear-gradient(
              rgba(255, 255, 255, 0.6),
              rgba(255, 255, 255, 1) 100%
            ),
            url('/static/miniblur2.gif');
          background-size: cover;
          border: none;
          padding: 0;
        }
        .email-input::placeholder {
          color: theme(colors.gray.600);
          opacity: 1;
        }
      `}
    </style>
  </div>
)

const Home = () => (
  <div className="w-full">
    <Head />
    <Hero />
  </div>
)

export default Home
