/*

    ! NOTICE: Follow this key order. Leave each string value empty if not applicable.
        backdrop: clubWebsiteBack,
        thumbnail: clubWebsiteThumb,
        description: 'You\'re already here! An informational website about us—Skyline College\'s Computer Science Club. The one-stop shop for club events, resources and opportunities, projects, and more.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'React'],
        github: 'https://github.com/Skyline-College-Computer-Science-Club/project.ClubWebsite',
        trello: ''

    TODO:
        Add tags here

*/

export interface ProjectDetails {
    backdrop: string
    thumbnail: string
    description: string
    tags: string[]
    github: string
    trello: string
}

export const projects: { [key: string]: ProjectDetails } = {
    'Join us on GitHub & Trello': {
        backdrop: '/assets/projects/backdrops/mw2019_cleanhouse.mp4',
        thumbnail: '/assets/projects/thumbnails/github_trello.png',
        description:
            'Stay up-to-date in both interacting with and contributing towards our projects!\n\n📥 Join our GitHub organization below to get started!',
        tags: [],
        github: 'https://github.com/Skyline-College-Computer-Science-Club',
        trello: 'https://trello.com/b/sURZQegY/🚧-project-the-club-website',
    },
    'Placeholder Project 1': {
        backdrop: '',
        thumbnail: '',
        description: 'This is a description for this project.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'React'],
        github: '',
        trello: '',
    },
    'Placeholder Project 2': {
        backdrop: '',
        thumbnail: '',
        description: 'This is a description for this project.',
        tags: ['Rust', 'Blender', 'Python'],
        github: '',
        trello: '',
    },
    'Placeholder Project 3': {
        backdrop: '',
        thumbnail: '',
        description: 'This is a description for this project.',
        tags: ['Lua', 'TypeScript', 'Node.js', 'Rust'],
        github: '',
        trello: '',
    },
}

export default projects
