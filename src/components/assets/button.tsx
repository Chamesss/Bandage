import { cn } from '@/lib/utils'
import React from 'react'

export default function Button({
  children,
  onClick,
  className = '',
  variant = 'primary'
}: {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: 'primary' | 'secondary' | 'outline-primary' | 'outline-secondary' | 'white-primary'
}) {
  const variantStyles = {
    primary: 'bg-darkSky text-white',
    secondary: 'bg-emerald-400 text-white',
    'outline-primary': 'border border-darkSky text-primary',
    'outline-secondary': 'border border-emerald-400 text-secondary',
    'white-primary': 'bg-white text-darkBlue'
  }
  return (
    <button
      onClick={onClick}
      className={cn(
        'h-[3.5rem] w-[8rem] rounded px-2 text-sm font-semibold transition-all hover:scale-105 hover:bg-opacity-80 active:scale-95 sm:w-[200px] sm:px-6 sm:py-2',
        className,
        variantStyles[variant]
      )}
    >
      {children}
    </button>
  )
}
