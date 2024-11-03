import Image from 'next/image'
import React from 'react'
import HeroTextSection from './hero-text-section'

export default function HeroSecondItem() {
  return (
    <div className="h-[80vh] w-full py-2">
      <div className="relative mx-auto flex h-full w-[90%] flex-row items-center justify-around rounded-2xl bg-gradient-to-r from-[#96e9fb] to-[#abecd6]">
        <HeroTextSection
          season="SUMMER 2024"
          title="NEW COLLECTION"
          subTitleFirstLine="We know how large objects will act,"
          subTitleSecondTitle="but things on a small scale."
          buttonText="SHOP NOW"
          onClick={() => 0}
          variant="primary"
          dark
        />
        <div className="block" />
        <Image
          width={1024}
          height={1024}
          alt="hero second item"
          src={'/assets/hero-2.png'}
          className="absolute right-0 h-full w-auto translate-x-14 object-cover"
        />
      </div>
    </div>
  )
}
