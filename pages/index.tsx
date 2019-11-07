import Link from 'next/link'
import React from 'react'
import Base from '../app/components/Base'
import BundleCard from '../app/components/BundleCard'
import LandingForm from '../app/components/LandingForm'
import Footer from '../app/components/ui/Footer'
import Logo, { LogoLight } from '../app/components/ui/Logo'
import { bundles, Categories } from '../app/mock/data'
import Highlight from '../app/components/ui/Highlight'
import CategoryTag from '../app/components/ui/CategoryTag'
import { PrimaryButton } from '../app/components/ui/Button'
import { useQuery } from 'react-apollo'
import gql from 'graphql-tag'
import classnames from 'classnames'
import Dropdown from '../app/components/Dropdown'

const NavLink = ({ children, to = '/home', className = 'mx-3' }) => (
  <Link href={to}>
    <a
      className={classnames(
        'no-underline text-sm font-semibold text-white',
        className
      )}
    >
      {children}
    </a>
  </Link>
)

const Nav = ({ loggedIn, viewer }) => (
  <nav className="py-8">
    <div className="flex pt-2 justify-start items-center">
      <Link href="/">
        <a>
          <LogoLight></LogoLight>
        </a>
      </Link>
      <div className="flex-1 text-right">
        {loggedIn ? (
          <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/home">Portfolio</NavLink>
            <Dropdown user={viewer}></Dropdown>
          </div>
        ) : (
          <Link href="/login">
            <a className="text-white font-semibold p-6">
              Login <i className="fas fa-arrow-right text-gray-200 ml-1" />
            </a>
          </Link>
        )}
      </div>
    </div>
  </nav>
)

const Hero = ({ loggedIn, viewer }) => (
  <div className="hero">
    <div className="container px-6 pb-16">
      <Nav loggedIn={loggedIn} viewer={viewer} />
      <div className="max-w-lg mt-10">
        <h1 className="font-display leading-snug font-normal text-white text-5xl">
          Power-up your giving with Pillar
        </h1>
        <p className="text-highlight text-xl mt-4">
          Give to curated bundles of nonprofits in the areas that matter most
          with one monthly subscription.
        </p>
        {/* <button className="bg-clay rounded px-4 py-2 text-lg border-accent mt-8 font-medium text-white justify-center flex items-center">
          Start Giving{' '}
          <i className="fas fa-arrow-right text-highlight ml-2"></i>
        </button> */}
      </div>
    </div>

    <div className="flex w-full flex-col items-center justify-center pb-12">
      <p className="text-highlight text-lg font-medium">Explore our causes</p>
      <i className="fas fa-chevron-down text-highlight-light mt-1 text-xl"></i>
    </div>

    <style jsx>
      {`
        .hero {
          background-image: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.45),
              rgba(0, 0, 0, 0)
            ),
            url('/static/landing/mountain.jpg');
          background-size: cover;
          background-position: center;
          border: none;
          padding: 0;
        }
        .email-input::placeholder {
          color: theme(colors.gray.600);
          opacity: 1;
        }

        .bg-clay {
          background: HSL(0, 50%, 50%);
        }

        .border-accent {
          border-color: HSL(0, 10%, 60%);
        }

        .text-highlight {
          color: HSL(0, 30%, 85%);
        }

        .text-highlight-light {
          color: HSL(0, 10%, 60%);
        }
      `}
    </style>
  </div>
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

const Home = () => {
  const { data, loading, error } = useQuery(GET_AUTH_STATE)

  const loggedIn = data && !!data.viewer
  const showPrivate = !error && !loading && loggedIn

  return (
    <Base>
      <div className="w-full h-full">
        {/* <div className="h-2 bar block w-full"></div> */}
        <Hero loggedIn={loggedIn} viewer={data ? data.viewer : null} />

        <div className="container px-6 mt-16 flex flex-col md:flex-row items-center md:items-stretch">
          {Object.keys(bundles).map(key => (
            <div
              key={key}
              className="mb-6 max-w-xl flex items-stretch flex-grow p-6"
            >
              <BundleCard bundle={bundles[key]} large></BundleCard>
            </div>
          ))}
        </div>

        <Footer />
      </div>
      <style jsx>{`
        .bar {
          background: url('/static/navbg.svg');
          @apply bg-cover;
          background-position: center;
        }
      `}</style>
    </Base>
  )
}

export default Home
