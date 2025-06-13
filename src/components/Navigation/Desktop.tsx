'use client'

import React, { useRef, useCallback, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
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

export const Desktop: React.FC<Props> = ({ data }) => {
  const detailsRefs = useRef<Map<string | number, HTMLDetailsElement>>(new Map())

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      detailsRefs.current.forEach((ref) => {
        if (ref && !ref.contains(event.target as Node) && ref.hasAttribute('open')) {
          ref.removeAttribute('open')
        }
      })
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const registerRef = useCallback((id: string | number, element: HTMLDetailsElement | null) => {
    if (element) {
      detailsRefs.current.set(id, element)
    } else {
      detailsRefs.current.delete(id)
    }
  }, [])

  return (
    <nav className='hidden md:flex container mx-auto px-4 h-20 justify-between items-center gap-4 border-b border-neutral-100'>
      {/* Logo */}
      <Link href="/" className="font-bold text-2xl text-Colors-blue-700">
        Logotipo
      </Link>

      {/* Menú Principal */}
      <div className='flex items-center gap-x-6 text-base/4'>
        {data.map((item) => (
          <div key={item.id} className="relative">
            {item.children.length === 0 ? (
              /* Link Simple */
              <Link
                href={item.url}
                className="hover:text-Colors-blue-700 transition-colors py-2"
              >
                {item.title}
              </Link>
            ) : (
              /* Dropdown */
              <details
                ref={(el) => registerRef(item.id, el)}
                className='group'
                onToggle={(e) => {
                  if ((e.target as HTMLDetailsElement).open) {
                    detailsRefs.current.forEach((ref) => {
                      if (ref !== e.target && ref.hasAttribute('open')) {
                        ref.removeAttribute('open')
                      }
                    })
                  }
                }}
              >
                <summary
                  className='inline-flex items-center gap-x-2 cursor-pointer hover:text-Colors-blue-700 transition-colors list-none'
                  role="button"
                  aria-haspopup="true"
                >
                  <span>{item.title}</span>
                  <ChevronDown
                    className="transition-transform duration-300 group-open:rotate-180"
                    size={16}
                    aria-hidden="true"
                  />
                </summary>
                <ul
                  className="absolute left-0 mt-2 min-w-[200px] py-2 bg-white rounded-md shadow-lg border border-neutral-100"
                  role="menu"
                >
                  {item.children.map((child) => (
                    <li key={child.id} role="none">
                      <Link
                        href={child.url}
                        className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-blue-700 transition-colors"
                        onClick={(e) => {
                          e.preventDefault() // Prevenir comportamiento por defecto
                          e.stopPropagation() // Detener la propagación
                          const details = detailsRefs.current.get(item.id)
                          if (details) details.removeAttribute('open')
                          window.location.href = child.url // Navegar manualmente
                        }}
                        role="menuitem"
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
        <LocaleSwitcher />
      </div>
    </nav>
  )
}