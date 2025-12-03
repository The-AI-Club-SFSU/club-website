'use client'

import ReactMarkdown from 'react-markdown'

interface MarkdownRendererProps {
  content: string
  className?: string
}

export default function MarkdownRenderer({ content, className = '' }: MarkdownRendererProps) {
  return (
    <ReactMarkdown
      className={className}
      components={{
        p: ({ children }) => <p className="mb-4 last:mb-0">{children}</p>,
        strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
        em: ({ children }) => <em className="italic text-neon-cyan/90">{children}</em>,
        a: ({ href, children }) => (
          <a 
            href={href} 
            className="text-neon-cyan underline decoration-neon-cyan/30 underline-offset-2 hover:decoration-neon-cyan"
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        ),
        ul: ({ children }) => <ul className="mb-4 list-inside list-disc space-y-2">{children}</ul>,
        ol: ({ children }) => <ol className="mb-4 list-inside list-decimal space-y-2">{children}</ol>,
        li: ({ children }) => <li>{children}</li>,
        h1: ({ children }) => <h1 className="mb-4 text-2xl font-bold text-white">{children}</h1>,
        h2: ({ children }) => <h2 className="mb-3 text-xl font-bold text-white">{children}</h2>,
        h3: ({ children }) => <h3 className="mb-2 text-lg font-semibold text-white">{children}</h3>,
        code: ({ children }) => (
          <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-sm text-neon-cyan">
            {children}
          </code>
        ),
        blockquote: ({ children }) => (
          <blockquote className="border-l-2 border-neon-cyan/50 pl-4 italic text-white/70">
            {children}
          </blockquote>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  )
}
