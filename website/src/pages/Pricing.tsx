import React from 'react'
import useTitle from '../hooks/useTitle'
import Container from '../components/Container'
import PricingCard from '../components/PricingCard'

export default function Pricing() {
  useTitle('Pricing')
  const buyUrl = import.meta.env.VITE_BUY_URL || 'https://example.com/checkout'
  return (
    <Container className="py-12">
      <h1 className="text-2xl font-bold">Pricing</h1>
      <p className="mt-3 text-slate-300">Hardware is sold as a one-time purchase. HauntSync cloud features are optional and billed monthly.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <PricingCard tier="Starter" price="£99" features={["Basic relays", "Pixel header (1x)", "SD card hosting"]} cta={buyUrl} />
        <PricingCard tier="Pro" price="£199" features={["Extended relays", "DMX I/O", "2x pixel channels", "OTA"]} cta={buyUrl} />
        <PricingCard tier="Studio" price="£399" features={["Rack-ready", "Multiple DMX", "Redundant power"]} cta={buyUrl} />
      </div>

      <div className="mt-8 bg-white/3 p-6 rounded-md">
        <h3 className="font-semibold">HauntSync Cloud</h3>
        <p className="text-sm text-slate-300 mt-2">Optional subscription: keep show backups, remote deployment, shared libraries, and team accounts. Billed monthly. Hardware is one-time purchase; HauntSync is software.</p>
      </div>
    </Container>
  )
}
