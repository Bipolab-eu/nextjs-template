'use client'

import React from 'react'
import { BlocksRenderer } from "@strapi/blocks-react-renderer"
import { ChevronRight } from 'lucide-react'


export const RichText: React.FC = ({ text }:any) => {
  return (
    text && (
      <section
        className='max-w-2xl p-8 shadow-lg shadow-neutral-200 rounded-lg'
      >
        <BlocksRenderer
          content={text}
          blocks={{
            paragraph: ({ children }) => <p className="body">{children}</p>,
            heading: ({ children, level }) => {
              switch (level) {
                case 1:
                  return <h1 className='title'>{children}</h1>
                case 2:
                  return <h2 className='subtitle'>{children}</h2>
                case 3:
                  return <h3 className='subtitle'>{children}</h3>
                case 4:
                  return <h4 className='subtitle'>{children}</h4>
                case 5:
                  return <h5 className='subtitle'>{children}</h5>
                case 6:
                  return <h6 className='subtitle'>{children}</h6>
                default:
                  return <p className="body">{children}</p>
              }
            },
            list: ({ children, format }) => {
              switch (format) {
                case 'unordered':
                  return <ul className="list-disc list-inside body">{children}</ul>
                case 'ordered':
                  return <ol className="list-decimal list-inside body">{children}</ol> 
                default:
                  return <ul className="list-disc list-inside body">{children}</ul>
                } 
            },
            // For links, you may want to use the component from your router or framework
            link: ({ children, url }) =>
              <a
                href={url}
                className='text-blue-700 body inline-flex'
              >
                {children}
                <ChevronRight color='#1447E6' />
              </a>
          }}
          modifiers={{
            bold: ({ children }) => <strong>{children}</strong>,
          }}
        />
      </section>
    )
  )
}