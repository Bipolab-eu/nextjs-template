'use client'

import React, { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import LocaleSwitcher from './LocaleSwitcher';
import Link from 'next/link';

interface Props {
  locale: any
  route: any
}

/* Data Example */
const data = [
  {
    id: 1,
    title: 'Inicio',
    url: '/',
    children: []
  },
  {
    id: 2,
    title: 'Nosotros',
    url: '/nosotros',
    children: []
  },
  {
    id: 3,
    title: 'Servicios',
    url: '/servicios',
    children: [
      { id: 1, title: 'All', url: '/services' },
      { id: 2, title: 'Servicio 2', url: '/servicios/servicio-1' },
      { id: 3, title: 'Servicio 3', url: '/servicios/servicio-2' },
      { id: 4, title: 'Servicio 3', url: '/servicios/servicio-3' }
    ]
  },
  {
    id: 4,
    title: 'Hoteles',
    url: '/about',
    children: [
      { id: 1, title: 'All', url: '/about' },
      { id: 2, title: 'Servicio 2', url: '/servicios/servicio-1' },
      { id: 3, title: 'Servicio 3', url: '/servicios/servicio-2' },
      { id: 4, title: 'Servicio 3', url: '/servicios/servicio-3' }
    ]
  },
  {
    id: 5,
    title: 'Bodas',
    url: '/servicios',
    children: [
      { id: 1, title: 'All', url: '/services' },
      { id: 2, title: 'Servicio 2', url: '/servicios/servicio-1' },
      { id: 3, title: 'Servicio 3', url: '/servicios/servicio-2' },
      { id: 4, title: 'Servicio 3', url: '/servicios/servicio-3' }
    ]
  },
  {
    id: 6,
    title: 'Mecanicos',
    url: '/servicios',
    children: [
      { id: 1, title: 'All', url: '/services' },
      { id: 2, title: 'Servicio 1', url: '/servicios/servicio-1' },
      { id: 3, title: 'Servicio 2', url: '/servicios/servicio-2' },
      { id: 4, title: 'Servicio 3', url: '/servicios/servicio-3' },
      { id: 5, title: 'Servicio 4', url: '/servicios/servicio-3' },
      { id: 6, title: 'Servicio 5', url: '/servicios/servicio-3' },
      { id: 7, title: 'Servicio 6', url: '/servicios/servicio-3' },
      { id: 8, title: 'Servicio 7', url: '/servicios/servicio-3' },
      { id: 9, title: 'Servicio 8', url: '/servicios/servicio-3' },
      { id: 10, title: 'Servicio 9', url: '/servicios/servicio-3' },
      { id: 11, title: 'Servicio 9', url: '/servicios/servicio-3' },
      { id: 12, title: 'Servicio 9', url: '/servicios/servicio-3' },
      { id: 13, title: 'Servicio 9', url: '/servicios/servicio-3' },
      { id: 14, title: 'Servicio 9', url: '/servicios/servicio-3' },
      { id: 15, title: 'Servicio 15', url: '/servicios/servicio-3' },
    ]
  },
]

export const Navbar: React.FC<Props> = ({ locale, route }) => {
  const [openMenu, setOpen] = useState<boolean>(false);

  return (
    <nav className='fixed z-10 w-full bg-neutral-50 border-b border-neutral-200'>
      {/* Desktop Menu */}
        <div className='h-20 flex px-4 gap-4 justify-between items-center max-w-7xl mx-auto'>
        <h1>Logotipo</h1>
        <div className="inline-flex justify-start items-center gap-4 text-base/4">
          {
            data.map((item: any) => {
              return (
                <div className='hidden md:block' key={item.id}>
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

      {/* Mobile Menu */}
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
    </nav>
  )
}