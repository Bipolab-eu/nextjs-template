import { fetchApi } from "@/lib/fetchApi";
import { Hero } from "../components/Hero";
import { fetchComponentbyName } from "@/lib/fetchComponents";
import { BlockContent } from "../components/BlocksContent";
import { HeaderSection } from "../components/HeaderSection";
import { Slider } from "../components/Slider";

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
          },
          'layout.rich-text': {
            populate: true
          },
          'layout.header-sections': {
            populate: true
          },
          'layout.slider': {
            populate: 'files'
          }
        }
      }
    }
  })

  const { blocks }:any = data

  return (
    <main>
      <Hero data={fetchComponentbyName(blocks, 'layout.hero')} />
      <section className="max-w-xl border-l border-blue-700 pl-4 py-6">
        <BlockContent content={fetchComponentbyName(blocks, 'layout.rich-text')} />
      </section>
      <HeaderSection data={fetchComponentbyName(blocks, 'layout.header-sections')} />
      <Slider data={fetchComponentbyName(blocks, 'layout.slider')} />
    </main>
  )
}