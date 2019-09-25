import React, { Component } from 'react'
import { CardElement, injectStripe } from 'react-stripe-elements'
import { PrimaryButton } from './ui/Button'
import TextInput from './ui/form/TextInput'

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
        <TextInput
          title="Name"
          className="mb-6"
          onChange={name => this.setState({ name })}
        ></TextInput>
        <TextInput
          title="Email"
          type="email"
          className="mb-6"
          onChange={email => this.setState({ email })}
        ></TextInput>

        <div className="form-input py-3 mt-4 mb-12">
          <CardElement />
        </div>

        <PrimaryButton onClick={this.submit} className="w-full">
          Give
        </PrimaryButton>
      </div>
    )
  }
}

export default injectStripe(StripeCheckout)
