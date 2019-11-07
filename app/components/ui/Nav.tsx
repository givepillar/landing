// and the styles
import '@reach/menu-button/styles.css'
import classnames from 'classnames'
import gql from 'graphql-tag'
import Link from 'next/link'
import React, { useState } from 'react'
import { PrimaryButton, SecondaryButton } from './Button'
import Container from './Container'
import Logo from './Logo'
import { useQuery } from 'react-apollo'
import Dropdown from '../Dropdown'

interface LinkProps {
  to?: string
  active?: boolean
  className?: string
}

const NavLink: React.SFC<LinkProps> = ({
  children,
  to = '/home',
  active = false,
  className = 'mx-3',
}) => (
  <Link href={to}>
    <a
      className={classnames(
        'no-underline text-sm font-medium text-gray-800',
        { 'text-gray-800': active },
        className
      )}
    >
      {children}
    </a>
  </Link>
)

const GET_AUTH_STATE = gql`
  query getAuthState {
    viewer {
      id
      firstName
      lastName
      email
    }
  }
`

const Nav: React.SFC = () => {
  const { data, loading, error } = useQuery(GET_AUTH_STATE)

  const loggedIn = data && !!data.viewer
  const showPrivate = !error && !loading && loggedIn

  return (
    <div>
      <nav className="block w-full">
        <div className="bar h-1 block w-full" />

        <Container>
          <div
            className={
              'flex flex-col items-center' +
              ' sm:flex-row justify-between sm:items-center py-8'
            }
          >
            <section className="mb-6 sm:mb-0 ">
              <Link href="/">
                <a>
                  <Logo />
                </a>
              </Link>
            </section>
            <section className="mx-24 flex-1 hidden md:block"></section>
            <section className="flex items-center">
              {showPrivate ? (
                <>
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/home">Portfolio</NavLink>
                  <Dropdown user={data.viewer} darkText></Dropdown>
                </>
              ) : (
                <>
                  <NavLink to="/login">Log in</NavLink>
                  <SecondaryButton className="ml-2">
                    Get Started
                  </SecondaryButton>
                </>
              )}
            </section>
          </div>
        </Container>

        <style jsx>{`
          .bar {
            background: url('/static/navbg.svg');
            @apply bg-cover;
            background-position: center;
          }
          nav {
            @apply bg-cover;
            background-position: top;
          }
        `}</style>

        <style jsx global>{`
          [data-reach-menu-list] {
            padding: 0;
            @apply rounded-sm shadow-md border-none overflow-hidden mt-2;
            @apply text-gray-900 mx-4;
          }

          [data-reach-menu-item] {
            @apply font-sans font-medium;
            @apply py-2;
          }

          [data-reach-menu-item][data-selected] {
            @apply bg-gray-100 text-gray-900;
          }
        `}</style>
      </nav>
    </div>
  )
}

export default Nav
