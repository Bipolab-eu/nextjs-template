import React from 'react'
import { Props } from './types'
import Link from 'next/link'

export default function Hero(
  {
    title = "Default Title",
    subtitle = "Default Subtitle",
    cover = "https://placehold.co/624x780",
    linkLabel = "Learn More",
    linkHref = "/nosotros"
  }: Props) {

  return (
    <header className="relative aspect-square md:aspect-video w-full overflow-hidden font-inter">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cover})` }}
      >
        <div className="absolute inset-0 bg-neutral-950/50" /> {/* Overlay oscuro para mejor legibilidad */}
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="text-neutral-50 text-4xl md:text-6xl mb-4">{title}</h1>
          <p className="text-neutral-50 text-xl mb-8">{subtitle}</p>
          <Link 
            href={linkHref} 
            className="btn-primary"
          >
            {linkLabel}
          </Link>
        </div>
      </div>
    </header>
  )

}
