import React from 'react'

export default function TestimonialCard({ name, role, quote }: any) {
  return (
    <div className="bg-white/3 rounded-md p-4">
      <div className="text-sm text-slate-100">"{quote}"</div>
      <div className="mt-3 text-xs text-slate-300">— {name}, {role}</div>
    </div>
  )
}
