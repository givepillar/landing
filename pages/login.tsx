import React from 'react'
import Base from '../app/components/Base'
import Logo from '../app/components/ui/Logo'
import TextInput from '../app/components/ui/form/TextInput'
import { PrimaryButton } from '../app/components/ui/Button'
import Checkbox from '../app/components/ui/form/Checkbox'
import Link from 'next/link'
import LoginForm from '../app/components/LoginForm'

const login = () => (
  <Base>
    <div className="flex w-full h-full bg-gray-50 items-start pt-12 justify-center">
      {/* <div className="w-1/2 flex-1 bg" /> */}
      <div className="p-12 flex flex-col items-center w-full">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <LoginForm />
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
