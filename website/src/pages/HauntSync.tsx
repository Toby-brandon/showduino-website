import React from 'react'
import useTitle from '../hooks/useTitle'
import Container from '../components/Container'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth } from '../lib/firebase'

export default function HauntSync() {
  useTitle('HauntSync')

  const provider = new GoogleAuthProvider()

  const login = async () => {
    try {
      await signInWithPopup(auth, provider)
      window.location.href = '/hauntsync/dashboard'
    } catch (err) {
      console.error(err)
      alert('Login error')
    }
  }

  return (
    <Container className="py-12">
      <h1 className="text-2xl font-bold">HauntSync</h1>
      <p className="mt-2 text-slate-300">HauntSync is the cloud companion: account management, backups, and remote deployment.</p>

      <div className="mt-6 bg-white/3 p-6 rounded-md">
        <button onClick={login} className="px-4 py-2 bg-white/5 rounded">Sign in with Google</button>
        <div className="mt-3 text-sm text-slate-400">Or sign in with email (coming soon)</div>
      </div>
    </Container>
  )
}
