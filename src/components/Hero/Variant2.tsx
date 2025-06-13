import React from 'react'
import { Props } from './types'
import Link from 'next/link'

export default function Hero({
  title = "Default Title",
  subtitle = "Default Subtitle",
  cover = "https://placehold.co/624x780",
  linkLabel = "Learn More",
  linkHref = "#"
}: Props) {

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
        {title}
      </h1>
      <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
        {
          subtitle
        }
      </p>
      <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
        <Link
          href={linkHref}
          className="btn-primary"
        >
          {linkLabel}
        </Link>
      </div>
    </div>
  )
}
