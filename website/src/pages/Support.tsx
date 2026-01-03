import React, { useState } from 'react'
import useTitle from '../hooks/useTitle'
import Container from '../components/Container'
import { saveSupportTicket } from '../lib/firestoreHelpers'

export default function Support() {
  useTitle('Support')
  const [form, setForm] = useState({ email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle'|'saving'|'success'|'error'>('idle')

  const submit = async (e: any) => {
    e.preventDefault()
    if (!form.email || !form.subject) return setStatus('error')
    setStatus('saving')
    try {
      if (import.meta.env.VITE_FIREBASE_PROJECT_ID) {
        await saveSupportTicket(form)
      } else {
        const body = encodeURIComponent(form.message)
        window.location.href = `mailto:support@showduino.example?subject=${encodeURIComponent(form.subject)}&body=${body}`
      }
      setStatus('success')
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <Container className="py-12">
      <h1 className="text-2xl font-bold">Support</h1>
      <p className="mt-2 text-slate-300">Reach out for help — community Discord or email support.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/3 p-4 rounded-md">
          <h3 className="font-semibold">Contact</h3>
          <p className="text-sm text-slate-300 mt-2">Discord: <a href="#">Join</a></p>
          <p className="text-sm text-slate-300 mt-1">Email: <a href="mailto:support@showduino.example">support@showduino.example</a></p>
        </div>

        <div className="bg-white/3 p-4 rounded-md">
          <h3 className="font-semibold">Submit a ticket</h3>
          <form onSubmit={submit} className="mt-3 space-y-3">
            <input className="w-full p-2 rounded bg-black/40" placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
            <input className="w-full p-2 rounded bg-black/40" placeholder="Subject" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} />
            <textarea className="w-full p-2 rounded bg-black/40" placeholder="Message" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
            <div>
              <button className="inline-flex items-center px-4 py-2 rounded bg-brand text-black">Send</button>
            </div>
            {status === 'success' && <div className="text-green-400">Ticket submitted. We will reply via email.</div>}
            {status === 'error' && <div className="text-red-400">There was an error. Check required fields.</div>}
          </form>
        </div>
      </div>
    </Container>
  )
}
