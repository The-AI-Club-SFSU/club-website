import React from 'react'

import Link from 'next/link'

import { INFOHUB_MEETING_DAY, INFOHUB_MEETING_HOUR, INFOHUB_MEETING_LOCATION, INFOHUB_MEETING_LOCATION_LINK, INFOHUB_ANNOUNCEMENT } from '@/dispositions/general'

import { PiToiletPaperDuotone } from 'react-icons/pi'

import { Countdown } from 'shared/_modules'
import Socials from 'shared/Socials'

function getNextBiWeeklyMeeting() {
    // First meeting is September 17, 2025
    const firstMeeting = new Date('2025-09-17T18:00:00-07:00')
    const currentDate = new Date()
    
    // If current date is before first meeting, return first meeting
    if (currentDate < firstMeeting) {
        return firstMeeting.toLocaleDateString()
    }
    
    // Calculate weeks since first meeting
    const msPerWeek = 7 * 24 * 60 * 60 * 1000
    const weeksSinceFirst = Math.floor((currentDate.getTime() - firstMeeting.getTime()) / msPerWeek)
    
    // Find next bi-weekly meeting (every 2 weeks)
    const nextMeetingWeeks = Math.ceil(weeksSinceFirst / 2) * 2
    const nextMeetingDate = new Date(firstMeeting.getTime() + (nextMeetingWeeks * msPerWeek))
    
    // If the calculated date is in the past or today, move to next bi-weekly meeting
    if (nextMeetingDate <= currentDate) {
        nextMeetingDate.setDate(nextMeetingDate.getDate() + 14)
    }
    
    return nextMeetingDate.toLocaleDateString()
}

const nextMeetingDate = getNextBiWeeklyMeeting()
const nextMeetingDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][INFOHUB_MEETING_DAY]

const meetingTimeFormattedHour = new Date(nextMeetingDate + ' ' + INFOHUB_MEETING_HOUR).toLocaleTimeString('en', { hour: '2-digit', minute:'2-digit' })

export function InfoHub(): React.ReactNode {
    return (
        <section className='flex flex-col justify-center items-center py-72 bg-black'>

            {/* <div className='title-main w-full text-center text-3xl sm:text-4xl font-semibold'>Chapter Overview</div> */}

            <div className='w-full max-w-[1260px] px-8 xl:px-12 py-10 flex flex-col md:flex-row justify-center gap-x-0 md:gap-x-8 gap-y-12 xl:gap-x-16'>

                <div className='flex flex-col gap-y-4 w-full px-2 md:px-0'>
                    <div>
                        <h1 className='title-main text-4xl inline-flex font-semibold'>
                            Our Member Meetings
                            {/* <span>
                                <Image src='/assets/bits/kits/kitty_astro.png' height={32} width={32} className='ml-3 mt-1' alt='' />
                            </span> */}
                        </h1>
                        <h2 className='text-neutral-400'>In-person festivities, fun events, and student member meet-ups!</h2>
                        <div className='w-full h-[1px] bg-neutral-400 my-3' />
                    </div>

                    <div>
                        <h2 className='title-main text-neutral-400 font-semibold'>⏰ WHEN</h2>
                        <h2 className='title-main text-3xl font-semibold pr-0 md:pr-16'>
                            Bi-Weekly, <span className='text-[#FCD690] font-bold'>{nextMeetingDay}s</span> at <span className='text-blue-200 font-bold'>{meetingTimeFormattedHour}</span>
                        </h2>
                        <div className='text-neutral-400 text-sm italic'>
                            (Subject to change)
                        </div>
                        <div className='text-neutral-300'>
                            Next meeting will be on <span className='underline underline-offset-2'>{nextMeetingDate}</span> which is in:
                        </div>
                        <Countdown timestamp={new Date(`${nextMeetingDate} ${INFOHUB_MEETING_HOUR}`).getTime()} className='my-4'/>
                    </div>

                    <div>
                        <h2 className='title-main text-neutral-400 font-semibold'>📍 WHERE</h2>
                        <div className='title-main text-neutral-300 text-xl'>
                            <Link className='font-semibold text-white hover:text-pink-300 duration-150' href={INFOHUB_MEETING_LOCATION_LINK}>
                                {INFOHUB_MEETING_LOCATION}
                            </Link>
                        </div>
                        <div className='text-neutral-300'>
                            You can also tune-in remotely on our{' '}
                            <Link href='https://discord.gg/tDtqmP5sGt' target='_blank' className='text-purple-400 font-semibold'>Discord</Link> Stage.
                        </div>
                        <Link href='https://calendar.google.com/calendar/render?action=TEMPLATE&text=%F0%9F%A4%96+AI+Club+Meeting!+%F0%9F%A4%96&dates=20250917T180000/20250917T200000&ctz=America/Los_Angeles&location=Location+TBA&details=Bi-weekly%20AI%20Club%20meeting.%20All%20are%20welcome!%20To%20see%20the%20agenda%20for%20our%20meeting%2C%20please%20see%20the%20discord%20%23announcements%20channel!%20https%3A%2F%2Fdiscord.gg%2FPH7KxjPz24&recur=RRULE:FREQ=WEEKLY;INTERVAL=2;BYDAY=WE' target='_blank'>
                            <p className='w-52 hover:w-56 transition-all p-2 my-2 text-sm text-center font-semibold hover:animate-pulse bg-yellow-900 rounded-lg'>🔔 Sign up for reminders!</p>
                        </Link>
                    </div>
                </div>

                <div className='hidden md:block w-[1px] h-[500px] bg-neutral-500' />

                <div className='flex flex-col gap-7 w-full px-2 md:px-0 text-right'>
                    <div>
                        <h1 className='title-main text-4xl inline-flex font-semibold'>
                            {/* <span>
                                <Image src='/assets/bits/kits/kitty_write.png' height={32} width={32} className='mr-3 mt-1' alt='' />
                            </span> */}
                            About Us
                        </h1>
                        <h2 className='text-neutral-400'>Words for our student members~! and public netizens too!</h2>
                        <div className='w-full h-[1px] bg-neutral-400 my-3' />
                        <div className='flex flex-col italic gap-y-4'>
                            {INFOHUB_ANNOUNCEMENT}
                        </div>
                    </div>

                    <div>
                        <h1 className='title-main text-4xl inline-flex font-semibold'>
                            {/* <span>
                                <Image src='/assets/bits/kits/kitty_read.png' height={32} width={32} className='mr-3 mt-1' alt='' />
                            </span> */}
                            Resource Hub
                        </h1>
                        <h2 className='text-neutral-400'>Stay connected with our community!</h2>
                        <div className='w-full h-[1px] bg-neutral-400 my-3' />

                        <div className='flex flex-col gap-y-3 text-neutral-300'>
                            <p>We use Discord as our primary hub for communication and resources. Join to stay up to date with events, discussions, and the community.</p>
                            <a href='https://discord.gg/tDtqmP5sGt' target='_blank' className='inline-flex items-center justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors duration-200 hover:scale-105 active:scale-95'>
                                🚀 Join Our Discord Community
                            </a>
                        </div>
                        {/* <div className='flex flex-row flex-wrap justify-end font-semibold gap-x-2 gap-y-2'>
                            <Link
                                href='/'
                                target='_blank'
                                className='flex flex-row items-center group px-3 sm:hover:px-5 py-2 bg-pink-950 bg-opacity-60 hover:bg-opacity-80 transition-all rounded-lg gap-x-2'
                            >
                                <PiToiletPaperDuotone className='group-hover:text-lg'/>Placeholder Resource
                            </Link> */}
                            {/* <Link 
                                href='https://docs.google.com/document/d/1zQNKe-yL5rwGuMRI5siLUNC_SKyXT70c4yooRSxzPZ8/edit?usp=sharing'
                                target='_blank'
                                className='flex flex-row items-center group px-3 sm:hover:px-5 py-2 bg-pink-950 bg-opacity-60 hover:bg-opacity-80 transition-all rounded-lg gap-x-2'>
                                <PiToiletPaperDuotone className='group-hover:text-lg'/>Past Meeting Archives
                            </Link>
                            <Link
                                href='/projects' 
                                target='_blank' 
                                className='flex flex-row items-center group px-3 sm:hover:px-5 py-2 bg-green-950 bg-opacity-60 hover:bg-opacity-80 transition-all rounded-lg gap-x-2'>
                                <BiBriefcase className='group-hover:text-lg'/>View Our Software Projects
                            </Link>
                            <Link 
                                href='https://docs.google.com/forms/d/e/1FAIpQLSc_rpt_CnEXA7beq_UKktr415J97dPa3-xntnE4OCJ1zbpSqg/viewform?usp=sf_link' 
                                target='_blank' 
                                className='flex flex-row items-center group px-3 sm:hover:px-5 py-2 bg-yellow-950 bg-opacity-60 hover:bg-opacity-80 transition-all rounded-lg gap-x-2'>
                                <SiGithub className='group-hover:text-lg'/>Join our GitHub Organization
                            </Link> */}
                        {/* </div> */}
                    </div>

                </div>

            </div>



            <div className='py-8 px-4 text-center border-neutral-600 border-t-[1px]'>
                <Socials />
            </div>
            
        </section>
    )
}