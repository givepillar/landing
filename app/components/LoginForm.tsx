import { useApolloClient, useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import Link from 'next/link'
import React, { useState } from 'react'
import { signIn } from '../lib/auth'
import { FBSigninButton } from './FBSigninButton'
import PrimaryButton from './ui/Button'
import TextInput from './ui/form/TextInput'

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(credentials: { email: $email, password: $password }) {
      accessToken
    }
  }
`

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const client = useApolloClient()

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    onCompleted: data => {
      console.log(data)
      signIn({ token: data.loginUser.accessToken, client })
      setEmail('')
      setPassword('')
    },
    onError: console.error,
  })

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        e.stopPropagation()

        loginUser({
          variables: {
            email,
            password,
          },
        })
      }}
    >
      <div className="max-w-sm w-full block ">
        <FBSigninButton />
        <div className="w-full text-center text-xs uppercase tracking-wide text-gray-500 font-bold my-6">
          <p>Or</p>
        </div>
        <TextInput
          title="Email"
          type="email"
          name="email"
          className="mb-6"
          value={email}
          onChange={setEmail}
        />
        <div className="mb-12">
          <TextInput
            title="Password"
            name="password"
            type="password"
            value={password}
            onChange={setPassword}
          />
          <Link href="/login">
            <a className="link text-sm inline-block mt-2">
              Forgot your password?
            </a>
          </Link>
        </div>
        <PrimaryButton loading={loading} type="submit" className="w-full">
          Sign in
        </PrimaryButton>
        <p className="mt-4 w-full text-center">
          No account?{' '}
          <Link href="/signup">
            <a className="link">Sign up</a>
          </Link>
        </p>
      </div>
    </form>
  )
}

export default LoginForm
