'use client'
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { cn } from '@/lib/utils'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import HeroFirstItem from './hero-items/hero-first-item'
import HeroSecondItem from './hero-items/hero-second-item'

export default function Hero() {
  const [api, setApi] = useState<undefined | CarouselApi>()
  const [activeIndex, setActiveIndex] = useState(0)
  const carouselLength = [0, 1]

  useEffect(() => {
    if (api) {
      const onSelect = () => {
        setActiveIndex(api.selectedScrollSnap())
      }
      api.on('select', onSelect)
      return () => {
        api.off('select', onSelect)
      }
    }
  }, [api])

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
      setApi={setApi}
      className="relative"
    >
      <CarouselContent>
        <CarouselItem>
          <HeroFirstItem />
        </CarouselItem>
        <CarouselItem>
          <HeroSecondItem />
        </CarouselItem>
      </CarouselContent>
      <ChevronLeft
        className="absolute left-10 top-1/2 h-10 w-10 -translate-y-1/2 cursor-pointer rounded-full bg-black/40 p-1 text-white"
        onClick={() => api?.scrollPrev()}
      />
      <ChevronRight
        className="absolute right-10 top-1/2 h-10 w-10 -translate-y-1/2 cursor-pointer rounded-full bg-black/40 p-1 text-white"
        onClick={() => api?.scrollNext()}
      />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        {carouselLength.map((i: number) => (
          <button
            key={i}
            className={cn(
              `mr-[1px] h-2 w-10 transition-all`,
              activeIndex === i ? 'bg-white' : 'bg-white/40'
            )}
            onClick={() => api?.scrollTo(i)}
          />
        ))}
      </div>
    </Carousel>
  )
}
