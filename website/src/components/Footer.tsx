import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-white/3 mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <div className="text-lg font-bold">Showduino</div>
          <div className="text-sm text-slate-400 mt-2">Control systems for immersive FX — relays, pixels, DMX, Wi‑Fi.</div>
        </div>
        <div>
          <div className="font-semibold">Product</div>
          <ul className="mt-2 text-sm text-slate-300">
            <li><Link to="/product">Overview</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/docs">Docs</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Company</div>
          <ul className="mt-2 text-sm text-slate-300">
            <li><Link to="/support">Support</Link></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Contact</div>
          <div className="mt-2 text-sm text-slate-300">Email: <a href="mailto:hello@showduino.example">hello@showduino.example</a></div>
          <div className="text-sm text-slate-300 mt-2">Discord: <a href="#">Join our community</a></div>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 py-4">© {new Date().getFullYear()} Showduino — All rights reserved</div>
    </footer>
  )
}
