import React, { useState } from 'react'
import Link from 'next/link'
import classnames from 'classnames'
import Logo from './Logo'

interface LinkProps {
  to?: string
  active?: boolean
  className?: string
}

const NavLink: React.SFC<LinkProps> = ({
  children,
  to = '/',
  active = false,
  className = 'mx-3',
}) => (
  <Link href={to}>
    <a
      className={classnames(
        'no-underline text-gray-600 hover:text-gray-800',
        { 'text-gray-800': active },
        className
      )}>
      {children}
    </a>
  </Link>
)

const Row: React.SFC = ({ children }) => (
  <a
    href="#"
    className="block no-underline text-gray-900 w-full border-b border-gray-200 px-4 py-2 hover:bg-gray-100">
    {children}
  </a>
)

const SearchBar: React.SFC = () => {
  const [showResults, setShowResults] = useState(true)
  const [query, setQuery] = useState('')

  return (
    <div className="relative w-full">
      <label className="flex-1 flex items-baseline h-full py-3 cursor-text">
        <i className="fas fa-search text-gray-400 mr-3" />
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="focus:outline-none w-full"
          placeholder="Search charities, causes, and impacts"
        />
      </label>
      {query.length > 0 && (
        <div className="absolute bg-white w-full mt-2 rounded-b shadow-2xl z-10">
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
  <nav className="flex justify-between items-baseline py-6">
    <section>
      <Logo />
    </section>
    <section className="mx-10 flex-1 hidden md:block">
      <SearchBar />
    </section>
    <section className="-mx-3 mr-2">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/explore">Explore</NavLink>
      {/* <NavLink to="/tax">Tax Forms</NavLink> */}
      <NavLink className="font-semibold ml-2 ">
        Oscar
        <i className="fas fa-chevron-down text-gray-400 text-xs ml-2" />
      </NavLink>
    </section>
  </nav>
)

export default Nav
