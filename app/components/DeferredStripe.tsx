import React from 'react'
import { Elements, StripeProvider } from 'react-stripe-elements'
import StripeCheckout from './StripeCheckout'

export default ({ amount, bundle }) => {
  // @ts-ignore
  if (process.browser) {
    return (
      <StripeProvider apiKey="pk_test_Aa9HCt6t96ix37gxvpeqOKYL">
        <Elements>
          <StripeCheckout amount={amount} bundle={bundle}></StripeCheckout>
        </Elements>
      </StripeProvider>
    )
  } else {
    return <div />
  }
}
