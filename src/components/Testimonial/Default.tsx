import React from 'react'
import { Props } from './types'
import { QuoteIcon } from 'lucide-react'

export const Testimonial: React.FC<Props> = ({ 
  author= "Judith Black",
  quote = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis."
}) => {
  
  return (
    <section className='flex flex-col items-center space-y-4 p-8 bg-neutral-100 rounded-lg shadow-md text-center'>
      <QuoteIcon size={32} strokeWidth={0} fill='currentColor' />
      <p className='text-xl'>{quote}</p>
      <p>{author}</p>
    </section>
  )
}
