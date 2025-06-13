'use client'

import React, { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import LocaleSwitcher from './LocaleSwitcher';
import Link from 'next/link';

interface Props {
  data?: any
}


export const Mobile: React.FC<Props> = ({ data }) => {
  const [openMenu, setOpen] = useState<boolean>(false);

  return (
    <div className='md:hidden'>
      <div className='h-20 flex px-4 gap-4 justify-between items-center max-w-7xl mx-auto'>
        <LocaleSwitcher />
        <h1>Logotipo</h1>
        <button
          onClick={() => {
            setOpen(!openMenu)
          }}
        >
          {!openMenu ? <Menu color='#0A0A0A' /> : <X color='#0A0A0A' />}
        </button>
      </div>

      {openMenu && (
        <div className='fixed top-20 inset-0 z-10 bg-neutral-100 heading-5 p-4 space-y-2 max-h-screen overflow-y-auto'>
          {
            data.map((item: any) => {
              return (
                item.children.length === 0 ?
                  /* Link */
                  <Link
                    key={item.id}
                    className='block'
                    onClick={() => setOpen(!openMenu)} href={item.url}
                  >
                    {item.title}
                  </Link>
                  :
                  /* Dropdown */
                  <details
                    key={item.id}
                    name='active'
                    className='group'
                  >
                    <summary className='inline-flex items-center gap-x-2'>
                      <ChevronDown
                        className="transition-transform duration-300 group-open:rotate-180"
                        size={18}
                      />
                      <span>{item.title}</span>
                    </summary>
                    <ul className="px-6.5 py-4 space-y-2 ">
                      {item.children.map((child: any) => (
                        <li key={child.id}>
                          <Link
                            href={child.url}
                            onClick={() => {
                              setOpen(!openMenu)
                            }}
                          >
                            {child.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
              )
            }
            )
          }
        </div>
      )
      }
    </div>
  )
}