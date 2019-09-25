import React from 'react'

const EmailStep = ({ value, onChange, back, done, next }) => {
  const submit = e => {
    e.preventDefault()
    next()
  }
  return (
    <div>
      <div className="flex flex-col md:items-center justify-start md:justify-between">
        <div className="max-w-md md:max-w-xs p-6 flex items-center justify-center">
          <img src="/static/landing/bulbscol.png" alt="Abstract Light bulbs" />
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
          </form>
        </div>
      </div>
    </div>
  )
}

export default EmailStep
