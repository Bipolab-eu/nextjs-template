import React from 'react'

interface Props {
  data: any
}

export const HeaderSection: React.FC<Props> = ({ data }) => {
  return (
    <section className="space-y-2 sm:text-center sm:max-w-xl sm:mx-auto">
      <h1 className="title text-blue-700">{data.title}</h1>
      <h2 className="subtitle text-neutral-700">{data.subtitle}</h2>
    </section>
  )
}
