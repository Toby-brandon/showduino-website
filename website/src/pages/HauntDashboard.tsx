import React from 'react'
import useTitle from '../hooks/useTitle'
import Container from '../components/Container'
import { getAuth } from 'firebase/auth'
import { auth } from '../lib/firebase'

export default function HauntDashboard() {
  useTitle('HauntSync Dashboard')
  const user = auth.currentUser

  return (
    <Container className="py-12">
      <h1 className="text-2xl font-bold">HauntSync Dashboard</h1>
      <p className="mt-2 text-slate-300">Coming soon. Your account:</p>
      <div className="mt-4 bg-white/3 p-4 rounded-md">
        <div className="text-sm">{user ? user.email : 'Not signed in'}</div>
        <div className="mt-3"><a href="/hauntsync" className="text-sm text-slate-300">Back</a></div>
      </div>
    </Container>
  )
}
