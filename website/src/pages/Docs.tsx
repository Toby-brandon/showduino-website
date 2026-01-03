import React from 'react'
import useTitle from '../hooks/useTitle'
import Container from '../components/Container'

export default function Docs() {
  useTitle('Docs')
  return (
    <Container className="py-12">
      <h1 className="text-2xl font-bold">Docs</h1>
      <p className="mt-2 text-slate-300">Quick links and guides to get started.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <a className="bg-white/3 p-4 rounded-md" href="#quickstart">Quick Start</a>
        <a className="bg-white/3 p-4 rounded-md" href="#wiring">Wiring</a>
        <a className="bg-white/3 p-4 rounded-md" href="#networking">Networking</a>
        <a className="bg-white/3 p-4 rounded-md" href="#troubleshooting">Troubleshooting</a>
        <a className="bg-white/3 p-4 rounded-md" href="#safety">Safety</a>
      </div>

      <section id="quickstart" className="mt-8 bg-white/4 p-6 rounded-md">
        <h2 className="text-xl font-semibold">Quick Start</h2>
        <ol className="mt-3 space-y-2 text-sm text-slate-200 list-decimal list-inside">
          <li>Power the Showduino with a regulated supply as specified in the hardware manual.</li>
          <li>Insert the SD card with the demo show to run without a computer.</li>
          <li>Connect pixels or relays to the appropriate headers. Double-check wiring and common grounds.</li>
          <li>Open the timeline editor in HauntSync to upload a show, or use the onboard web UI.</li>
        </ol>
      </section>
    </Container>
  )
}
