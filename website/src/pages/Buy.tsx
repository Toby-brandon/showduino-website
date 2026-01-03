import React, { useState } from 'react'
import useTitle from '../hooks/useTitle'
import Container from '../components/Container'
import Button from '../components/Button'
import { saveLead } from '../lib/firestoreHelpers'

export default function Buy() {
  useTitle('Buy')
  const BUY_URL = import.meta.env.VITE_BUY_URL || 'https://example.com/checkout'

  const [form, setForm] = useState({ name: '', email: '', country: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle')

  const submit = async (e: any) => {
    e.preventDefault()
    if (!form.email || !form.name) return setStatus('error')
    setStatus('saving')
    try {
      if (import.meta.env.VITE_FIREBASE_PROJECT_ID) {
        await saveLead(form)
      } else {
        // fallback: mailto
        const subject = encodeURIComponent('Quote request')
        const body = encodeURIComponent(JSON.stringify(form, null, 2))
        window.location.href = `mailto:hello@showduino.example?subject=${subject}&body=${body}`
      }
      setStatus('success')
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <Container className="py-12">
      <h1 className="text-2xl font-bold">Buy Showduino</h1>
      <p className="mt-2 text-slate-300">Select your tier and begin checkout. Shipping: UK & Worldwide (placeholder).</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="bg-white/3 p-4 rounded-md">
            <div className="font-bold">Selected: Pro</div>
            <div className="text-sm text-slate-300">Price: £199 (one-time)</div>
            <div className="mt-4">
              <a href={BUY_URL}><Button>Proceed to Checkout</Button></a>
            </div>
          </div>

          <div className="bg-white/3 p-4 rounded-md">
            <h3 className="font-semibold">Request a quote</h3>
            <form onSubmit={submit} className="mt-3 space-y-3">
              <input className="w-full p-2 rounded bg-black/40" placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
              <input className="w-full p-2 rounded bg-black/40" placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
              <input className="w-full p-2 rounded bg-black/40" placeholder="Country" value={form.country} onChange={e => setForm({ ...form, country: e.target.value })} />
              <textarea className="w-full p-2 rounded bg-black/40" placeholder="Message" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
              <div>
                <Button type="submit">Request quote</Button>
              </div>
              {status === 'success' && <div className="text-green-400">Request submitted. We will be in touch.</div>}
              {status === 'error' && <div className="text-red-400">There was an error. Check required fields.</div>}
            </form>
          </div>
        </div>

        <div>
          <div className="bg-white/3 p-4 rounded-md">
            <h3 className="font-semibold">Shipping</h3>
            <p className="text-sm text-slate-300 mt-2">We ship worldwide. Shipping cost and customs depend on destination. This page uses a placeholder checkout — replace VITE_BUY_URL with your real checkout URL.</p>
          </div>
        </div>
      </div>
    </Container>
  )
}
