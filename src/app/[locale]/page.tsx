
import { DynamicZone } from "@/components/DynamicZone";
import { populateDinamicZoneQuery } from "@/lib/strapi/dinamicZoneQuery";
import { fetchApi } from "@/lib/strapi/fetchApi";


export default async function HomePage({ params }: any) {
  const { locale } = await params;

  const data = await fetchApi({
    apiRoute: '/api/pages/z1lfo4tweyzzttqbgftxilqr',
    locale,
    populate: populateDinamicZoneQuery
  }) as any

  return (
    <main className="layout">
      <DynamicZone blocks={data.blocks} />
    </main>
  )
}