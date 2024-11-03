import React from 'react'
import HeroTextSection from './hero-text-section'

export default function HeroFirstItem() {
  return (
    <section
      className="flex h-[80vh] w-full items-center justify-around"
      style={{
        backgroundImage: `url('/assets/hero-1.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <HeroTextSection
        season="SUMMER 2024"
        title="NEW COLLECTION"
        subTitleFirstLine="We know how large objects will act,"
        subTitleSecondTitle="but things on a small scale."
        buttonText="SHOP NOW"
        onClick={() => 0}
        variant="secondary"
      />
      <div className="block" />
    </section>
  )
}
