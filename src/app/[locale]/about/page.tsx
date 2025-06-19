import { DynamicZone } from '@/components/DynamicZone'
import { fetchApi } from '@/lib/strapi/fetchApi'
import React from 'react'

export default async function AboutPage({ params }:any) {
  const { locale } = await params

  const data = await fetchApi({
    apiRoute: '/api/pages/gsjanemc8fxw8yfcp3n65c6q',
    locale
  }) as any 

  return (
    <main className='layout'>
      <DynamicZone blocks={data.blocks} />
    </main>
  )
}
