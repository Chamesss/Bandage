import Image from 'next/image'
import React from 'react'
import HeroTextSection from './hero-text-section'

export default function BottomHeroSecondItem() {
  return (
    <section className="relative flex h-[80vh] w-full items-center justify-around gap-4 bg-darkSky">
      <HeroTextSection
        season="SUMMER 2024"
        title="NEW COLLECTION"
        subTitleFirstLine="We know how large objects will act,"
        subTitleSecondTitle="but things on a small scale."
        buttonText="SHOP NOW"
        onClick={() => 0}
        variant="secondary"
        className="z-[2]"
      />
      <div className="block" />
      <Image
        src={'/assets/bottom-hero-2.png'}
        width={1920}
        height={1080}
        alt="bottom-hero-2"
        className="absolute right-0 h-full w-auto object-contain"
      />
    </section>
  )
}
