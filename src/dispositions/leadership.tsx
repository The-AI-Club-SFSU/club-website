/*

    ! NOTICE: Per leader dict entry, follow this key order. Leave each string value empty if not applicable.
        'role': 'Projects Manager',
        'imgSrc': dir_2023_2024 + 'majedportrait.jpg',
        'quote': (<p>This is for the record. History is written by the victor. History is filled with liars.</p>),
        SOCIALS START HERE
        'linktree': 'https://www.linktr.ee/devalto',
        'instagram': 'https://www.instagram.com/dev_alto',
        'discord': 'https://discordapp.com/users/168406210687533056',
        'github': 'https://www.github.com/dev-alto',
        'linkedin': 'https://www.linkedin.com/in/lance-ruiz',
        'website': 'https://the-devalto-experiments.000webhostapp.com/'

*/

// TODO prepare to add yearly leaderships ✅

import { BiCrown } from 'react-icons/bi'
import { CgCrown } from 'react-icons/cg'
import { GrMoney } from 'react-icons/gr'
import { BsLightningCharge } from 'react-icons/bs';
import { IoShareSocialOutline } from 'react-icons/io5';
import { FaRegHandPeace } from 'react-icons/fa'
import { LuConstruction } from 'react-icons/lu'

import { AiOutlineGlobal } from 'react-icons/ai'
import { MdOutlineEmojiEvents } from 'react-icons/md'

import { PiFeatherDuotone, PiHandshakeBold } from 'react-icons/pi'

const dir_leaderPortraits = '/assets/home/leader_portraits/'
const dir_2023_2024 = dir_leaderPortraits + '2023_2024/'
const dir_2024_2025 = dir_leaderPortraits + '2024_2025/'

const pfp_none = dir_leaderPortraits + 'noprofile.webp'

export const FALLBACK_QUOTE = (
    <p>
        That was no message. <i>This</i> is a message.
    </p>
)

export const leadership = [

    {
        title: '2025',
        major: [
            {
                name: 'Aneesh Kumar',
                role: 'President',
                imgSrc:  '',
                quote: '',
                email: '',
                linktree: '',
                instagram: '',
                discord: '',
                github: '',
                linkedin: '',
                website: '',
                icon: <BiCrown />,
            },
            {
                name: 'Kunj Shah',
                role: 'Vice President',
                imgSrc: '',
                quote: '',
                email: '',
                discord: '',
                linktree: '',
                github: '',
                instagram: '',
                icon: <CgCrown />,
            },
            {
                name: 'Lance Ruiz',
                role: 'Marketing Officer',
                imgSrc: '',
                quote: '',
                email: '',
                linktree: '',
                instagram: '',
                discord: '',
                icon: <PiFeatherDuotone />,
            },
            {
                name: 'Anirudhha',
                role: '-',
                imgSrc: '',
                quote: '',
                email: '',
                linktree: '',
                discord: '',
                github: '',
                linkedin: '',
                instagram: '',
                website: '',
                icon: <GrMoney />,
            },
            {
                name: 'Majeed',
                role: 'Tech Officer',
                imgSrc: '',
                quote: '',
                linktree: '',
                email: '',
                instagram: '',
                discord: '',
                github: '',
                linkedin: '',
                website: '',
                icon: '',
            },
            {
                name: 'Ronin',
                role: '-',
                imgSrc: '',
                quote: '',
                github: '',
                email: '',
                instagram: '',
                discord: '',
                linkedin: '',
                icon: '',
            },
            {
                name: 'Derek Ye',
                role: 'Tech Officer',
                imgSrc: '',
                quote: '',
                discord: '',
                linkedin: '',
                instagram: '',
                email: '',
                github: '',
                icon: '',
            },
            
            // 'Luis J. Prado': {
            //     role: 'Club Co-Advisor',
            //     imgSrc: pfp_none,
            //     linktree: '',
            //     discord: 'https://discordapp.com/users/373597111192911892',
            //     github: '',
            //     linkedin: 'https://www.linkedin.com/in/luis-jibaja-prado-82b4b9135/',
            //     icon: <PiHandshakeBold />,
            // },
            // 'Romeo Calabia': {
            //     role: 'King of the Pirates',
            //     imgSrc: pfp_none,
            //     quote: 'Once you reach the top, it can be really lonely. That\'s why a Lamborghini only has two seats.',
            //     linktree: '',
            //     discord: 'https://discordapp.com/users/373597111192911892',
            //     github: '',
            //     linkedin: 'https://www.linkedin.com/in/luis-jibaja-prado-82b4b9135/',
            //     icon: <></>,
            // }
        ],

        

        minor: [
            /*
            {
                title: 'Web Master',
                label: 'Lance Ruiz',
                color_complex: 'from-[#1eb0b0] shadow-[#1eb0b0]',
                icon: <AiOutlineGlobal />,
            },
            {
                title: 'SOCC Deputy',
                label: 'Oscar Meza',
                color_complex: 'from-[#651e94] shadow-[#651e94]',
                icon: <PiHandshakeBold />,
            },
            {
                title: 'Quality Control',
                label: 'To Be Announced',
                color_complex: 'from-[#9c710c] shadow-[#9c710c]',
                icon: <MdOutlineEmojiEvents />,
            },
            */
        ],

    

    },
    
]

export default leadership
