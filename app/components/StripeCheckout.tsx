import React, { Component } from 'react'
import { CardElement, injectStripe } from 'react-stripe-elements'
import { PrimaryButton } from './ui/Button'
import TextInput from './ui/form/TextInput'
import { User } from '../types'

interface StripeProps {
  stripe: any
  amount: number
  bundle: string
}

class StripeCheckout extends Component<StripeProps> {
  state = {
    name: '',
    email: '',
  }

  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  async submit() {
    // User clicked submit
    console.log('submit clicked')
    let { token } = await this.props.stripe.createToken({
      name: this.state.name,
    })
    console.log(token)
  }

  render() {
    return (
      <div className="checkout">
        <div className="form-input py-3 mt-4 mb-12">
          <CardElement />
        </div>

        <PrimaryButton onClick={this.submit} className="w-full">
          Start Giving
        </PrimaryButton>
      </div>
    )
  }
}

export default injectStripe(StripeCheckout)
