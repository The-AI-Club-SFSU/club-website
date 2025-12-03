import Image from 'next/image'
import Countdown from '@/components/Countdown'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import { homeContent } from '@/content/home'
import { clubInfo } from '@/content/clubInfo'

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-neon-purple/20 blur-[100px]" />
        <div className="absolute -right-40 top-60 h-96 w-96 rounded-full bg-neon-cyan/15 blur-[120px]" />
        <div className="absolute bottom-40 left-1/3 h-64 w-64 rounded-full bg-neon-blue/10 blur-[80px]" />
      </div>

      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20">
        <div className="mx-auto max-w-4xl text-center">
          {/* Logo + Title */}
          <div className="flex items-center justify-center gap-4 md:gap-6">
            <Image
              src="/images/logo_gold_no_text.webp"
              alt="AI Club Logo"
              width={80}
              height={80}
              className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24"
            />
            <h1 className="font-display text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl">
              {homeContent.title}
            </h1>
          </div>
          
          {/* Subtitle */}
          <p className="mt-4 text-xl text-white/50 md:text-2xl">
            {homeContent.subtitle}
          </p>

          {/* Manifesto */}
          <div className="mt-8 text-lg leading-relaxed text-white/70 md:text-xl">
            <MarkdownRenderer content={homeContent.manifesto} />
          </div>
        </div>

        {/* CTA + Countdown Side by Side */}
        <div className="mt-16 flex w-full max-w-4xl flex-col items-center gap-8 md:flex-row md:items-center md:justify-center md:gap-12 lg:gap-16">
          {/* Discord CTA */}
          <div className="flex flex-col items-center text-center">
            <a
              href={clubInfo.discordLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue px-8 py-4 text-lg font-semibold text-midnight-950 hover:scale-105 hover:shadow-lg hover:shadow-neon-cyan/30"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              {homeContent.ctaText}
            </a>
            <p className="mt-3 text-sm text-white/40">{homeContent.ctaSubtext}</p>
            <p className="mt-2 text-sm text-white/50">
              📍 {clubInfo.meetingLocation}
            </p>
          </div>

          {/* Divider (visible on desktop) */}
          <div className="hidden h-32 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent md:block" />

          {/* Countdown */}
          <div className="flex-shrink-0">
            <Countdown label={homeContent.nextMeetingLabel} />
          </div>
        </div>
      </section>
    </div>
  )
}
