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
    <div className="">
    <div className="">
        <div className="self-stretch justify-start text-Colors-blue-700 text-4xl font-normal font-monsieur leading-10">{title}</div>
        <div className="self-stretch justify-start text-Colors-neutral-700 text-xl font-normal font-inter leading-normal">{subtitle}</div>
        <div data-property-1="Default" className="px-4 py-2 bg-Colors-blue-700 rounded-sm inline-flex justify-center items-center gap-2">
            <Link href={linkHref} className="justify-start text-Colors-neutral-50 text-base font-normal font-['Inter'] leading-normal">{linkLabel}</Link>
        </div>
    </div>
    <img className="w-full" src={cover} alt={title} />
</div>
  )
}
