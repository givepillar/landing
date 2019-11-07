import Link from 'next/link'
import React from 'react'
import Base from '../app/components/Base'
import SignupForm from '../app/components/SignupForm'
import Logo from '../app/components/ui/Logo'

const signup = () => {
  return (
    <Base title="Sign Up | Pillar">
      <div className="flex w-full h-full items-start  justify-center">
        <div className="p-12 flex flex-col items-center w-full">
          <Link href="/">
            <a className="mb-12">
              <Logo />
            </a>
          </Link>
          <SignupForm></SignupForm>
        </div>
      </div>
    </Base>
  )
}

export default signup
