import React from 'react'
import Base from '../app/components/Base'
import Logo from '../app/components/ui/Logo'
import TextInput from '../app/components/ui/form/TextInput'
import { PrimaryButton } from '../app/components/ui/Button'
import Checkbox from '../app/components/ui/form/Checkbox'
import Link from 'next/link'

const login = () => (
  <Base>
    <div className="flex w-full h-full items-start pt-12 justify-center">
      {/* <div className="w-1/2 flex-1 bg" /> */}
      <div className="p-12 flex flex-col items-center w-full">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <form className="max-w-sm mt-10 w-full block shadow-xl border border-gray-100 rounded-lg p-12">
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
          <TextInput title="Email" type="email" className="mb-6" />
          <div className="mb-12">
            <TextInput title="Password" type="password" />
            <Link href="/login">
              <a className="link text-sm inline-block mt-2">
                Forgot your password?
              </a>
            </Link>
          </div>
          <PrimaryButton className="w-full">Sign in</PrimaryButton>
        </form>
      </div>
    </div>

    <style jsx>{`
      .bg {
        background-image: url('/static/tallgrad.svg');
        @apply bg-cover bg-center;
      }
    `}</style>
  </Base>
)

export default login
