import Button from '@/components/assets/button'
import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
  season?: string
  title?: string
  subTitleFirstLine?: string
  subTitleSecondTitle?: string
  buttonText?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline-primary' | 'outline-secondary' | 'white-primary'
  dark?: boolean
  className?: string
}

export default function HeroTextSection({
  season = '',
  title = '',
  subTitleFirstLine = '',
  subTitleSecondTitle = '',
  buttonText = '',
  onClick,
  variant = 'primary',
  dark = false,
  className = ''
}: Props) {
  return (
    <div className={cn('w-fit space-y-8', className)}>
      <h6 className={cn('font-semibold', dark ? 'text-darkblue' : 'text-white')}>{season}</h6>
      <h1 className={cn('text-4xl font-bold', dark ? 'text-darkblue' : 'text-white')}>{title}</h1>
      <div>
        <h6 className={cn('text-gray-200', dark ? 'text-neutral-700' : 'text-gray-200')}>
          {subTitleFirstLine}
        </h6>
        <h6 className={cn('text-gray-200', dark ? 'text-neutral-700' : 'text-gray-200')}>
          {subTitleSecondTitle}
        </h6>
      </div>
      <Button onClick={onClick} variant={variant}>
        {buttonText}
      </Button>
    </div>
  )
}
