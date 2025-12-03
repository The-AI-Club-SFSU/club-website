# SFSU AI Club Website - Developer Guide

**This README file is intended for developers and maintainers of the website.**

**IMPORTANT**: Unless absolutely necessary, maintainers should avoid pushing directly to `live`. Instead, please make a feature branch (e.g. `developer-john/update-photos`) and raise a pull request to merge your feature branch into `live`. All pull requests should recieve at least 1 approval before merging.

Resources (images, slideshows, etc.) from the club can be found [here](https://drive.google.com/drive/folders/1FFlQlnCqje-yrAuRRQ5_w6lleE0WCjIN?usp=drive_link).

This is a Next.js project. You can set up the project with `npm install` and `npm run dev`.

Below are brief guides on how to get started updating the website content. All page content is stored in `/content`. Variables and fields should be documented with usage notes.

## Updating the Home Page
To modify the home page content, head over to `content/home.ts` to modify text content. To modify the meeting calendar, links, etc. head over to `content/clubInfo.ts`.

## Updating the Past Events Page
To add past events, head over to `content/events.ts`. Add new events to the `eventsContent` variable. Please include a link to a slideshow of the event if applicable.

## Updating the Photo Gallery Page
To add photos, head over to `content/gallery.ts`. Add new photos to the `galleryContent` variable. 

If the photos are in HEIC format, you may use `/scripts/convert_heic_to_webp.py` to convert them to webp format.

## License

MIT License - feel free to use for your own club website!