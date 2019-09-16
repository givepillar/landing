import React, { useState } from 'react'
import PrimaryButton from './ui/Button'
import TextInput from './ui/form/TextInput'
import gql from 'graphql-tag'
import { useMutation } from 'react-apollo'

const SIGNUP_USER = gql`
  mutation SignupUser($user: SignupInput!, $credentials: Credentials!) {
    signupUser(newUser: $user, credentials: $credentials) {
      user {
        id
      }
      code
      message
      success
    }
  }
`

const SignupForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [signupUser, { loading }] = useMutation(SIGNUP_USER, {
    onCompleted: console.log,
    onError: console.error,
  })

  return (
    <form>
      <div className="max-w-sm w-full block">
        <TextInput
          title="Email"
          value={email}
          onChange={setEmail}
          type="email"
          name="email"
          className="mb-6"
        />
        <div className="mb-12">
          <TextInput
            title="Password"
            value={password}
            onChange={setPassword}
            name="password"
            type="password"
          />
        </div>
        <PrimaryButton className="w-full">Sign up</PrimaryButton>
      </div>
    </form>
  )
}

export default SignupForm
