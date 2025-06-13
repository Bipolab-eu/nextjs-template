import { Desktop } from "./Desktop"
import { Mobile } from "./Mobile"

interface Props {
  data?: any
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

export const Navbar: React.FC<Props> = () => {
  return (
    <nav className='fixed z-10 w-full bg-neutral-50 border-b border-neutral-200'>
      <Desktop data={data} />
      <Mobile data={data} />
    </nav>
  )
}