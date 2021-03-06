import React from 'react'
import gql from 'graphql-tag'
import { useMutation } from 'react-apollo'
import redirect from '../lib/redirect'
import Router from 'next/router'
import { bundles } from '../mock/data'
import Link from 'next/link'

const LIST_SIGNUP = gql`
  mutation signup($email: String!) {
    listSignup(email: $email) {
      success
    }
  }
`

const EmailStep = ({ value, onChange, back, done, next }) => {
  const [signup, { data, loading, error }] = useMutation(LIST_SIGNUP, {
    onCompleted: data => {
      console.log(data)
      Router.push('/home')
    },
  })

  const submit = e => {
    e.preventDefault()
    signup({
      variables: {
        email: value,
      },
    })
  }
  return (
    <div>
      <div className="flex flex-col md:items-center justify-start md:justify-between">
        <div className="max-w-md md:max-w-xs p-6 flex items-center justify-center">
          <img
            src="/static/landing/bulbscolor.png"
            alt="Abstract Light bulbs"
          />
        </div>
        <div className="text-center md:text-left">
          <div className="text-2xl font-bold sm:text-3xl leading-normal max-w-2xl">
            <p className="text-blue-900">You don't have to give.</p>
            <p className="text-blue-900">
              That's why its extraordinary when you do.
            </p>
          </div>

          <form method="post" className="my-12" onSubmit={submit}>
            <div className="flex bg-white rounded overflow-hidden mb-4 max-w-xl shadow-float">
              <input
                type="email"
                required
                placeholder="Your email"
                value={value}
                onChange={e => onChange(e.target.value)}
                className="flex-1 py-4 md:py-0 px-4 text-lg email-input"
              />
              <button
                type="submit"
                className="hidden md:block bg-red-200 text-red-800 h-full text-white font-bold px-8 py-3 text-lg"
              >
                Let's get started <i className="fas fa-arrow-right ml-1"></i>
              </button>
            </div>

            <div className="block md:hidden">
              <button
                type="submit"
                className="w-full rounded shadow-float bg-red-200 text-red-800 font-bold px-8 py-3 text-lg"
              >
                Let's get started <i className="fas fa-arrow-right ml-1"></i>
              </button>
            </div>
            {error && (
              <p className="text-sm text-red-600">
                Something went wrong. Try again or{' '}
                <Link href="/home">
                  <a className="font-bold underline">explore our bundles</a>
                </Link>
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default EmailStep
