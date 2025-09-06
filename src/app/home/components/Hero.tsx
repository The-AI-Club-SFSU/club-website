'use client'

import React from 'react'
import { ReactTyped } from 'react-typed'
// import { Element } from 'react-scroll'

import Image from 'next/image'

import { IoMdArrowRoundDown } from 'react-icons/io'
// import { Link } from 'react-scroll'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const TYPED_KEYWORDS = [
    'Design Projects',
    'Pioneer Research',
    'Develop Experience',
    'Grow Your Portfolio',
    'Problem-Solve',
    'Expand Your Network',
    'Collaborate',
]

export function Hero(): React.ReactNode {
    const ref = useRef(null)
    const isInView = useInView(ref)

    return (
        <section className='w-full h-screen'>
            {/* <Element name='hero' /> */}

            {/* the hero backdrop */}
            <motion.div
                className='-z-10 absolute w-full h-full'
                initial={{ transform: 'translateY(10%)', opacity: '0%' }}
                animate={isInView ? { transform: 'translateY(0%)', opacity: '100%' } : { transform: 'translateY(10%)', opacity: '0%' }}
                transition={{ duration: 3, ease: 'backOut' }}
                ref={ref}
            >
                {/* Actual backdrop image */}
                <video
                    width={1280}
                    height={720}
                    className='absolute w-full h-full object-cover'
                    src={'/assets/home/backdrop.webm'}
                    autoPlay
                    playsInline
                    muted
                    loop
                />
                {/* <Image
                    width={1280}
                    height={720}
                    className='absolute w-full h-full blur-[0px] object-cover'
                    src={'/assets/home/skyline_backdrop.jpg'}
                    alt=''
                    priority
                /> */}

                {/* Hero .gif overlay */}
                <Image
                    width={800}
                    height={450}
                    src={'/assets/home/hero_overlay.gif'}
                    className='absolute w-full h-full opacity-[4%]'
                    alt=''
                    priority
                />

            </motion.div>



            {/* the main hero content */}
            <div className='z-10 absolute w-full h-full title-main text-center flex flex-col items-center justify-center pb-12 gap-y-2'>
                {/* mascot */}
                {/* <Image
                    width={80}
                    height={80}
                    src={'/assets/bits/ai_club_logo.webp'}
                    alt=''
                    unoptimized
                    className='z-20 hover:scale-105 transition-all duration-300 drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]'
                /> */}

                {/* The main texts */}
                <h1 className='leading-tight'>
                    <div className='text-[5.2vw] xl:text-[52px] font-bold'>The Artificial Intelligence Club</div>
                    <div className='text-[4.2vw] xl:text-[36px] text-[#ffd24f]'>@ San Francisco State University</div>
                </h1>

                <div className='text-[3.25vw] sm:text-xl'>
                    <p className='group'>&apos;future slogan here&apos; — the <span className='group-hover:text-red-300 group-hover:font-bold transition delay-100'>sky&apos;s</span> <span className='group-hover:text-red-300 group-hover:font-bold transition delay-300'>the</span> <span className='group-hover:text-red-300 group-hover:font-bold transition delay-500'>limit.</span></p>
                </div>

                <h1 className='text-2xl'>
                    {'<'} We{' '}
                    <ReactTyped
                        className='font-bold text-[#b2fc90] drop-shadow-[0_0_4px_rgba(140,210,140,0.5)]'
                        strings={TYPED_KEYWORDS}
                        typeSpeed={50}
                        backSpeed={60}
                        backDelay={2000}
                        loop
                    />{' '}
                    {'>'}
                </h1>

                <div
                    // to='about'
                    // smooth={true}
                    // offset={-140}
                    // duration={1500}
                    className='relative group w-[210px] hover:w-[240px] active:scale-95 duration-150 hover:border-green-900 border-white rounded-xl hover:outline hover:outline-[4px] active:outline-4 text-white text-lg title-main drop-shadow-[0_16px_20px_rgba(0,0,0,0.7)] overflow-hidden'
                >
                    <IoMdArrowRoundDown className='absolute w-full h-full group-hover:translate-y-0 -translate-y-[100%] duration-300 bg-gradient-to-t from-[#16a34aec] to-[#ffffff91] pointer-events-none' />
                    <button className='flex w-full h-full justify-center py-[6px] font-semibold text-center text-shadow-lg shadow-black hover:bg-green-600 bg-neutral-900 bg-opacity-50 duration-300 hover:border-green-300 overflow-hidden'>
                        <p>I&apos;m Interested</p>
                    </button>
                </div> 
            </div>

            <div className='absolute w-full h-full'>
                {/* top        */}
                <div className='absolute top-0 w-full h-[15%] bg-gradient-to-b from-black to-transparent' />
                {/* bottom     */}
                <div className='absolute bottom-0 w-full h-[20%] bg-gradient-to-t from-black to-transparent' />
                {/* cent-left  */}
                <div className=' absolute top-0 left-[25%] w-[25%] h-screen bg-gradient-to-l from-[#00000035] sm:from-[#00000075] to-transparent' />
                {/* cent-right */}
                <div className=' absolute top-0 right-[25%] w-[25%] h-screen bg-gradient-to-r from-[#00000035] sm:from-[#00000075] to-transparent' />
            </div>

            <div className='w-full flex flex-col items-center justify-center absolute bottom-8 mx-auto text-center font-semibold opacity-55'>
                <IoMdArrowRoundDown className='text-2xl' />
                <p className='animate-pulse select-none'>Scroll Down to Enter</p>
            </div>
        </section>
    )
}
