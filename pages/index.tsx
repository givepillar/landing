import Link from 'next/link'
import React from 'react'
import Base from '../app/components/Base'
import BundleCard from '../app/components/BundleCard'
import LandingForm from '../app/components/LandingForm'
import Footer from '../app/components/ui/Footer'
import Logo from '../app/components/ui/Logo'
import { bundles } from '../app/mock/data'

const Nav = () => (
  <nav className="py-8">
    <div className="flex justify-center items-center">
      {/* <div className="flex-1" /> */}
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      {/* <div className="flex-1 text-right">
        <Link href="/login">
          <a className="text-black font-semibold p-6">
            Explore our Bundles{' '}
            <i className="fas fa-arrow-right text-gray-400 ml-1" />
          </a>
        </Link>
      </div> */}
    </div>
  </nav>
)

const Hero = () => (
  <div className="">
    <div className="container px-6 pb-6">
      <Nav />
      <LandingForm></LandingForm>
    </div>
    <style jsx>
      {`
        .hero {
          background-image: url('/static/navbg.svg');
          background-size: cover;
          background-position: center;
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
  <Base>
    <div className="w-full h-full bg-gray-50">
      <div className="h-2 bar block w-full"></div>
      <Hero />

      <div className="flex w-full flex-col items-center justify-center pb-12">
        <p className="text-gray-400 text-lg font-medium">
          Or explore our bundles
        </p>
        <i className="fas fa-chevron-down text-gray-300 mt-1 text-xl"></i>
      </div>

      <div className="container px-6 flex flex-wrap justify-center">
        {Object.keys(bundles).map(key => (
          <div key={key} className="mb-6 max-w-xl flex-grow p-6">
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

export default Home
