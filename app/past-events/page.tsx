import MarkdownRenderer from '@/components/MarkdownRenderer'
import { eventsContent, eventsPageContent } from '@/content/events'

export const metadata = {
  title: 'Past Events | SFSU AI Club',
  description: 'Explore our previous workshops, talks, and meetups',
}

export default function PastEventsPage() {
  const hasEvents = eventsContent.length > 0

  return (
    <div className="relative min-h-screen">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-60 top-40 h-96 w-96 rounded-full bg-neon-purple/15 blur-[120px]" />
        <div className="absolute -left-40 bottom-40 h-80 w-80 rounded-full bg-neon-cyan/10 blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative px-6 pb-24 pt-32 md:pt-40">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
            {eventsPageContent.showUnderConstruction && (
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1">
                <span className="text-sm">🚧</span>
                <span className="text-xs font-medium text-yellow-400">Under Construction</span>
              </div>
            )}
            <h1 className="font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              {eventsPageContent.title}
            </h1>
            <p className="mt-4 text-lg text-white/60">
              {eventsPageContent.subtitle}
            </p>
          </div>

          {/* Events List */}
          {hasEvents ? (
            <div className="space-y-6">
              {eventsContent.map((event) => (
                <article
                  key={event.id}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:border-white/20 hover:bg-white/[0.07] md:p-8"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="flex-1">
                      {/* Tags */}
                      {event.tags && event.tags.length > 0 && (
                        <div className="mb-3 flex flex-wrap gap-2">
                          {event.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-neon-cyan/10 px-3 py-1 text-xs font-medium text-neon-cyan"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      {/* Title */}
                      <h2 className="text-xl font-semibold text-white md:text-2xl">
                        {event.title}
                      </h2>
                      
                      {/* Date */}
                      <p className="mt-1 text-sm text-white/50">{event.date}</p>
                      
                      {/* Description */}
                      <div className="mt-4 text-white/70">
                        <MarkdownRenderer content={event.description} />
                      </div>
                    </div>

                    {/* Link */}
                    {event.link && (
                      <div className="shrink-0">
                        <a
                          href={event.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white hover:border-neon-cyan/50 hover:bg-white/10 hover:text-neon-cyan"
                        >
                          {event.linkText || 'Learn More'}
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white/5">
                <svg className="h-12 w-12 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-lg text-white/50">{eventsPageContent.emptyMessage}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
