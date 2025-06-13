'use client'

import React from 'react'
import { ChevronDown } from 'lucide-react'
import LocaleSwitcher from './LocaleSwitcher';
import Link from 'next/link';

interface Props {
  data: any
}

export const Desktop: React.FC<Props> = ({ data }) => {
  return (
    <div className='hidden md:flex container mx-auto px-4 h-20 justify-between items-center gap-4'>
      <h1>Logotipo</h1>
      <div className='flex gap-x-4 text-base/4'>
        {
          data.map((item: any) => {
            return (
              <div key={item.id}>
                {item.children.length === 0 ?
                  /* Link */
                  <Link href={item.url}>{item.title}</Link>
                  :
                  /* Dropdown */
                  (() => {
                    const detailsRef = React.createRef<HTMLDetailsElement>();
                    return (
                      <details
                        key={item.id}
                        name='active'
                        className='group'
                        ref={detailsRef}
                      >
                        <summary className='inline-flex items-center gap-x-2 cursor-pointer'>
                          <span>{item.title}</span>
                          <ChevronDown
                            className="transition-transform duration-300 group-open:rotate-180"
                            size={14}
                          />
                        </summary>
                        <ul className="absolute mt-10 px-4 py-6 space-y-3 bg-neutral-50 shadow-md rounded-md">
                          {item.children.map((child: any) => (
                            <li key={child.id}>
                              <Link
                                href={child.url}
                                onClick={() => {
                                  detailsRef.current?.removeAttribute('open');
                                }}
                              >
                                {child.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </details>
                    );
                  })()

                }
              </div>
            )
          }
          )
        }
        <LocaleSwitcher />
      </div>
    </div>
  )
}