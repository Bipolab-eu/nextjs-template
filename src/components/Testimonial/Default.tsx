import React from 'react'
import { Props } from './types'
import { QuoteIcon } from 'lucide-react'

export const Testimonial: React.FC<Props> = ({
  title = "Judith Black",
  subtitle = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
  testimonials
}) => {

  return (
    <section className='flex flex-col items-center space-y-4 p-8 bg-neutral-100 rounded-lg shadow-md text-center'>
      <div>
        <p className='text-xl'>{title}</p>
        <p>{subtitle}</p>
      </div>
      <div className='flex'>
        {
          testimonials.map((testimonial) =>
            <div
              className='b'
              key={testimonial.id}
            >
              <QuoteIcon size={32} strokeWidth={0} fill='currentColor' />
              <p className='text-xl'>{testimonial.author}</p>
              <p>{testimonial.quote}</p>
            </div>
          )
        }
      </div>
    </section>
  )
}
