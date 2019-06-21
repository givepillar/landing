import React from 'react'
import Head from '../app/components/Head'
import PortfolioChart from '../app/components/PortfolioChart'
import Layout from '../app/components/Layout'
import Portfolio, { Recipient } from '../app/components/Portfolio'
import Card from '../app/components/ui/Card'
import OrgCard from '../app/components/ui/OrgCard'
import { Organization } from '../app/types'

const portfolio: Recipient[] = [
  {
    name: 'Renewable Energy',
    type: 'Fund',
    amount: 625,
    tags: ['Environment', 'Renewable Energy', 'Climate Change'],
  },
  {
    name: 'Reproductive Rights',
    type: 'Fund',
    amount: 435,
    tags: ["Women's Rights", 'Reproductive Rights', 'Social Justice'],
  },
  {
    name: 'The Sierra Club',
    type: 'Charity',
    amount: 500,
    tags: ['Environment', 'Preservation', 'Ecology'],
  },
  {
    name: 'Unicef',
    type: 'Charity',
    amount: 400,
    tags: ['Children', 'Poverty', 'Disease'],
  },
]

const orgs: Organization[] = [
  {
    name: 'The Against Malaria Foundation',
    color: '#F7C948',
    description:
      'Providing life-saving mosquito nets to vulnerable communities',
    primaryCategory: 'Health & Wellness',
    tags: ['Disease', 'Foreign Aid'],
    logoUrl:
      'https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Against_Malaria_Foundation.svg/843px-Against_Malaria_Foundation.svg.png',
  },
  {
    name: 'Unicef',
    color: '#38BEC9',
    description:
      'Providing emergency food and healthcare to children and mothers',
    primaryCategory: 'Children',
    tags: ['Health & Wellness'],
    logoUrl:
      'https://yt3.ggpht.com/a/AGF-l7_iByGOtzloxqaXAGPoLI4TTkoZY4UjlisrRA=s900-mo-c-c0xffffffff-rj-k-no',
  },
  {
    name: 'The Sierra Club',
    color: '#48BB78',
    description: 'Preserving the ecology and environment of America',
    primaryCategory: 'Environment',
    tags: ['Ecological Preservation'],
    logoUrl:
      'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/14639674_10154228560249545_812798512151679547_n.png?_nc_cat=106&_nc_oc=AQkZH0bafySC4x-CY35KUIW82WWZ3EL-0XM38uSKUhIYLfLyoXP7u97oJGlTXULl1GY&_nc_ht=scontent-dfw5-1.xx&oh=21e206eba711dd1d465c832ca0ae5cad&oe=5D8C33F5',
  },
]

const Home = () => (
  <Layout title="Home">
    {/* <p className="text-2xl font-display font-light">
      $25.50 <span className="text-xl font-light">per month</span>
    </p> */}
    <div className="flex">
      <div className="w-1/4">
        <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
          Your Breakdown
        </p>
        <Card shadow>
          <div className="relative">
            <p className="text-2xl text-gray-700 mb-2 font-semibold border-b pb-2 border-gray-200">
              $12.50{' '}
              <span className="font-medium text-sm text-gray-500">/month</span>
            </p>

            <div className="chart mx-auto ">
              <PortfolioChart />
            </div>
          </div>
        </Card>
      </div>
      <div className="flex-1 flex flex-col ml-4 ">
        <div className="flex justify-between">
          <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
            Based on your interests
          </p>
          <a href="#" className="link text-xs">
            See more
          </a>
        </div>
        <div className="flex -mx-4">
          {orgs.map(org => (
            <div className="mx-4 w-1/3">
              <OrgCard org={org} />
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="sm:flex mt-10">
      <section className="flex-1">
        <Portfolio data={portfolio} />
      </section>
      {/* <section className="pl-32" /> */}

      {/* <section className="sm:w-1/2 ">
        <h1 className="mt-4 mb-2">History</h1>
      </section> */}
    </div>

    <style jsx>{`
      .chart {
        max-width: 250px;
      }
    `}</style>
  </Layout>
)

export default Home
