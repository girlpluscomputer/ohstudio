'use client'
import { Nav, NavItem } from './styles'

const routes = [
  { id: 'rhome', name: 'Home', path: '/', active: true },
  { id: 'rprofile', name: 'Profile', path: '/profile', active: false },
  { id: 'rcontact', name: 'Contact', path: '/contact', active: false }
]

const Navigator = () => {
  return (
    <Nav>
      {routes.map(route => (
        <NavItem key={route.id} href={route.path} active={route.active}>
          <span>{route.name}</span>
        </NavItem>
      ))}
    </Nav>
  )
}
export default Navigator
