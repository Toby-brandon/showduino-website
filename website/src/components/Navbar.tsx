import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Button from './Button'

const links = [ { to: '/', label: 'Home' }, { to: '/product', label: 'Product' }, { to: '/pricing', label: 'Pricing' }, { to: '/docs', label: 'Docs' }, { to: '/support', label: 'Support' }, { to: '/hauntsync', label: 'HauntSync' } ]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-black/30 border-b border-white/2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <nav className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-gradient-to-br from-purple-700 to-pink-600 flex items-center justify-center text-black font-bold">S</div>
            <div className="hidden sm:block">
              <div className="text-sm font-bold">Showduino</div>
              <div className="text-xs text-slate-300">Build. Sync. Scare.</div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className={({ isActive }) => `text-sm ${isActive ? 'text-white' : 'text-slate-300 hover:text-white'}`}>
                {l.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link to="/buy">
              <Button variant="solid">Buy</Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
