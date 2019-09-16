import { useRouter } from 'next/router'
import React from 'react'
import Base from '../../app/components/Base'
import Logo from '../../app/components/ui/Logo'
import Spinner from '../../app/components/ui/Spinner'
import Link from 'next/link'
import redirect from '../../app/lib/redirect'
import gql from 'graphql-tag'

const VERIFY_CODE = gql`
  mutation verifyCode($code: String!) {
    signupUserFacebook(facebookCode: $code) {
      user {
        id
      }
    }
  }
`

const Verify = () => {
  const router = useRouter()
  const { source } = router.query

  return (
    <Base>
      <div className="flex w-full h-full items-start pt-12 justify-center">
        {/* <div className="w-1/2 flex-1 bg" /> */}
        <div className="p-12 flex flex-col items-center">
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>

          <div className="max-w-sm mt-10 shadow-xl border flex flex-col items-center border-gray-100 rounded-lg p-12">
            <Spinner />
            <p className="mt-12">
              Connecting with <span className="capitalize">{source}</span>
            </p>
          </div>
        </div>
      </div>
    </Base>
  )
}

Verify.getInitialProps = ctx => {
  redirect(ctx, '/home')
}

export default Verify
