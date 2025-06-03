'use client'

import React, { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import LocaleSwitcher from './LocaleSwitcher';
import Link from 'next/link';

interface Props {
  data: any
}


export const Navbar: React.FC<Props> = ({ data }) => {
  const [openMenu, setOpen] = useState<boolean>(false);

  return (
    <nav>
      {/* Desktop Menu */}
      <div className="fixed z-10 w-full bg-neutral-100">
        <div className='flex px-4 py-6 gap-4 justify-between items-center max-w-7xl mx-auto'>
          <h1>Event Pro Gran Canaria</h1>
          <div className="inline-flex justify-start items-center gap-4 body">
            {
              data.map((item: any) => {
                return (
                  <div className='hidden md:block' key={item.id}>
                    {item.children.length === 0 ?
                      /* Link */
                      <Link href={item.url}>{item.title}</Link>
                      :
                      /* Dropdown */
                      <div key={item.id} className='relative group'>
                        <span className='cursor-pointer'>{item.title}</span>
                        <div className='absolute right-0 pt-4 hidden group-hover:block w-max'>
                          <ul className="bg-neutral-50 shadow-2xl rounded-xl px-4 py-6 space-y-3 text-right">
                            {item.children.map((child: any) => {
                              return (
                                <li key={child.id}>
                                  <Link href={(child.url)}>{child.title}</Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    }
                  </div>
                )
              }
              )
            }

            {/* Menu Button */}
            <button
              onClick={() => {
                setOpen(!openMenu)
              }}
              className='md:hidden'
            >
              {!openMenu ? <Menu color='#0A0A0A' /> : <X color='#0A0A0A' />}
            </button>

            {/* Permite al usuario cambiar de idioma */}
            <LocaleSwitcher />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {openMenu && (
        <div className='fixed z-10 w-full mt-18 bg-blue-800 heading-5 p-4 space-y-2 max-h-screen overflow-y-auto'>
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
                    <ul className="py-4 space-y-2">
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
    </nav>
  )
}