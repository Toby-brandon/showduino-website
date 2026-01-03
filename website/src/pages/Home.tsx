import React from 'react'
import useTitle from '../hooks/useTitle'
import Container from '../components/Container'
import Button from '../components/Button'
import TestimonialCard from '../components/TestimonialCard'
import FAQAccordion from '../components/FAQAccordion'

export default function Home() {
  useTitle('Home')
  const buyUrl = import.meta.env.VITE_BUY_URL || 'https://example.com/checkout'

  return (
    <div>
      <section className="pt-12 pb-8">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">Showduino — The control system for immersive FX.</h1>
              <p className="mt-4 text-slate-300 max-w-xl">Build synchronized lighting, audio‑triggered effects, DMX fixtures, and reliable relay control. Designed for haunt builders, prop makers, pixel artists and show runners who demand low latency and rock‑solid offline shows.</p>

              <div className="mt-6 flex gap-3">
                <a href="/buy"><Button>Buy Showduino</Button></a>
                <a href="#features"><Button variant="ghost">See Features</Button></a>
              </div>

              <div className="mt-6 text-xs text-slate-400">Trusted by creative studios and haunt builders worldwide</div>
            </div>
            <div>
              <div className="w-full h-56 bg-gradient-to-br from-[#111013] to-[#1a1226] rounded-md flex items-center justify-center text-slate-400">Hero image / video placeholder</div>
            </div>
          </div>
        </Container>
      </section>

      <section id="features" className="py-12">
        <Container>
          <h2 className="text-2xl font-bold">Features</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[ 'Timeline editor', 'Audio triggering & analysis', 'Relay & low-voltage outputs', 'Addressable pixels (WS2812/APA102)', 'DMX input/output', 'Wi‑Fi & OTA updates', 'Offline show hosting (SD)', 'Local automation & scheduling' ].map((f) => (
              <div key={f} className="bg-white/3 p-4 rounded-md">{f}</div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 bg-gradient-to-b from-transparent to-black/40">
        <Container>
          <h2 className="text-2xl font-bold">How it works — 3 steps</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/3 p-4 rounded-md">
              <div className="font-semibold">1. Design</div>
              <div className="text-sm text-slate-300 mt-2">Use the timeline editor to sequence lights, audio, and effects.</div>
            </div>
            <div className="bg-white/3 p-4 rounded-md">
              <div className="font-semibold">2. Deploy</div>
              <div className="text-sm text-slate-300 mt-2">Upload shows to the device or play live over Wi‑Fi with HauntSync.</div>
            </div>
            <div className="bg-white/3 p-4 rounded-md">
              <div className="font-semibold">3. Run</div>
              <div className="text-sm text-slate-300 mt-2">Reliable offline playback with SD hosting, low-latency local control.</div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <h2 className="text-2xl font-bold">What creators say</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <TestimonialCard name="Maya R." role="Haunt Designer" quote="Finally a controller built by people who understand practical hauntry. Durable and predictable." />
            <TestimonialCard name="Alex P." role="Pixel Artist" quote="Low latency and great pixel support — I can run big panels without drama." />
            <TestimonialCard name="Jordan K." role="Show Runner" quote="Offline shows that just work. Saves us setup time and nerves." />
          </div>
        </Container>
      </section>

      <section className="py-12 bg-gradient-to-b from-transparent to-black/50">
        <Container>
          <h2 className="text-2xl font-bold">FAQ</h2>
          <div className="mt-4">
            <FAQAccordion items={[ { q: 'Does Showduino support DMX?', a: 'Yes — Showduino supports DMX input and output on Pro hardware and can bridge DMX to pixels.' }, { q: 'Can I run shows offline?', a: 'Absolutely. Shows can be hosted on an SD card and run without network connectivity.' }, { q: 'Do you support addressable LEDs?', a: 'Yes — WS2812, APA102 and common pixel drivers are supported.' } ]} />
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="bg-gradient-to-r from-[#131218] to-[#1b1420] p-8 rounded-md text-center">
            <h3 className="text-xl font-bold">Ready to build your next scare?</h3>
            <p className="text-slate-300 mt-2">Order hardware and start crafting unforgettable shows.</p>
            <div className="mt-4">
              <a href={buyUrl}><Button>Buy Showduino</Button></a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
