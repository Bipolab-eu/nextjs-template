<<<<<<< HEAD
import React from 'react'

export default function Hero() {
  return (
    <div className="">
    <div className="">
        <div className="self-stretch justify-start text-Colors-blue-700 text-4xl font-normal font-['DM_Serif_Text'] leading-10">Everyone dreams of the perfect event. Don’t be like everyone else. Make it a reality in Gran Canaria.</div>
        <div className="self-stretch justify-start text-Colors-neutral-700 text-xl font-normal font-['Inter'] leading-normal">Daring people do it here, in Gran Canaria. The place where everything fits. Production, logistics, and problems... That’s our business. You just bring the excitement.</div>
        <div data-property-1="Default" className="px-4 py-2 bg-Colors-blue-700 rounded-sm inline-flex justify-center items-center gap-2">
            <div className="justify-start text-Colors-neutral-50 text-base font-normal font-['Inter'] leading-normal">Make it happen.</div>
        </div>
    </div>
    <img className=" min-w-80 max-h-[800px] min-h-96" src="https://placehold.co/624x780" />
</div>
=======
import Image from "next/image"
import { Cover } from "./Cover"
import Link from "next/link"

interface Props {
  data: any
}

export const Hero: React.FC<Props> = ({ data }) => {

  return (
    <header className="sm:grid sm:grid-cols-2 sm:gap-12 items-center">
      <div className="space-y-4 py-12">
        <h1 className="title text-blue-700">{data.title}</h1>
        <h2 className="subtitle text-neutral-700">{data.subtitle}</h2>
        <Link href={data.linkUrl} className="btn">{data.linkTitle}</Link>
      </div>
      <Image
        src={`http://localhost:1337${data.cover.url}`}
        alt={data.cover.name}
        height={500}
        width={500}
        className="object-cover w-full aspect-4/5"
        priority
      />
    </header>
>>>>>>> 4b63220b94bd04214e005f31e3368c87594d6a72
  )
}
