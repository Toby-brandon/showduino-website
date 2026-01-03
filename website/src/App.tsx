import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Product from './pages/Product'
import Pricing from './pages/Pricing'
import Buy from './pages/Buy'
import Docs from './pages/Docs'
import Support from './pages/Support'
import HauntSync from './pages/HauntSync'
import HauntDashboard from './pages/HauntDashboard'
import StatusBar from './components/StatusBar'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#050507] via-[#07070a] to-[#060607]">
      <StatusBar />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/support" element={<Support />} />
          <Route path="/hauntsync" element={<HauntSync />} />
          <Route path="/hauntsync/dashboard" element={<HauntDashboard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
