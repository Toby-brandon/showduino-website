import React from 'react'
import Button from './Button'

export default function PricingCard({ tier, price, features, cta }: any) {
  return (
    <div className="bg-white/3 p-6 rounded-lg flex flex-col">
      <div className="text-lg font-bold">{tier}</div>
      <div className="text-3xl font-extrabold my-3">{price}</div>
      <ul className="flex-1 space-y-2 text-sm text-slate-200">
        {features.map((f: string, i: number) => (
          <li key={i}>• {f}</li>
        ))}
      </ul>
      <div className="mt-4">
        <a href={cta}>
          <Button className="w-full">Buy {tier}</Button>
        </a>
      </div>
    </div>
  )
}
