import React, { Component, useState } from 'react'
import Layout from '../../../app/components/Layout'

import { NextPageContext, NextComponentType } from 'next'
import { Nonprofit, Bundle } from '../../../app/types'
import { nonprofits, bundles } from '../../../app/mock/data'
import NonprofitCard from '../../../app/components/NonprofitCard'
import { ToggleCheck } from '../../quiz/overview'
import { currency, unCurrency } from '../../../app/lib/currency'
import TextInput from '../../../app/components/ui/form/TextInput'
import BundleCard from '../../../app/components/BundleCard'
import { PrimaryButton } from '../../../app/components/ui/Button'

const tiers = [
  {
    name: '☕️ A Coffee a Week',
    description: 'The average amount people in your area give',
    price: 1600,
    suggested: true,
  },
  {
    name: '☕️☕️ Two Coffees a Week',
    description: 'Who just drinks one coffee?',
    price: 3200,
  },
  {
    name: '📺 Just Netflix',
    description: 'A little bit goes a longway',
    price: 800,
    impact: 'Save a tree or two',
  },
]

interface TierProps {
  tier: any
}

const Tier: React.SFC<TierProps> = ({ tier, children }) => (
  <button
    className={
      'tier block text-left bg-white shadow rounded p-4 ' +
      'w-full mb-4 focus:outline-none'
    }
  >
    <div className="flex items-center">
      <div className="w-8 mr-4 flex justify-center">
        <ToggleCheck toggled={false} />
      </div>
      <div className="flex-1">
        <h2 className="font-bold text-lg">
          {tier.name}{' '}
          {tier.suggested && (
            <span className="text-red-600 ml-4 text-sm font-medium">
              Most people choose this
            </span>
          )}
        </h2>
        <p>{tier.description}</p>
      </div>
      <div className="text-green-600 font-bold">
        <span className="text-lg">${currency(tier.price)}</span> / month
      </div>
    </div>

    {children && (
      <div className="flex">
        <div className="w-8 mr-4" />
        <div className="flex-1">{children}</div>
      </div>
    )}
    <style jsx>{`
      .tier {
        transition: all 0.15s;
      }

      .tier:hover {
        transform: scale(1.01);
        @apply shadow-lg;
      }
    `}</style>
  </button>
)

const PayWhatYouWant = () => {
  const [amount, setAmount] = useState(500)
  const [typedAmount, setTypedAmount] = useState('5.00')

  const handleChange = v => {
    setTypedAmount(v)
    setAmount(unCurrency(v))
  }

  return (
    <Tier
      tier={{
        name: 'Pay what you want',
        description: 'Give what you can',
        price: amount,
      }}
    >
      <div className="pt-4 mt-4 border-t border-gray-100 flex">
        <TextInput
          className="flex-1"
          icon={<i className="fas fa-dollar-sign text-gray-400 " />}
          value={typedAmount}
          onChange={handleChange}
        />
      </div>
    </Tier>
  )
}

interface GiveProps extends NextPageContext {
  bundle: Bundle
  amount?: number
}

class Give extends Component<GiveProps> {
  static async getInitialProps(ctx: NextPageContext) {
    const { slug } = ctx.query
    const bundle: Bundle = Object.values(bundles).find(b => b.slug === slug)

    return { bundle }
  }

  render() {
    const { bundle } = this.props

    return (
      <Layout title="Support">
        <div className="flex">
          <div className="w-3/4 pr-16">
            {tiers.map(t => (
              <Tier tier={t} key={t.name} />
            ))}
            <PayWhatYouWant />
          </div>
          <div className="w-1/4">
            <BundleCard bundle={bundle} />
          </div>
        </div>
      </Layout>
    )
  }
}

export default Give
