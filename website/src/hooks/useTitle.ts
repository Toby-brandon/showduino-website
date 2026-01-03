import { useEffect } from 'react'

export default function useTitle(title: string) {
  useEffect(() => {
    const base = 'Showduino'
    document.title = title ? `${title} — ${base}` : base
  }, [title])
}
