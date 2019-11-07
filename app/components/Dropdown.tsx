import React, { useState } from 'react'
import cn from 'classnames'
import { CSSTransition } from 'react-transition-group'
import Link from 'next/link'
import { signOut } from '../lib/auth'
import { useApolloClient } from 'react-apollo'

const Dropdown = ({ user, darkText = false }) => {
  const [isOpen, setIsOpen] = useState(false)
  const client = useApolloClient()

  return (
    <div id="dropdown" className="relative z-20 inline-block">
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          isOpen ? 'text-gray-100' : '',
          darkText ? 'text-gray-900' : 'text-white',
          'inline-flex items-center pl-2 pr-1 py-1 font-semibold',
          'rounded focus:outline-none',
          'active:text-gray-200 transition'
        )}
      >
        {user.firstName}
        <svg
          className="ml-1 h-6 w-6 opacity-75"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z" />
        </svg>
      </button>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0"
          tabIndex={-1}
        ></div>
      )}
      {/* <CSSTransition
        in={isOpen}
        timeout={150}
        classNames={{
          enter: 'opacity-0 scale-90',
          enterActive: 'ease-out transition-fastest',
          enterDone: 'opacity-100 scale-100',
          exit: 'opacity-100 scale-100',
          exitActive: 'ease-in transition-fastest',
          exitDone: 'opacity-0 scale-90',
        }}
        unmountOnExit
      > */}
      {isOpen && (
        <div className="mt-2 transition-all absolute right-0 origin-top-right">
          <div className="dropdown-card text-left bg-white rounded-lg shadow-lg">
            <div className="flex items-center px-6 py-4">
              <img
                className="h-10 w-10 rounded-full flex-no-shrink"
                src={`https://api.adorable.io/avatars/100/${user.id}.png`}
                alt=""
              />
              <div className="ml-4">
                <p className="font-semibold text-gray-900 leading-none">
                  {user.firstName} {user.lastName}
                </p>
                <p className="text-sm text-gray-600 mt-1">{user.email}</p>
              </div>
            </div>
            <div className="border-t-2 border-gray-100 pb-1">
              <Link href="/settings">
                <a className="focus:outline-none focus:bg-gray-100 block px-6 py-3 leading-tight hover:bg-gray-100">
                  Settings
                </a>
              </Link>
              <button
                onClick={() => signOut(client)}
                className="focus:outline-none focus:bg-gray-100 block w-full px-6 py-3 text-left leading-tight hover:bg-gray-100"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        .dropdown-card {
          width: 18rem;
        }
      `}</style>
    </div>
  )
}

export default Dropdown
