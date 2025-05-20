import Image from "next/image"
import { Cover } from "./Cover"

interface Props {
  data: any
}

export const Hero: React.FC<Props> = ({ data }) => {

  return (
    <section className="relative aspect-[9/16] md:aspect-video w-full overflow-hidden">
      <Image
        src={`http://localhost:1337${data.cover.url}`}
        alt={data.cover.name}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center text-neutral-50 px-4 text-center">
        <div>
          <h1 className="heading-3 mb-4">{data.title}</h1>
          <p className="body">{data.description}</p>
        </div>
      </div>
    </section>
  )
}
