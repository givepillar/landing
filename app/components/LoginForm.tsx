import React from 'react'
import PrimaryButton from './ui/Button'
import TextInput from './ui/form/TextInput'
import Link from 'next/link'

const LoginForm = () => {
  return (
    <form className="max-w-sm bg-white w-full block shadow-xl border-gray-100 rounded-lg p-12">
      <a
        href={
          'https://www.facebook.com/v3.3/dialog/oauth?' +
          'client_id=2173405042756743' +
          '&redirect_uri=http://localhost:3000/verify/facebook' +
          "&scope=['email', 'user_friends', 'user_likes', 'user_hometown', 'user_location']"
        }
      >
        <PrimaryButton
          type="button"
          style={{ background: '#3b5998' }}
          className="w-full"
        >
          <i className="fab fa-facebook mr-2" /> Sign in with Facebook
        </PrimaryButton>
      </a>
      <div className="w-full text-center text-xs uppercase tracking-wide text-gray-500 font-bold my-6">
        <p>Or</p>
      </div>
      <TextInput title="Email" type="email" name="email" className="mb-6" />
      <div className="mb-12">
        <TextInput title="Password" name="password" type="password" />
        <Link href="/login">
          <a className="link text-sm inline-block mt-2">
            Forgot your password?
          </a>
        </Link>
      </div>
      <PrimaryButton className="w-full">Sign in</PrimaryButton>
      <p className="mt-4 w-full text-center">
        No account?{' '}
        <Link href="/signup">
          <a className="link">Sign up</a>
        </Link>
      </p>
    </form>
  )
}

export default LoginForm
