import Link from 'next/link'
import React from 'react'
import Base from '../app/components/Base'
import LoginForm from '../app/components/LoginForm'
import Logo from '../app/components/ui/Logo'

const login = () => {
  return (
    <Base title="Login | Pillar">
      <div className="flex w-full h-full items-start pt-12 justify-center">
        {/* <div className="w-1/2 flex-1 bg" /> */}
        <div className="p-12 flex flex-col items-center w-full">
          <Link href="/">
            <a className="mb-12">
              <Logo />
            </a>
          </Link>
          <LoginForm />
        </div>
      </div>
    </Base>
  )
}

export default login
