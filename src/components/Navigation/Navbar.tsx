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
    path: '/',
    items: []
  },
  {
    id: 2,
    title: 'Nosotros',
    path: '/nosotros',
    items: []
  },
  {
    id: 3,
    title: 'Servicios',
    path: '/servicios',
    items: [
      { id: 1, title: 'All', path: '/services' },
      { id: 2, title: 'Servicio 2', path: '/servicios/servicio-1' },
      { id: 3, title: 'Servicio 3', path: '/servicios/servicio-2' },
      { id: 4, title: 'Servicio 3', path: '/servicios/servicio-3' }
    ]
  },
  {
    id: 4,
    title: 'Hoteles',
    path: '/about',
    items: [
      { id: 1, title: 'All', path: '/about' },
      { id: 2, title: 'Servicio 2', path: '/servicios/servicio-1' },
      { id: 3, title: 'Servicio 3', path: '/servicios/servicio-2' },
      { id: 4, title: 'Servicio 3', path: '/servicios/servicio-3' }
    ]
  },
  {
    id: 5,
    title: 'Bodas',
    path: '/servicios',
    items: [
      { id: 1, title: 'All', path: '/services' },
      { id: 2, title: 'Servicio 2', path: '/servicios/servicio-1' },
      { id: 3, title: 'Servicio 3', path: '/servicios/servicio-2' },
      { id: 4, title: 'Servicio 3', path: '/servicios/servicio-3' }
    ]
  },
  {
    id: 6,
    title: 'Mecanicos',
    path: '/servicios',
    items: [
      { id: 1, title: 'All', path: '/services' },
      { id: 2, title: 'Servicio 1', path: '/servicios/servicio-1' },
      { id: 3, title: 'Servicio 2', path: '/servicios/servicio-2' },
      { id: 4, title: 'Servicio 3', path: '/servicios/servicio-3' },
      { id: 5, title: 'Servicio 4', path: '/servicios/servicio-3' },
      { id: 6, title: 'Servicio 5', path: '/servicios/servicio-3' },
      { id: 7, title: 'Servicio 6', path: '/servicios/servicio-3' },
      { id: 8, title: 'Servicio 7', path: '/servicios/servicio-3' },
      { id: 9, title: 'Servicio 8', path: '/servicios/servicio-3' },
      { id: 10, title: 'Servicio 9', path: '/servicios/servicio-3' },
      { id: 11, title: 'Servicio 9', path: '/servicios/servicio-3' },
      { id: 12, title: 'Servicio 9', path: '/servicios/servicio-3' },
      { id: 13, title: 'Servicio 9', path: '/servicios/servicio-3' },
      { id: 14, title: 'Servicio 9', path: '/servicios/servicio-3' },
      { id: 15, title: 'Servicio 15', path: '/servicios/servicio-3' },
    ]
  },
] as any


export const Navbar: React.FC<Props> = async () => {

  return (
    <nav className='fixed z-10 w-full bg-neutral-50 border-b border-neutral-200'>
      <Desktop data={data} />
      <Mobile data={data} />
    </nav>
  )
}