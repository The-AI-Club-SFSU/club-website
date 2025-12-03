'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/past-events', label: 'Past Events' },
  { href: '/gallery', label: 'Photo Gallery' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-6 md:py-5">
      <nav className="mx-auto max-w-4xl">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-midnight-950/60 px-4 py-3 backdrop-blur-xl md:px-6">
          {/* Logo / Club Name */}
          <Link 
            href="/" 
            className="flex items-center gap-2 text-sm font-semibold tracking-wide text-white hover:text-neon-cyan md:text-base"
          >
            <Image
              src="/images/sfsu_logo.png"
              alt="AI Club Logo"
              width={28}
              height={28}
              className="h-6 w-6 md:h-7 md:w-7"
            />
            <span className="hidden sm:inline">Artificial Intelligence Club</span>
            <span className="sm:hidden">AI Club</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-1 md:gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-full px-3 py-1.5 text-xs font-medium md:px-4 md:py-2 md:text-sm ${
                    isActive
                      ? 'bg-white/10 text-neon-cyan'
                      : 'text-white/70 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-neon-cyan/10 blur-sm" />
                  )}
                </Link>
              )
            })}
          </div>
        </div>
      </nav>
    </header>
  )
}
