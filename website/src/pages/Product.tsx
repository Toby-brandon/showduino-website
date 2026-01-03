import React from 'react'
import useTitle from '../hooks/useTitle'
import Container from '../components/Container'

export default function Product() {
  useTitle('Product')
  return (
    <Container className="py-12">
      <h1 className="text-2xl font-bold">What is Showduino?</h1>
      <p className="mt-4 text-slate-300 max-w-3xl">Showduino is a focused hardware platform and ecosystem for creators of immersive experiences. It combines robust relay outputs, addressable pixel control, DMX bridging and flexible networking to give builders predictable, low-latency control over animatronics, props, and lighting. Designed for field reliability — offline shows, SD hosting, and simple deployment.</p>

      <h2 className="mt-8 text-xl font-semibold">Hardware overview</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white/3 p-4 rounded-md">
          <div className="font-bold">Starter</div>
          <div className="text-sm text-slate-300 mt-2">Basic relay outputs, pixel header, SD slot for offline shows.</div>
        </div>
        <div className="bg-white/3 p-4 rounded-md">
          <div className="font-bold">Pro</div>
          <div className="text-sm text-slate-300 mt-2">Extended relays, DMX, more pixel channels, OTA updates.</div>
        </div>
        <div className="bg-white/3 p-4 rounded-md">
          <div className="font-bold">Studio</div>
          <div className="text-sm text-slate-300 mt-2">Rack-ready with redundant power, multiple DMX universes, and advanced network features.</div>
        </div>
      </div>

      <h3 className="mt-8 text-lg font-semibold">What's in the box</h3>
      <ul className="mt-2 text-sm text-slate-200">
        <li>• Showduino controller board</li>
        <li>• Power connectors & quick-start guide</li>
        <li>• Screws & mounting hardware</li>
        <li>• SD card with demo show (Pro/Studio)</li>
      </ul>

      <h3 className="mt-6 text-lg font-semibold">Requirements & Safety</h3>
      <p className="text-sm text-slate-300 mt-2">Showduino controls mains-connected devices when used with relays. Only qualified persons should connect mains. Follow all local regulations. Disconnect power before wiring. We do not accept liability for improper installation.</p>
    </Container>
  )
}
