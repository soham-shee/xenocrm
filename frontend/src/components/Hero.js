import React from 'react'

function Hero() {
  return (
    <>
        <div className="mx-auto max-w-2xl py-20">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our CRM for your client.
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              CRM to take your business to next level 😎
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Unify customer data, generate insights, personalise marketing communications across SMS, Email, Whatsapp & Instagram to delight your loyal customers.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/dashboard"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="info" className="text-sm font-semibold leading-6 text-gray-900">
                Past Campaigns <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
    </>
  )
}

export default Hero