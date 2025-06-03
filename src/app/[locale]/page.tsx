import { Accordion } from "../components/Accordion";
import Hero from "../components/Hero";

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
      <Hero></Hero>
      <Hero></Hero>
      <Hero></Hero>
      <Hero></Hero>
      <h1>Hola mundo</h1>
      <Accordion
        title="hola"
        description="adios fsaldfh asgdkl "></Accordion>
    </main>
  )
}