import React from 'react'
import { Props } from './types'
import Link from 'next/link'

export const Hero: React.FC<Props> = ({
  title = "Default Title",
  subtitle = "Default Subtitle",
  cover = "https://placehold.co/624x780",
  linkLabel = "Learn More",
  linkHref = "#"
}: Props) => {
  
  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-40 lg:pb-48 xl:col-span-6">
          <div className="mx-auto max-w-lg lg:mx-0">
            <h1 className="mt-24 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:mt-10 sm:text-7xl">
              {title}
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              {subtitle}
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href={linkHref}
                className="btn-primary"
              >
                {linkLabel}
              </Link>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80"
            className="aspect-3/2 w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
          />
        </div>
      </div>
    </div>
  )
}
