import React from 'react'
import clsx from 'clsx'

export default function Button({ children, className = '', variant = 'solid', ...props }: any) {
  return (
    <button
      {...props}
      className={clsx(
        'inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2',
        variant === 'solid' && 'bg-brand text-white hover:brightness-105',
        variant === 'ghost' && 'bg-transparent text-slate-100/90 hover:bg-white/3',
        className
      )}
    >
      {children}
    </button>
  )
}
