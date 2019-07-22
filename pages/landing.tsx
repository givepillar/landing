import React from 'react'
import Layout from '../app/components/Layout'
import Base from '../app/components/Base'
import Logo from '../app/components/ui/Logo'

const landing = () => (
  <Base>
    <div className="w-full h-full bg-gray-50">
      <div className="mx-auto py-24 w-full max-w-3xl">
        <Logo />

        <div className="text-left mt-16">
          <h1 className="font-sans text-5xl font-semibold mb-4">
            Welcome to Pillar
          </h1>
          <p className="text-2xl text-gray-700">We're glad you're here.</p>
        </div>
      </div>
    </div>
  </Base>
)

export default landing
