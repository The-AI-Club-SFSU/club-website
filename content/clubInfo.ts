/**
 * Club Information Content
 * 
 * This file contains general club information used across the website.
 * Edit this file to update club details without touching component code.
 */

export const clubInfo = {
  // Club name and branding
  name: "SFSU AI Club",
  fullName: "San Francisco State University Artificial Intelligence Club",
  tagline: "Exploring the frontiers of artificial intelligence",
  
  // Social links
  discordLink: "https://discord.gg/PGtY9BXznJ",
  githubLink: "https://github.com/The-AI-Club-SFSU",
  
  // Meeting schedule (used for countdown calculation)
  // Day of week: 0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday
  meetingDayOfWeek: 1, // Thursday
  meetingHour: 18,     // 5 PM (24-hour format)
  meetingMinute: 0,    // :00
  
  // Meeting location
  meetingLocation: "San Francisco State University, LIB 260",
  
  // Excluded date ranges (e.g., holidays, breaks)
  // If the next meeting falls within any of these ranges, it will skip to the next valid meeting
  // Format: { start: "YYYY-MM-DD", end: "YYYY-MM-DD" }
  excludedDateRanges: [
    // Winter break
    { start: "2025-12-16", end: "2026-02-05" },
  ] as { start: string; end: string }[],
  
  // Footer text
  footerText: "© 2025 SFSU AI Club. Built with passion for artificial intelligence.",
}
