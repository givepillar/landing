import React from 'react'
import Tag from './ui/Tag'
import Card from './ui/Card'
import { currency } from '../lib/currency'

interface PortfolioProps {
  data: Recipient[]
}

export interface Recipient {
  name: string
  type: string
  amount: number
  tags: string[]
}

interface RowProps {
  data: Recipient
}

const Row: React.FC<RowProps> = ({ data }) => (
  <a href="#" className="row py-4 flex items-center text-gray-900 no-underline">
    <div className="w-12 mr-3">
      <img
        className="w-full rounded-full shadow"
        src={`https://placeimg.com/128/128/nature?${data.name}`}
        alt=""
      />
    </div>
    <div className="flex-1">
      <p className="">{data.name}</p>
      <div>
        {data.tags.map(t => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </div>
    <div>
      <p className="text-xl font-light">{currency(data.amount)}</p>
    </div>
  </a>
)

const Portfolio: React.FC<PortfolioProps> = ({ data }) => {
  return (
    <Card
      header={
        <h2 className="font-medium  text-base font-sans">Monthly Portolio</h2>
      }>
      {data.map(d => (
        <Row key={d.name} data={d} />
      ))}
      <style jsx global>{`
        .row:nth-child(odd) {
          @apply bg-gray-100;
        }
      `}</style>
    </Card>
  )
}

export default Portfolio
