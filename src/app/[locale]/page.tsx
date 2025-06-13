
import Blocks from "@/components/DynamicZone";
import { fetchApi } from "@/lib/fetchApi"


export default async function HomePage({ params }: any) {
  const { locale } = await params;

  /* const data = await fetchApi({
    apiRoute: '/api/pages/:id',
    locale
  }) as any */

  return (
    <main className="layout">
      {/* <Blocks blocks={data.blocks} /> */}
    </main>
  )
}