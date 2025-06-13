
import Blocks from "@/components/DynamicZone";
import { fetchApi } from "@/lib/fetchApi"


export default async function HomePage({ params }: any) {
  const { locale } = await params;

  const data = await fetchApi({
    apiRoute: '/api/pages/z1lfo4tweyzzttqbgftxilqr',
    locale
  }) as any

  console.log(data)

  return (
    <main className="layout">
      <Blocks blocks={data.blocks} />
    </main>
  )
}