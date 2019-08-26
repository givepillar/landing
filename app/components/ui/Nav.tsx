import { useApolloClient, useQuery } from '@apollo/react-hooks'
// and the styles
import '@reach/menu-button/styles.css'
import classnames from 'classnames'
import gql from 'graphql-tag'
import Link from 'next/link'
import React, { useState } from 'react'
import { PrimaryButton } from './Button'
import Container from './Container'
import Logo from './Logo'

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
        'no-underline text-sm font-medium text-blue-800',
        { 'text-gray-800': active },
        className
      )}
    >
      {children}
    </a>
  </Link>
)

const Row: React.SFC = ({ children }) => (
  <a
    href="#"
    className="block no-underline text-gray-900 w-full px-4 py-2 hover:bg-gray-50"
  >
    {children}
  </a>
)

const SearchBar: React.SFC = () => {
  const [showResults, setShowResults] = useState(true)
  const [query, setQuery] = useState('')

  return (
    <div className="relative w-full">
      <label className="flex-1 bg-white flex items-baseline h-full py-3 cursor-text shadow-float px-4 rounded">
        <i className="fas fa-search text-gray-300 mr-3" />
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="focus:outline-none w-full"
          placeholder="Search charities, causes, and impacts"
        />
      </label>
      {query.length > 0 && (
        <div className="absolute bg-white w-full mt-4 border border-gray-100 rounded shadow-2xl z-10">
          <Row>
            <p className="text-xs uppercase tracking-wide text-gray-500">
              Category
            </p>
            <p className="text-sm">Environment &amp; Climate Change</p>
          </Row>
          <Row>
            <div>
              <img
                src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/14639674_10154228560249545_812798512151679547_n.png?_nc_cat=106&_nc_oc=AQkZH0bafySC4x-CY35KUIW82WWZ3EL-0XM38uSKUhIYLfLyoXP7u97oJGlTXULl1GY&_nc_ht=scontent-dfw5-1.xx&oh=21e206eba711dd1d465c832ca0ae5cad&oe=5D8C33F5"
                alt=""
                className="block w-10 rounded-full shadow"
              />
            </div>
          </Row>
        </div>
      )}
    </div>
  )
}

const GET_AUTH_STATE = gql`
  query getAuthState {
    viewer {
      id
      firstName
    }
  }
`

const Nav: React.SFC = () => {
  const { data, loading, error } = useQuery(GET_AUTH_STATE)
  const client = useApolloClient()

  if (loading) return <div>Loading...</div>
  if (error) return <div>error</div>

  const { viewer } = data
  const loggedIn = !!viewer

  return (
    <div>
      <nav className="block w-full">
        <div className="bar h-2 block w-full" />

        <Container>
          <div className="flex flex-col items-center sm:flex-row justify-between sm:items-center py-8">
            <section className="mb-6 sm:mb-0 ">
              <Link href="/home">
                <a>
                  <Logo />
                </a>
              </Link>
            </section>
            <section className="mx-24 flex-1 hidden md:block">
              <SearchBar />
            </section>
            <section className="-mx-3 mr-2 flex items-center">
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/explore">Explore</NavLink>
              {/* <NavLink to="/tax">Tax Forms</NavLink> */}

              {!loggedIn && (
                <Link href="/quiz/overview">
                  <a>
                    <PrimaryButton size="sm" className="inline-flex ml-2">
                      Get Started
                    </PrimaryButton>
                  </a>
                </Link>
              )}

              <div className="ml-2">
                {loggedIn && (
                  <Link href="/settings">
                    <a className="flex items-center">
                      <div className="bg-gray-100 h-8 w-8 flex items-center justify-center rounded-full">
                        <i className="fas fa-user text-xs" />
                      </div>
                    </a>
                  </Link>
                )}
              </div>

              {/* <NavLink className="font-semibold ml-2" to="/">
            Oscar
          </NavLink> */}
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
