import Image from 'next/image'
import React from 'react'

export default function ItemCard() {
  const allColors = ['#A52A2A', '#4682B4', '#F4A460', '#556B2F']
  const numColors = Math.floor(Math.random() * 4) + 1
  const colors = allColors.sort(() => Math.random() - 0.5).slice(0, numColors)

  return (
    <div className="space-y-2.5 overflow-hidden rounded-sm bg-gray-50 pb-4">
      <Image
        src="https://via.placeholder.com/500"
        width={150}
        height={150}
        className="h-[25rem] w-full bg-gray-200"
        alt="placeholder"
      />
      <p className="text-base font-bold capitalize text-darkblue">Product Overview</p>
      <p className="text-sm font-semibold text-neutral-500">Product Description</p>
      <div className="mx-auto flex w-fit flex-row gap-2">
        <p className="text-sm font-bold text-neutral-400 line-through">$16.48</p>
        <p className="font-bold text-darkblue">$6.48</p>
      </div>
      <div className="mx-auto flex w-fit flex-row gap-2">
        {colors.map((color) => (
          <div key={color} className="h-4 w-4 rounded-full" style={{ backgroundColor: color }} />
        ))}
      </div>
    </div>
  )
}
