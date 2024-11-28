'use client'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import HeroFirstItem from './hero-items/hero-first-item'
import HeroSecondItem from './hero-items/hero-second-item'

export default function BottomHero() {
  return (
    <Carousel
      opts={{
        align: 'center',
        loop: true
      }}
      plugins={[
        Autoplay({
          delay: 4000
        })
      ]}
    >
      <CarouselContent>
        <CarouselItem>
          <HeroFirstItem />
        </CarouselItem>
        <CarouselItem>
          <HeroSecondItem />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}
