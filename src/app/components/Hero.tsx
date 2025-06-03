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
  )
}
