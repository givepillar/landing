import gql from 'graphql-tag'
import { NextPageContext } from 'next'
import React, { Component, useState } from 'react'
import { useMutation } from 'react-apollo'
import BundleCard from '../../../app/components/BundleCard'
import DeferredStripe from '../../../app/components/DeferredStripe'
import Layout from '../../../app/components/Layout'
import TextInput from '../../../app/components/ui/form/TextInput'
import { currency, unCurrency } from '../../../app/lib/currency'
import { bundles } from '../../../app/mock/data'
import { Bundle } from '../../../app/types'
import { ToggleCheck } from '../../quiz/overview'
import { PrimaryButton } from '../../../app/components/ui/Button'
import { Container } from 'next/app'

const tiers = [
  {
    name: '📺 A Month of Netflix',
    description: '',
    price: 1500,
    suggested: true,
  },
  {
    name: '🎓 Student',
    price: 500,
  },
  {
    name: '🔥 Donor',
    price: 5000,
  },
]

interface TierProps {
  tier: any
  onClick: any
}

const Tier: React.SFC<TierProps> = ({ tier, children, onClick }) => (
  <button
    className={
      'tier block text-left bg-white shadow rounded p-4 ' +
      'w-full mb-4 focus:outline-none'
    }
    onClick={onClick}
  >
    <div className="flex items-center">
      <div className="w-8 mr-4 flex justify-center">
        <ToggleCheck toggled={false} />
      </div>
      <div className="flex-1">
        <h2 className="font-bold text-lg">{tier.name} </h2>
        {tier.suggested && (
          <p className="text-red-600 text-sm font-medium">
            Most people choose this
          </p>
        )}
      </div>
      <div className="text-green-600 font-bold">
        <span className="text-lg">${currency(tier.price)}</span>
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

const PayWhatYouWant = ({ next }) => {
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
      onClick={() => {}}
    >
      <div className="pt-4 mt-4 border-t border-gray-100 flex">
        <TextInput
          className="flex-1"
          icon={<i className="fas fa-dollar-sign text-gray-400 " />}
          value={typedAmount}
          onChange={handleChange}
        />

        <PrimaryButton className="ml-2" onClick={() => next(amount)}>
          Give <i className="fas fa-arrow-right"></i>
        </PrimaryButton>
      </div>
    </Tier>
  )
}

const PriceSelectionStep = ({ next }) => (
  <div>
    {tiers.map(t => (
      <Tier tier={t} key={t.name} onClick={() => next(t.price)} />
    ))}
    <PayWhatYouWant next={next} />
  </div>
)

const CheckoutStep = ({ back, amount, bundle }) => {
  return (
    <div className="p-6 bg-white rounded shadow-md ">
      <button onClick={back} className="mb-4">
        <i className="fas fa-chevron-left"></i> Select Amount
      </button>
      <div className="font-bold text-xl mb-6">Give ${currency(amount)} </div>
      <DeferredStripe amount={amount} bundle={bundle}></DeferredStripe>
    </div>
  )
}

const GET_HOSTED_DONATION_ID = gql`
  mutation getHostedId(
    $bundleSlug: String!
    $bundleName: String!
    $bundlePhoto: String!
    $bundleDescription: String!
    $amount: Int!
    $origin: String
  ) {
    hostedDonation(
      bundleName: $bundleName
      bundleDescription: $bundleDescription
      bundleSlug: $bundleSlug
      bundlePhoto: $bundlePhoto
      amount: $amount
      origin: $origin
    ) {
      sessionId
    }
  }
`

const CheckoutFormWrapper = ({ bundle }) => {
  const [step, setStep] = useState(0)
  const [amount, setAmount] = useState(0)

  const [getHostedId, { data, loading, error }] = useMutation(
    GET_HOSTED_DONATION_ID
  )

  const triggerCheckout = amt =>
    getHostedId({
      variables: {
        bundleSlug: bundle.slug,
        bundleName: bundle.name,
        bundlePhoto: bundle.imageUrl,
        bundleDescription: bundle.description,
        amount: amt,
        origin: window && window.location.origin,
      },
    })

  if (data && data.hostedDonation) {
    const stripe = Stripe(process.env.STRIPE_KEY)

    stripe
      .redirectToCheckout({
        // Make the id field from the Checkout Session creation API response
        // available to this file, so you can provide it as parameter here
        // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
        sessionId: data.hostedDonation.sessionId,
      })
      .then(result => {
        console.log(result)
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `result.error.message`.
      })
  }

  return (
    <>
      {step == 0 ? (
        <PriceSelectionStep next={triggerCheckout} />
      ) : (
        <CheckoutStep bundle={bundle} back={() => setStep(0)} amount={amount} />
      )}
    </>
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
        <Container>
          <div>
            <div className="flex flex-wrap">
              <div className="lg:w-3/4 w-full lg:pr-16 order-3 lg:order-1">
                <CheckoutFormWrapper bundle={bundle} />
              </div>
              <div className="lg:w-1/4 w-full lg:order-2 mb-16 lg:mb-0">
                <BundleCard bundle={bundle} />
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    )
  }
}

export default Give
