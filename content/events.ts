/**
 * Events Content
 * 
 * Edit this file to add, remove, or modify events.
 * Events are displayed in the order they appear in the array.
 * 
 * Each event has:
 * - id: Unique identifier (required)
 * - title: Event name (required)
 * - date: Date string (required)
 * - description: Event description, supports Markdown (required)
 * - link: Optional URL for more info or registration
 * - linkText: Custom text for the link button
 * - tags: Optional array of category tags
 */

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  link?: string;
  linkText?: string;
  tags?: string[];
}

export const eventsContent: Event[] = [
  // Add events here
  {
    id: "10-15-prompt-engineering",
    title: "Prompt Engineering & Prompt Wars",
    date: "October 6, 2025",
    description: "An introduction to foundational concepts leading up to modern artificial intelligence. In this meeting, we reason our way from neurons -> neural networks -> large language models.",
    link: "https://docs.google.com/presentation/d/1ShPfiBlp8__U5FbV8SfNYRPb3MoFvkVOqFkV0l6seSU/edit?usp=sharing",
    linkText: "View our Slides",
    tags: ["Prompting", "Lecture", "Competition"],
  },
  {
    id: "10-6-ai-101",
    title: "Artificial Intelligence 101: The Ground Up",
    date: "October 6, 2025",
    description: "An introduction to foundational concepts leading up to modern artificial intelligence. In this meeting, we reason our way from neurons -> neural networks -> large language models.",
    link: "https://docs.google.com/presentation/d/1-7guhQxloLRlYaiFOei_eDQcKPIEzvYa-WIW-ps2WLw/edit?usp=sharing",
    linkText: "View our Slides",
    tags: ["Kickoff", "Lecture"],
  },
  {
    id: "fall-2025-kickoff",
    title: "Fall 2025 Kickoff Meeting",
    date: "September 18, 2025",
    description: "Join us for our first meeting of the fall semester! We'll introduce our plans for the semester, upcoming workshops, and project opportunities.",
    link: "https://docs.google.com/presentation/d/1nLD_NLbWGrBipvybrZxrDuUqQJLboQisen8yY-oLpWQ/edit?usp=sharing",
    linkText: "View our Slides",
    tags: ["Meeting", "Social"],
  }
]

// Page metadata
export const eventsPageContent = {
  title: "Past Events",
  subtitle: "Explore our previous workshops, lectures, and discussions!",
  emptyMessage: "No events yet. Check back soon for upcoming workshops and meetings!",
  showUnderConstruction: true, // Set to false to hide the badge
}

