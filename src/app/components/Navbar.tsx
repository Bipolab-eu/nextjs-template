'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
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
      { id: 1, title: 'Servicio 1', url: '/servicios/servicio-1' },
      { id: 2, title: 'Servicio 2', url: '/servicios/servicio-2' },
      { id: 3, title: 'Servicio 3', url: '/servicios/servicio-3' }
    ]
  },
]

export const Navbar: React.FC<Props> = ({ locale, route }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className='fixed z-10 w-full bg-neutral-100'>
      <div className=" flex px-4 py-6 gap-4 justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <h1>Logotipo</h1>

        {/* Desktop Menu */}
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
                        <ul className="bg-beige-50 shadow-2xl rounded-xl px-4 py-6 space-y-3 text-right">
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
          <button onClick={() => setOpen(!open)} className='md:hidden'>
            {!open ? <Menu color='#0A0A0A' /> : <X color='#0A0A0A' />}
          </button>

          {/* Permite al usuario cambiar de idioma */}
          <LocaleSwitcher />
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="px-6 pt-8 pb-16 bg-primary flex flex-col gap-y-2 text-3xl">
          {
            data.map((item: any) => {
              return (
                <div key={item.id}>
                  {item.children.length === 0 ?
                    /* Link */
                    <Link href={item.url}>{item.title}</Link>
                    :
                    /* Dropdown */
                    <div key={item.id} className='relative group'>
                      <span className='cursor-pointer'>{item.title}</span>
                      <div className='absolute right-0 pt-4 hidden group-hover:block w-max'>
                        <ul className="bg-beige-50 shadow-2xl rounded-xl px-4 py-6 space-y-3 text-right">
                          {item.children.map((child: any) => {
                            return (
                              <li key={child.id}>
                                <Link href={child.url}>{child.title}</Link>
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
        </div>
      )
      }
    </nav>
  )
}