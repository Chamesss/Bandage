import DirectionalButton from '@/components/assets/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

export default function Card({ title, className = '' }: { title: string; className?: string }) {
  return (
    <div className={cn('relative bg-neutral-300', className)}>
      <Image
        src="https://via.placeholder.com/500"
        width={150}
        height={150}
        alt="placeholder"
        className="h-full w-full object-cover"
        priority={true}
      />
      <div className="absolute bottom-10 left-10">
        <DirectionalButton className="min-w-[8rem] rounded-none sm:w-fit" variant="white-primary">
          {title}
        </DirectionalButton>
      </div>
    </div>
  )
}
