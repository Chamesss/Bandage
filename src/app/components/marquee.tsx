'use client'

import AwsSvg from './assets/aws-svg'
import HooliSvg from './assets/hooli-svg'
import LeaftSvg from './assets/leaft-svg'
import LyftSvg from './assets/lyft-svg'
import RedditSvg from './assets/reddit'
import StripeSvg from './assets/stripe-svg'

interface MarqueeProps {
  pauseOnHover?: boolean
  className?: string
}

const icons = [AwsSvg, HooliSvg, LeaftSvg, LyftSvg, RedditSvg, StripeSvg]

export default function Marquee({ pauseOnHover = true, className = '' }: MarqueeProps) {
  return (
    <div className={`w-full overflow-hidden whitespace-nowrap ${className}`}>
      <div
        onMouseEnter={
          pauseOnHover ? (e) => (e.currentTarget.style.animationPlayState = 'paused') : undefined
        }
        onMouseLeave={
          pauseOnHover ? (e) => (e.currentTarget.style.animationPlayState = 'running') : undefined
        }
        className="animate-marquee inline-flex"
      >
        <div className="flex py-10">
          {[...Array(20)].map((_, i) => {
            const Icon = icons[i % icons.length]
            return <Icon key={i} className="mx-8 my-auto inline-block" />
          })}
        </div>
      </div>
    </div>
  )
}
