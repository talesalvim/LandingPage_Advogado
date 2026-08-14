import { useState, useEffect } from 'react'
import { InlineWidget } from 'react-calendly'

export default function Booking() {
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
  }, [])

  if (!hydrated) {
    return (
      <div className="flex items-center justify-center h-[630px] rounded-lg bg-gray-900/30 border border-gray-800">
        <div className="text-center">
          <svg
            className="animate-spin h-8 w-8 text-gold mx-auto mb-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          <p className="text-gray-400 text-sm">Carregando agenda...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full rounded-lg overflow-hidden">
      <InlineWidget
        url={import.meta.env.PUBLIC_CALENDLY_URL}
        styles={{ height: '630px', minWidth: '320px' }}
      />
    </div>
  )
}
