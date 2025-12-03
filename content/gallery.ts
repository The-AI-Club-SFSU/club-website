/**
 * Photo Gallery Content
 * 
 * Edit this file to add, remove, or modify gallery images.
 * Images are displayed in a responsive grid layout.
 * 
 * Each image has:
 * - id: Unique identifier (required)
 * - url: Image URL - can be external URL or path to /public folder (required)
 * - alt: Alt text for accessibility (required)
 * - caption: Optional caption displayed on hover
 * - date: Optional date when photo was taken
 */

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  caption?: string;
  date?: string;
}

export const galleryContent: GalleryImage[] = [
  // Add your images here. Examples:
  {
    id: "kickoff-2025",
    url: "/images/gallery/fall25-kickoff-bingo.webp",
    alt: "Fall 2025 kickoff meeting with members playing bingo",
    caption: "Bingo at the Fall 2025 Kickoff Meeting",
    date: "September 18, 2025",
  },
]

// Page metadata
export const galleryPageContent = {
  title: "Photo Gallery",
  subtitle: "Moments from our meetings, workshops, and events :)",
  emptyMessage: "No photos yet. Our gallery will be updated after upcoming events!",
  showUnderConstruction: true, // Set to false to hide the badge
}

