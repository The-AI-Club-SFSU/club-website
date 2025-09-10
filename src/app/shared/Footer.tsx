import Link from 'next/link'
import Image from 'next/image'

import Socials from './Socials'

export function Footer() {
    return (
        <footer className='w-full bg-gradient-to-b from-neutral-800 dark:from-neutral-950 to-neutral-950 dark:to-black text-lg font-semibold pt-4 text-center'>

            <Socials/ >

            {/* padding */}
            <div className='h-16' />

            <div className='flex flex-row items-center justify-center gap-8 py-2 w-full'>

                {/* SFSU banner */}
                <Link href='https://www.sfsu.edu' target='_blank' className='flex flex-col gap-2'>
                    <p className='text-left'>A student organization of</p>
                    <Image
                        src={'/assets/bits/sfsu_wordmark.png'}
                        width={256}
                        height={128} 
                        alt='SFSU Wordmark (links to official website)'
                    />
                </Link>

                {/* potentially add ACM @ SFSU specific logo here; currently using generic ACM logo */}
                <Link href='https://sfsuacm.org' target='_blank'>
                    <Image
                        src={'/assets/bits/acm.png'}
                        width={100}
                        height={100}
                        alt='ACM Logo (links to official website)'
                    />
                </Link>

            </div>

            <div className='pt-4 pb-10'>
                <Link href='https://github.com/The-AI-Club-SFSU/club-website' target='_blank'>
                    <p className='text-red-500 text-sm sm:text-lg'>
                        Made with ☕ & ❤️‍🔥 by students, for students.
                    </p>
                </Link>
                <p className='text-neutral-500 text-sm sm:text-lg'>
                    Copyright ©️ The Artificial Intelligence Club @ SFSU 2023-2025
                </p>
            </div>

        </footer>
    )
}