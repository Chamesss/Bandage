'use client'
import { cn } from '@/lib/utils'
import {
  ChevronDown,
  Facebook,
  Heart,
  Instagram,
  Mail,
  Phone,
  Search,
  ShoppingCart,
  Twitter,
  UserRound,
  Youtube
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const navbarDropdownRef = useRef<HTMLLIElement>(null)
  const headerRef = useRef<HTMLElement>(null)

  // add listener to detect click outside of dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navbarDropdownRef.current && !navbarDropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // get the global scroll position of the whole website
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header ref={headerRef} id="header" className="fixed z-[2] w-full">
      <section
        className={cn(
          'bg-darkblue flex h-9 w-full flex-row items-center justify-between px-6 text-sm font-semibold text-white transition-all duration-200 ease-in-out',
          scrollPosition > 20 && 'h-0 overflow-hidden'
        )}
      >
        <div className="flex flex-row items-center gap-10">
          <div className="flex cursor-pointer flex-row items-center gap-1 hover:underline">
            <Phone className="h-4 w-4" />
            <p>(225) 555-0118</p>
          </div>
          <div className="flex cursor-pointer flex-row items-center gap-1 hover:underline">
            <Mail className="h-4 w-4" />
            <p>chamsedin.azouz@gmail.com</p>
          </div>
        </div>
        <p className="cursor-pointer hover:underline">Follow us and get a change to win 80% off</p>
        <div className="flex flex-row items-center gap-3">
          <p>Follow Us :</p>
          <Instagram className="h-4 w-4 cursor-pointer transition-all hover:text-white/70" />
          <Youtube className="h-4 w-4 cursor-pointer transition-all hover:text-white/70" />
          <Facebook className="h-4 w-4 cursor-pointer transition-all hover:text-white/70" />
          <Twitter className="h-4 w-4 cursor-pointer transition-all hover:text-white/70" />
        </div>
      </section>
      <nav className="border-b bg-white px-8">
        <div className="flex h-20 flex-row items-center justify-between">
          <div className="flex h-full flex-row items-center gap-24">
            <h1 className="text-darkblue cursor-pointer text-xl font-bold hover:underline">
              Bandage
            </h1>
            <ul className="text-grayNeutral flex h-full flex-row items-center gap-4">
              <li className="group relative cursor-pointer transition-all hover:text-neutral-900">
                Home
                <ExtendableBar />
              </li>
              <li
                ref={navbarDropdownRef}
                onMouseLeave={() => setIsOpen(false)}
                onMouseEnter={() => setIsOpen(true)}
                onClick={() => setIsOpen(!isOpen)}
                className="relative flex h-full cursor-pointer flex-row items-center gap-1 transition-all hover:text-neutral-900"
              >
                Shop
                <ChevronDown
                  className={cn(
                    'h-4 w-4 transition-all',
                    isOpen ? 'rotate-180 transform' : 'rotate-0 transform'
                  )}
                />
                <ul
                  className={cn(
                    'text-grayNeutral absolute left-1/2 top-full flex -translate-x-1/2 flex-col text-nowrap rounded-b-sm border border-t-transparent bg-white transition-all duration-200 ease-in-out',
                    isOpen ? 'h-fit shadow-sm' : 'h-0 overflow-hidden border-none p-0'
                  )}
                >
                  <li className="my-1 cursor-pointer px-4 transition-all hover:text-neutral-900">
                    Category 1
                  </li>
                  <li className="my-1 cursor-pointer px-4 transition-all hover:text-neutral-900">
                    Category 1
                  </li>
                  <li className="my-1 cursor-pointer px-4 transition-all hover:text-neutral-900">
                    Category 1
                  </li>
                </ul>
              </li>
              <li className="group relative cursor-pointer transition-all hover:text-neutral-900">
                Blog
                <ExtendableBar />
              </li>
              <li className="group relative cursor-pointer transition-all hover:text-neutral-900">
                About Us
                <ExtendableBar />
              </li>
              <li className="group relative cursor-pointer transition-all hover:text-neutral-900">
                Contact
                <ExtendableBar />
              </li>
            </ul>
          </div>
          <div className="text-sky flex cursor-pointer flex-row items-center gap-6 font-bold">
            <div className="flex flex-row items-center gap-1.5 hover:underline">
              <UserRound className="h-5 w-5" />
              <p>Login / Register</p>
            </div>
            <Search className="hover:text-sky/80 cursor-pointer transition-all hover:scale-105 active:scale-95" />
            <ShoppingCart className="hover:text-sky/80 cursor-pointer transition-all hover:scale-105 active:scale-95" />
            <Heart className="hover:text-sky/80 cursor-pointer transition-all hover:scale-105 active:scale-95" />
          </div>
        </div>
      </nav>
    </header>
  )
}

const ExtendableBar = () => (
  <span className="absolute left-1/2 top-full h-0.5 w-0 -translate-x-1/2 rounded-full bg-black transition-all group-hover:w-full" />
)
