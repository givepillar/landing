import React from 'react'
import { currency } from '../lib/currency'
import { PortfolioItem } from '../types'
import Card from './ui/Card'
import CategoryTag from './ui/CategoryTag'
import cn from 'classnames'
import Link from 'next/link'
import Highlight from './ui/Highlight'

interface PortfolioProps {
  items: PortfolioItem[]
}

interface RowProps {
  item: PortfolioItem
  shaded: boolean
}

const Row: React.FC<RowProps> = ({ item, shaded = false }) => (
  <Link href="/to/[slug]" as={`/to/${item.recipient.slug}`}>
    <a
      className={cn(
        'row py-5 px-3 flex items-center text-gray-900 no-underline'
      )}
    >
      <div className="flex-1">
        <p className="font-extrabold text-xl">{item.recipient.name}</p>
        <div className="text-blue-600 mt-1">
          <button className="font-medium mr-4">
            <i className="fas fa-edit mr-2 text-blue-300"></i>Edit Amount
          </button>
          <button className="font-medium">
            <i className="fas fa-trash mr-2 text-blue-300"></i>Remove
          </button>
        </div>
      </div>
      <div className="flex items-start justify-end">
        <i
          className="fas text-sm fa-dollar-sign block text-gray-700 mr-1"
          style={{ marginTop: '8px' }}
        />
        <p className="text-xl font-bold m-0 p-0 text-gray-700">
          {currency(item.amount)}{' '}
          <span className="uppercase text-base text-gray-400"> /month</span>
        </p>
      </div>
    </a>
  </Link>
)

const Portfolio: React.FC<PortfolioProps> = ({ items }) => {
  return (
    <div>
      <h1 className="text-2xl font-sans font-extrabold mb-1">Your Portfolio</h1>
      <p className="text-lg text-gray-700 leading-normal mb-4 max-w-lg">
        These are the bundles you are giving to monthly. All donations are
        charged at the first of every month.
      </p>
      <Card className="block w-full border-gray-100">
        {items.map((d, i) => (
          <Row shaded={i % 2 == 0} key={d.recipient.name} item={d} />
        ))}
      </Card>
    </div>
  )
}

export default Portfolio
