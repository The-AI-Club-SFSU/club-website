'use client'

import { useState, useEffect } from 'react'
import { clubInfo } from '@/content/clubInfo'

interface CountdownProps {
  label?: string
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function isDateInExcludedRange(date: Date): boolean {
  const dateStr = date.toISOString().split('T')[0] // Get YYYY-MM-DD
  
  for (const range of clubInfo.excludedDateRanges) {
    if (dateStr >= range.start && dateStr <= range.end) {
      return true
    }
  }
  return false
}

function getNextMeetingDate(): Date {
  const now = new Date()
  const { meetingDayOfWeek, meetingHour, meetingMinute } = clubInfo
  
  // Create a date for this week's meeting
  const nextMeeting = new Date(now)
  const currentDay = now.getDay()
  
  // Calculate days until next meeting
  let daysUntilMeeting = meetingDayOfWeek - currentDay
  
  if (daysUntilMeeting < 0) {
    // Meeting day has passed this week, go to next week
    daysUntilMeeting += 7
  } else if (daysUntilMeeting === 0) {
    // It's meeting day - check if meeting time has passed
    const meetingTimeToday = new Date(now)
    meetingTimeToday.setHours(meetingHour, meetingMinute, 0, 0)
    
    if (now >= meetingTimeToday) {
      // Meeting already happened today, go to next week
      daysUntilMeeting = 7
    }
  }
  
  nextMeeting.setDate(now.getDate() + daysUntilMeeting)
  nextMeeting.setHours(meetingHour, meetingMinute, 0, 0)
  
  // Check if the meeting falls within an excluded date range
  // If so, keep adding 7 days until we find a valid meeting date
  // Limit to 52 iterations (1 year) to prevent infinite loops
  let iterations = 0
  while (isDateInExcludedRange(nextMeeting) && iterations < 52) {
    nextMeeting.setDate(nextMeeting.getDate() + 7)
    iterations++
  }
  
  return nextMeeting
}

function formatTime(date: Date): string {
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const ampm = hours >= 12 ? 'p.m.' : 'a.m.'
  const displayHours = hours % 12 || 12
  
  return `${displayHours}:${String(minutes).padStart(2, '0')} ${ampm}`
}

export default function Countdown({ label = 'Next Meeting' }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null)
  const [nextMeetingDate, setNextMeetingDate] = useState<Date | null>(null)

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft | null => {
      const target = getNextMeetingDate()
      setNextMeetingDate(target)
      
      const now = new Date().getTime()
      const difference = target.getTime() - now

      if (difference <= 0) {
        return null
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      }
    }

    // Initial calculation
    setTimeLeft(calculateTimeLeft())

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Format the next meeting date for display
  const formatMeetingDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
    })
  }

  // Don't render anything during SSR to avoid hydration mismatch
  if (timeLeft === null) {
    return (
      <div className="text-center">
        <p className="mb-4 text-lg">
          <span className="text-white/50">{label}: </span>
          <span className="font-medium text-neon-cyan">--</span>
        </p>
        <div className="flex items-center justify-center gap-3 md:gap-4">
          {['Days', 'Hours', 'Mins', 'Secs'].map((unit) => (
            <div key={unit} className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm md:h-20 md:w-20">
                <span className="font-mono text-2xl font-bold text-white md:text-3xl">--</span>
              </div>
              <span className="mt-2 text-xs uppercase tracking-wider text-white/40">{unit}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const units = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Mins' },
    { value: timeLeft.seconds, label: 'Secs' },
  ]

  return (
    <div className="text-center">
      <p className="mb-4 text-lg">
        <span className="text-white/50">{label}: </span>
        {nextMeetingDate && (
          <span className="font-medium text-neon-cyan">
            {formatMeetingDate(nextMeetingDate)} — {formatTime(nextMeetingDate)}
          </span>
        )}
      </p>
      <div className="flex items-center justify-center gap-3 md:gap-4">
        {units.map(({ value, label: unitLabel }) => (
          <div key={unitLabel} className="flex flex-col items-center">
            <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm md:h-20 md:w-20">
              <span className="font-mono text-2xl font-bold tabular-nums text-white md:text-3xl">
                {String(value).padStart(2, '0')}
              </span>
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-neon-cyan/5 to-transparent" />
            </div>
            <span className="mt-2 text-xs uppercase tracking-wider text-white/40">{unitLabel}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
