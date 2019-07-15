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
        {/* <div className="flex items-center mb-1">
          <p className="text-xs text-gray-500 font-bold uppercase tracking-wide mr-4">
            Bundle
          </p>
          <CategoryTag category={item.recipient.primaryCategory} />
        </div> */}
        <p className="font-bold">
          <Highlight color={item.recipient.primaryCategory.colors.light}>
            {item.recipient.name}
          </Highlight>
        </p>
        <p className="text-gray-600">{item.recipient.primaryCategory.name}</p>
        {/* <p className="text-gray-400 text-sm font-semibold mt-2">
          <i className="fas fa-building text-gray-200 mr-1" /> 11 Nonprofits
        </p> */}
      </div>
      <div className="flex items-start justify-end">
        <i
          className="fas text-sm fa-dollar-sign block text-gray-700 mr-1"
          style={{ marginTop: '8px' }}
        />
        <p className="text-xl font-bold m-0 p-0 text-gray-700">
          {currency(item.amount)}
        </p>
      </div>
    </a>
  </Link>
)

const Portfolio: React.FC<PortfolioProps> = ({ items }) => {
  return (
    <Card className="block w-full border border-gray-100">
      {items.map((d, i) => (
        <Row shaded={i % 2 == 0} key={d.recipient.name} item={d} />
      ))}
    </Card>
  )
}

export default Portfolio
