'use client'

import { useRef } from 'react'

import Image from 'next/image'

import { motion, useInView } from 'framer-motion'

export function IntroFade(): React.ReactNode {
    const ref = useRef(null)
    const isInView = useInView(ref)

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 1 }}
            animate={isInView ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.4, ease: 'easeOut' }}
            className='z-50 fixed w-full h-screen flex flex-col items-center justify-center pointer-events-none bg-black'
        >
            <Image
                src={'/assets/bits/ai_club_logo.webp'}
                className='animate-pulse'
                alt=''
                width={140}
                height={140}
                priority
            />
            <Image
                src={'/assets/bits/loader.gif'}
                className='opacity-70'
                alt=''
                width={100}
                height={100}
                unoptimized
                priority
            />

            {/* <p className='text-neutral-500'>loading content...</p> */}
        </motion.section>
    )
}
