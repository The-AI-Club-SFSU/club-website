// Announcements are top-bar website notifications.

// Announcement bar will be hidden if empty string
export const ANNOUNCEMENT_TEXT: string = '🚧 This website is undergoing constant development! Here be dragons! 🚧'
// Background gradient. keep the 'from-' prefix and have the color code within the square [] brackets
export const ANNOUNCEMENT_GRAD_COLOR: string = 'from-[#553E00FF]'

// Overview section for info regarding our meetings
export const INFOHUB_MEETING_DAY: number = 5 // The day of the week, from [0-6] with 0 being Sunday
export const INFOHUB_MEETING_HOUR: string = '12:55' // Uses 24-hour time format, i.e "12:34"
export const INFOHUB_MEETING_LOCATION: string = 'Building 7, Room 7-324 @ Skyline College' // Uses "Building #, Room #-###" format for min ambiguity
export const INFOHUB_MEETING_LOCATION_LINK: string = 'https://maps.app.goo.gl/bjWJEroRLzsDPYcGA' // URL to a preferrably Google Maps index of our meeting location

export const INFOHUB_ANNOUNCEMENT: React.ReactNode = (
    <>
        <p>Greetings traveler! Get comfortable and look around! Also, be sure to subscribe to our social media accounts below!</p>
        <p className='font-semibold'>Looking to join? Join us at our next meeting! (see meetings to the left)</p>
    </>
)