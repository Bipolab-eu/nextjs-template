'use client'

import React from 'react'
import { BlocksRenderer } from "@strapi/blocks-react-renderer"

interface Props {
  content: any
}

export const BlockContent: React.FC<Props> = ({ content }) => {
  return (
    content && (
      <BlocksRenderer
        content={content}
        blocks={{
          paragraph: ({ children }) => <p className="body">{children}</p>,
          heading: ({ children, level }) => {
            switch (level) {
              case 1:
                return <h1 className='heading-1'>{children}</h1>
              case 2:
                return <h2 className='heading-2'>{children}</h2>
              case 3:
                return <h3 className='heading-3'>{children}</h3>
              case 4:
                return <h4 className='heading-4'>{children}</h4>
              case 5:
                return <h5 className='heading-5'>{children}</h5>
              case 6:
                return <h6 className='heading-6'>{children}</h6>
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
              className='btn'
            >
              {children}
            </a>
        }}
        modifiers={{
          bold: ({ children }) => <strong>{children}</strong>,
        }}
      />
    )
  )
}