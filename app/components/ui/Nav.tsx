import React, { useState } from 'react'
import Link from 'next/link'
import classnames from 'classnames'
import Logo from './Logo'
import Container from './Container'

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

const Nav: React.SFC = () => (
  <nav className="block bg-white w-full">
    <div className="bar h-2 block  w-full" />
    <Container>
      <div className="flex flex-col items-center sm:flex-row justify-between sm:items-center py-8">
        <section className="mb-4 sm:mb-0 ">
          <Link href="/home">
            <a>
              <Logo />
            </a>
          </Link>
        </section>
        <section className="mx-24 flex-1 hidden md:block">
          <SearchBar />
        </section>
        <section className="-mx-3 mr-2">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/explore">Explore</NavLink>
          {/* <NavLink to="/tax">Tax Forms</NavLink> */}

          <NavLink className="font-semibold ml-2 ">Oscar</NavLink>
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
         {
          /* background: url('/static/navbg.svg'); */
        }
         {
          /* background: radial-gradient(
            100% 400% at 60% 10%,
            RGBA(236, 49, 177, 1),
            RGBA(235, 54, 210, 0) 40%
          ),
          linear-gradient(0.25turn, #e9341b, #ead024); */
        }
        @apply bg-cover;
        background-position: top;
      }
    `}</style>
  </nav>
)

export default Nav
