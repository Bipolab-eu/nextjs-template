'use client'

import React, { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import LocaleSwitcher from './LocaleSwitcher'
import Link from 'next/link'

interface MenuItem {
  id: string | number
  title: string
  url: string
  children: MenuItem[]
}

interface Props {
  data: MenuItem[]
}

export const Mobile: React.FC<Props> = ({ data }) => {
  const [openMenu, setOpen] = useState<boolean>(false)

  // Prevenir scroll cuando el menú está abierto
  React.useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [openMenu])

  return (
    <div className='md:hidden'>
      {/* Header */}
      <div className='fixed top-0 left-0 right-0 bg-white z-50 border-b border-neutral-100'>
        <div className='container mx-auto'>
          <div className='h-20 flex items-center justify-between px-4'>
            <LocaleSwitcher />
            <Link href="/" className="font-bold text-xl text-Colors-blue-700">
              Logotipo
            </Link>
            <button
              onClick={() => setOpen(!openMenu)}
              className="p-2 hover:bg-neutral-50 rounded-md transition-colors"
              aria-expanded={openMenu}
              aria-label={openMenu ? 'Cerrar menú' : 'Abrir menú'}
            >
              {!openMenu ? <Menu size={24} /> : <X size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Mobile */}
      <div 
        className={`fixed inset-0 z-40 bg-white transition-transform duration-300 ${
          openMenu ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '80px' }}
      >
        <nav className='container mx-auto p-4 space-y-4 max-h-[calc(100vh-80px)] overflow-y-auto'>
          {data.map((item) => (
            <div key={item.id}>
              {item.children.length === 0 ? (
                /* Link Simple */
                <Link
                  href={item.url}
                  className='block py-2 text-lg text-neutral-900 hover:text-Colors-blue-700 transition-colors'
                  onClick={() => setOpen(false)}
                >
                  {item.title}
                </Link>
              ) : (
                /* Dropdown */
                <details className='group' name='active'>
                  <summary 
                    className='flex items-center gap-x-2 py-2 cursor-pointer text-lg text-neutral-900 hover:text-Colors-blue-700 transition-colors'
                    role="button"
                  >
                    <ChevronDown
                      className="transition-transform duration-300 group-open:rotate-180"
                      size={20}
                      aria-hidden="true"
                    />
                    <span>{item.title}</span>
                  </summary>
                  <ul className="pl-8 py-2 space-y-2">
                    {item.children.map((child) => (
                      <li key={child.id}>
                        <Link
                          href={child.url}
                          className='block py-2 text-neutral-700 hover:text-Colors-blue-700 transition-colors'
                          onClick={() => setOpen(false)}
                        >
                          {child.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}