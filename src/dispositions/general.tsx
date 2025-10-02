// Announcements are top-bar website notifications.

// Announcement bar will be hidden if empty string
export const ANNOUNCEMENT_TEXT: string = '🚧 This website is undergoing constant development! Here be dragons! 🚧'
// Background gradient. keep the 'from-' prefix and have the color code within the square [] brackets
export const ANNOUNCEMENT_GRAD_COLOR: string = 'from-[#553E00FF]'

// Overview section for info regarding our meetings
export const INFOHUB_MEETING_DAY: number = 1 // The day of the week, from [0-6] with 0 being Sunday (1 = Monday)
export const INFOHUB_MEETING_HOUR: string = '18:00' // Uses 24-hour time format, i.e "12:34" (18:00 = 6pm)
export const INFOHUB_MEETING_LOCATION: string = 'Makerspace (LIB 260)' // Uses "Building #, Room #-###" format for min ambiguity
export const INFOHUB_MEETING_LOCATION_LINK: string =
    'https://maps.google.com/?q=Makerspace+(LIB+260)+San+Francisco+State+University' // URL to a preferrably Google Maps index of our meeting location
export const INFOHUB_FIRST_MEETING_DATE: string = '2025-10-06T18:00:00-07:00'

export const INFOHUB_ANNOUNCEMENT: React.ReactNode = (
    <>
        <p>We host AI 🛠️ workshops, 🎉 community events, and 💬 guided discussions on ethical and technical topics.</p>
        <p>We also help prepare students for careers in AI development and research.</p>
        <p className='font-semibold'>And!—most importantly—all whilst having an awesome time! 🥳</p>
    </>
)