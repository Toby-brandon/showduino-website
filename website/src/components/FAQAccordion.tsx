import React, { useState } from 'react'

export default function FAQAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="space-y-3">
      {items.map((it, i) => (
        <div key={i} className="border border-white/4 rounded-md p-3">
          <button className="w-full flex justify-between items-center" onClick={() => setOpen(open === i ? null : i)}>
            <div className="text-sm font-semibold">{it.q}</div>
            <div className="text-slate-400">{open === i ? '−' : '+'}</div>
          </button>
          {open === i && <div className="mt-2 text-slate-300 text-sm">{it.a}</div>}
        </div>
      ))}
    </div>
  )
}
