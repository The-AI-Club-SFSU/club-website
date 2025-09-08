import React from 'react'
import Image from 'next/image'

import { IntroFade } from 'shared/_modules'

// Preserved for future implementation
// import { Carousel } from './components/_modules'

export default function Projects(): React.ReactNode {
    return (
        <>
            <IntroFade />
            
            {/* Coming Soon Section */}
            <div className='w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black via-neutral-900 to-black px-4'>
                
                {/* AI Club Logo */}
                <Image
                    src={'/assets/bits/ai_club_logo.webp'}
                    width={120}
                    height={120}
                    alt='AI Club Logo'
                    className='mb-8 hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]'
                    unoptimized
                />
                
                {/* Main Heading */}
                <h1 className='title-main text-5xl md:text-7xl font-bold text-center mb-4'>
                    <span className='bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(100,150,255,0.5)]'>
                        Coming Soon!
                    </span>
                </h1>
                
                {/* Subtitle */}
                <p className='text-xl md:text-2xl text-neutral-300 text-center max-w-2xl mb-8 leading-relaxed'>
                    We're working on showcasing our amazing AI projects and student innovations. 
                    Stay tuned for exciting developments!
                </p>
                
                {/* Decorative Elements */}
                <div className='flex gap-4 mb-12'>
                    <div className='w-3 h-3 bg-blue-400 rounded-full animate-pulse'></div>
                    <div className='w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-300'></div>
                    <div className='w-3 h-3 bg-green-400 rounded-full animate-pulse delay-700'></div>
                </div>
                
                {/* Call to Action */}
                <div className='text-center'>
                    <p className='text-neutral-400 mb-4'>Want to contribute to our projects?</p>
                    <a 
                        href='https://discord.gg/tDtqmP5sGt' 
                        target='_blank'
                        className='inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl'
                    >
                        Join Our Discord
                        <svg className='w-5 h-5 ml-2' fill='currentColor' viewBox='0 0 24 24'>
                            <path d='M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z'/>
                        </svg>
                    </a>
                </div>
            </div>
            
            {/* Preserved components for future implementation */}
            {/* <Carousel /> */}
        </>
    )
}
