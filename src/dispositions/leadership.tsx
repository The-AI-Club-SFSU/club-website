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
        title: '2024 — 2025',
        major: [
            {
                name: '-',
                role: 'President',
                imgSrc: pfp_none,
                quote: '',
                email: 'mailto:president+website@skycs.club',
                linktree: 'https://www.linktr.ee/devalto',
                instagram: '',
                discord: 'https://discordapp.com/users/168406210687533056',
                github: 'https://www.github.com/dev-alto',
                linkedin: 'https://www.linkedin.com/in/lance-ruiz',
                website: 'https://lanceruiz.com',
                icon: <BiCrown />,
            },
            {
                name: 'Jonnald Hernandez',
                role: 'Vice-President',
                imgSrc: pfp_none,
                quote: '',
                email: 'mailto:vicepresident+website@skycs.club',
                discord: 'https://discordapp.com/users/188163620826382336',
                linktree: '',
                github: '',
                instagram: '',
                icon: <CgCrown />,
            },
            {
                name: 'Yuting Duan',
                role: 'Secretary',
                imgSrc: pfp_none,
                quote: '',
                email: 'mailto:secretary+website@skycs.club',
                linktree: '',
                instagram: '',
                discord: 'https://discordapp.com/users/1068781129370439720',
                icon: <PiFeatherDuotone />,
            },
            {
                name: 'Oscar Meza',
                role: 'Treasurer',
                imgSrc: pfp_none,
                quote: '',
                email: 'mailto:treasurer+website@skycs.club',
                linktree: '',
                discord: 'https://discordapp.com/users/312818081229701124',
                github: '',
                linkedin: '',
                instagram: '',
                website: '',
                icon: <GrMoney />,
            },
            {
                name: '-',
                role: 'Marketing & Outreach',
                imgSrc: pfp_none,
                quote: '"The human brain, such an enigma." - Majed',
                linktree: '',
                email: 'mailto:projectmanager+website@skycs.club',
                instagram: '',
                discord: 'https://discordapp.com/users/853343486756388944',
                github: '',
                linkedin: '',
                website: '',
                icon: <LuConstruction />,
            },
            {
                name: 'Majed Elqossari',
                role: 'Associate Project Manager',
                imgSrc: pfp_none,
                quote: '"Strive always to excel in virtue and truth." - Prophet Muhammed',
                github: 'https://www.github.com/CptnMaj',
                email: 'mailto:assocprojectmanager+website@skycs.club',
                instagram: 'https://www.instagram.com/majidali.77',
                discord: 'https://discordapp.com/users/928831417734004746',
                linkedin: 'https://www.linkedin.com/in/majedelqossari/',
                icon: <LuConstruction />,
            },
            {
                name: 'Amapola Garcia-Gomez',
                role: 'Social Outreach Coordinator',
                imgSrc: pfp_none,
                quote: '"You can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future." - Steve Jobs',
                discord: 'https://discordapp.com/users/711984995387965513',
                linkedin: 'www.linkedin.com/in/amapolagarcia',
                instagram: 'https://www.instagram.com/amapolabear_/',
                email: 'mailto:skylinecompsciclub+website@gmail.com',
                github: '',
                icon: <IoShareSocialOutline />,
            },
            {
                name: 'Denise Hum',
                role: 'Chapter Faculty Advisor',
                imgSrc: pfp_none,
                quote: 'Data are summaries of thousands of stories. Tell a few of those stories to help make the data meaningful.',
                linktree: '',
                email: 'mailto:humd+website@smccd.edu',
                discord: 'https://discordapp.com/users/735277805662765066',
                github: '',
                linkedin: 'https://www.linkedin.com/in/denisehum/',
                icon: <PiHandshakeBold />,
            },
            {
                name: 'Lynn Aung',
                role: 'Chapter Technologist',
                imgSrc: pfp_none,
                quote: '"The only time I look down is when I tie my shoe." - Lynn Aung',
                discord: 'https://discordapp.com/users/1134930369230147685',
                github: 'https://github.com/loofsan',
                email: 'mailto:technologists+website@skycs.club',
                icon: <BsLightningCharge />,
            },
            {
                name: 'Rea Angela Vera Cruz',
                role: 'Chapter Technologist',
                imgSrc: pfp_none,
                quote: '',
                email: 'mailto:technologists+website@skycs.club',
                discord: 'https://discordapp.com/users/115633349237669890',
                github: '',
                icon: <BsLightningCharge />,
            },
            {
                name: 'Michael Tse',
                role: 'Chapter Technologist',
                imgSrc: pfp_none,
                quote: '',
                email: 'mailto:technologists+website@skycs.club',
                discord: 'https://discordapp.com/users/396563683255517194',
                github: '',
                icon: <BsLightningCharge />,
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
        ],
    },
    
]

export default leadership
