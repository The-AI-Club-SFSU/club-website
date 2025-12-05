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
    id: "11-18-chatbot-llama",
    title: "Build-a-Bot | Making a Chatbot with Llama",
    date: "November 18, 2025",
    description: "In this workshop we explore Meta's llama API using it to make a use-case specific chatbot. We discuss techniques of propmting and the code foundations of building a context-supported chatbot.",
    link: "https://docs.google.com/presentation/d/1GQMp1DLucSfjCdzGssMjXbAC3kMibuedCcj89WrxwKU",
    linkText: "View our Slides",
    tags: ["Workshop", "Lecture"],
  },
  {
    id: "11-17-platonic",
    title: "Platonic Representation Hypothesis",
    date: "November 17, 2025",
    description: "AI systems are converging on a similar understanding of the world, a shared 'internal' world model. What does this imply about the world? We explore this through Plato's Theory of Forms, and why this may be the case for modern AI systems.",
    link: "https://docs.google.com/presentation/d/1mxhtMM9QjRM2jTyWEmpJVjgyNRNlSBigpsVAN3fmO54/edit?usp=sharing",
    linkText: "View our Slides",
    tags: ["Philosophy", "Lecture", "Discussion"],
  },
  {
    id: "11-10-classical-ai",
    title: "Classical AI & Rational Agents",
    date: "November 10, 2025",
    description: "What was AI before the era of deep learning & language models? We learn about and build symbolic AI agents in this meeting.",
    link: "https://docs.google.com/presentation/d/1pc8G0_RJ2UOFR7uQegQTOpnMeNz143q6Kx8WUfWQLrA/edit?usp=sharing",
    linkText: "View our Slides",
    tags: ["Workshop", "Lecture"],
  },
  {
    id: "10-27-canmachinesthink",
    title: "Can Machines Think?",
    date: "October 27, 2025",
    description: "What is the nature of intelligence? We explore what intelligence is, philosophically, through a thought experiment by John Searle: The Chinese Room.",
    link: "https://docs.google.com/presentation/d/1hoBRPpSmXflvEn2TPj6ozCU0PoFgLpqSr5b5mS4HOFM/edit?usp=sharing",
    linkText: "View our Slides",
    tags: ["Philosophy", "Lecture", "Discussion"],
  },
  {
    id: "10-20-slms",
    title: "Running Language Models Locally",
    date: "October 20, 2025",
    description: "What are Small Language Models (SLMs)? We examine how to run them locally on your own machine, followed by a competition and analysis of their effectiveness.",
    link: "https://docs.google.com/presentation/d/1EW2ZhXCFGhKQJRyyZRowyneEHOum3qtlbvPeLx9gUuY/edit?usp=sharing",
    linkText: "View our Slides",
    tags: ["Prompting", "Lecture", "Competition"],
  },
  {
    id: "10-15-prompt-engineering",
    title: "Prompt Engineering & Prompt Wars",
    date: "October 6, 2025",
    description: "What makes a good prompt? We learn the foundations of prompt engineering and go through the anatomy of an effective prompt. Then, we have a friendly competition to see who can craft the best prompt for a given task.",
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

