import { fetchApi } from "@/lib/fetchApi";
import { Hero } from "../components/Hero";
import { fetchComponentbyId, fetchComponentbyName } from "@/lib/fetchComponents";

export default async function HomePage({ params }:any) {
  const { locale } = await params;

  const data = await fetchApi({
    apiRoute: '/api/event-pros/nu8grb728r0btfw9ixuwe5yf',
    locale,
    populate: {
      blocks: {
        on: {
          'layout.hero': {
            populate: 'cover'
          }
        }
      }
    }
  })

  const { blocks }:any = data
  const heroData = fetchComponentbyName(blocks, 'layout.hero')

  console.log(heroData)

  return (
    <main>
      <Hero data={heroData} />
    </main>
  )
}