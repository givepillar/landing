import Link from 'next/link'
import React from 'react'
import Layout from '../app/components/Layout'
import Portfolio from '../app/components/Portfolio'
import PortfolioChart from '../app/components/PortfolioChart'
import SuggestionCarousel from '../app/components/SuggestionCarousel'
import PrimaryButton, { SecondaryButton } from '../app/components/ui/Button'
import Container from '../app/components/ui/Container'
import Nav from '../app/components/ui/Nav'
import SectionTitle from '../app/components/ui/SectionTitle'
import Blank from '../app/img/blank.svg'
import { portfolio, bundles } from '../app/mock/data'
import FeaturedBundle from '../app/components/FeaturedBundle'

const EmptyState = () => (
  <div className="w-full mx-auto text-center mt-6">
    <div className="flex justify-center items-center w-full">
      <div className="h-64  sm:w-64">
        <Blank />
      </div>
      <div className="sm:text-left sm:ml-16">
        <h2 className="text-gray-800  leading-tight sm:text-4xl font-medium mt-8 mb-2">
          You don't have any monthly giving yet
        </h2>
        <p className="text-gray-600 mb-4 max-w-md sm:text-lg">
          The most powerful way to give is a little at a time, over time. Take
          our quiz to find the bundles and charities that best fit you.
        </p>
      </div>
    </div>
    <div
      className="flex justify-center relative"
      style={{ transform: 'translateY(50%)' }}
    >
      <PrimaryButton size="lg" className="w-full max-w-xs">
        Take the Quiz
      </PrimaryButton>
      <Link href="/explore">
        <a
          className="absolute bottom-0 flex items-center pt-4 text-gray-500 font-medium"
          style={{ transform: 'translateY(100%)' }}
        >
          or Explore all Bundles and Nonprofits
          <i className="fas fa-chevron-right ml-2 text-gray-200" />
        </a>
      </Link>
    </div>
  </div>
)

const PortfolioSection = () => (
  <div className="w-full mx-auto">
    <Portfolio items={portfolio} />
  </div>
)

const Home = () => (
  <Layout nav={true} title="Pillar | Portfolio" padContent={false}>
    <Container className="">
      <Portfolio items={portfolio}></Portfolio>
    </Container>
  </Layout>
)

export default Home
